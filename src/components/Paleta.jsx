import React from 'react'

export default function Paleta(props) {
  const [color, setColor] = React.useState('green')

  function handleChange(event) {
    setColor(event.target.value)
  }

  return (
    <div>
      <input type="color" value={color} onChange={handleChange} />
      <div style={{width: '400px', height: '400px', backgroundColor: color}}>
        {color}
      </div>
    </div>
  )
}