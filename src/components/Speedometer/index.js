// Write your code here
import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState =>
      prevState.speed < 200 ? {speed: prevState.speed + 10} : null,
    )
  }

  onBreak = () => {
    this.setState(prevState =>
      prevState.speed > 0 ? {speed: prevState.speed - 10} : null,
    )
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bgContainer">
        <h1 className="title">
          <em>SPEEDOMETER</em>
        </h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <div className="bottomContainer">
          <h1 className="speedText">Speed is {speed}mph</h1>
          <p className="rule">Min Limit is 0mph, Max Limit is 200mph</p>
          <button
            type="button"
            className="button one"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button type="button" className="button two" onClick={this.onBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
