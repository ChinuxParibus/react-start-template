import React from 'react'

export default class ButtonCounter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div className="container mt-4">
        <h2>{ this.state.counter }</h2>
        <hr />
        <button className="btn btn-success" onClick={() => { this.increment() }}>Incrementar</button>
      </div>
    )
  }
}