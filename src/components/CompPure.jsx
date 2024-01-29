import React, { Component, PureComponent } from 'react'

export default class CompPure extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      toggle: false
    }
  }

  handleInc = () => {
    if (this.state.toggle) {
      this.setState({
        count: this.state.count + 1
      })
    }
    else {
      this.setState({
        count: this.state.count
      })
    }
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {
    { console.log("This is Pure Component") }
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.handleInc}>Increment</button>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    )
  }
}
