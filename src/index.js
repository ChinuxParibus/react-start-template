
class ButtonCounter extends React.Component {
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
    /*return React.createElement(
      'div',
      {},
      [
        React.createElement('h2', { key: 1 }, this.state.counter),
        React.createElement('button', {
          key: 2,
          onClick: () => { this.increment() }
        }, ['Incrementar'])
      ]
    )*/
    return (
      <div>
        <h2>{ this.state.counter }</h2>
        <hr />
        <button onClick={() => { this.increment() }}>Incrementar</button>
      </div>
    )
  }
}

ReactDOM.render(
  <ButtonCounter />,
  document.querySelector('#app')
)

