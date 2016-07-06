import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

require('./index.scss')

class Hello extends React.Component {
  constructor() {
    super()
    this.state = {
      geolocation: true,
    }
    this.latitude = 1
    this.longtitude = 1
    //this.changeQuote = this.changeQuote.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)
    // this.showGeo = this.showGeo.bind(this)
  }

  // TODO: some weirdness with this
  showGeo() {
    console.log("component Did Mount")
    var startPos;
    var geoSuccess = function(position) {
      console.log(`here ${this.latitude} + ${this.longtitude}`)
      startPos = position;
      this.latitude = startPos.coords.latitude;
      this.longtitude = startPos.coords.longitude;
      console.log(`here ${this.latitude} + ${this.longtitude}`)
    };
    navigator.geolocation.getCurrentPosition(geoSuccess.bind(this));

    setTimeout(function() {
      console.log(`${this.latitude} + ${this.longtitude}`)
      $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${Math.round(this.latitude)}&lon=${Math.round(this.longtitude)}`,function(data) {
        console.log(data);
      });
    }.bind(this), 3000)
  }

  render() {
    if (navigator.geolocation) {
      console.log('Geolocation is supported!');
    }
    else {
      console.log('Geolocation is not supported for this Browser/OS version yet.');
    }
    return (
      <div className="container">
        <div className="secondary-content group">
          <div className="icon-weather">
            Nothing here yet!
          </div>
          <div id="startLat" ref="startLat">

          </div>
          <div id="startLon" ref="startLon">

          </div>
          <button onClick={this.showGeo.bind(this)}>Show Geo</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
