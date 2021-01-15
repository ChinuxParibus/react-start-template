import React from 'react'
import PropTypes from 'prop-types' // instalar con npm install prop-types

export default class ButtonCounter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: this.props.seconds // props asignados al componente desde afuera
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.increment()
    }, 1000)
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div className="container mt-4 border border-success lead">
        <h2>{ this.state.counter }</h2>
      </div>
    )
  }
}

// Definición de los prop types
ButtonCounter.propTypes = {
  seconds: PropTypes.number
}

// Valores por defecto de los prop types en caso de que fallen estos.
ButtonCounter.defaultProps = {
  seconds: 0
}