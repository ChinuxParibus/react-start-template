import React from 'react'

import ButtonCounter from './ButtonCounter.jsx'

export default class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        {/* Los props son atributos que reciben valores, dichos valores */}
        {/* pueden ser personalizados desde el componente que se monta. */}
        <ButtonCounter seconds={60} />
        <ButtonCounter seconds={100} />
        <ButtonCounter seconds={40} />
      </div>
    )
  }
}