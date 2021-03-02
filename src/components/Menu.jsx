import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <ul>
      <li><Link to='/'>Ir a Inicio</Link></li>
      <li><Link to='/light'>Ir a LightBulb</Link></li>
      <li><Link to='/palette'>Ir a Palette</Link></li>
      <li><Link to='/counter'>Ir a Counter</Link></li>
    </ul>
  )
}
