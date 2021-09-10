import {Component} from 'react'
import './index.css'
class Counter extends Component {
  onIncrement = () => {
    this.setState(prevState => {
      console.log(`prv state is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  onDecrement = () => {
    this.setState(prevState => {
      console.log(`prv state is ${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }
  onReset = () => {
    this.setState(prevState => {
      console.log(`reseting to zero from ${prevState.count}`)
      return {count: (prevState.count = 0)}
    })
  }
  state = {count: 0}

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">counter</h1>
        <p className="count">{count}</p>

        <div>
          <button onClick={this.onIncrement} className="button">
            Increase
          </button>
          <button onClick={this.onDecrement} className="button">
            Decrease
          </button>
          <button onClick={this.onReset} className="button">
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
