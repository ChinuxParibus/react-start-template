import React from 'react'
import ButtonCounter from './ButtonCounter'

export default class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <ButtonCounter />
        <ButtonCounter />
        <ButtonCounter />
      </>
    )
  }
}