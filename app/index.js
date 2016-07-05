import React from 'react'
import ReactDOM from 'react-dom'

require('./index.scss')

class Hello extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
    }
    //this.changeQuote = this.changeQuote.bind(this)
  }

  render() {
    return (
      <div className="container">
        <div className="secondary-content group">
          <div className="icon-weather">
            Nothing here yet!
          </div>
          
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
