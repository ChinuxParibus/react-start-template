import React from 'react'

export default function Semaforo () {
  const [rojo, setRojo] = React.useState(false)
  const [verde, setVerde] = React.useState(false)
  const [amarillo, setAmarillo] = React.useState(false)

  const handleRojo = (event) => {
    setRojo(true)
    setVerde(false)
    setAmarillo(false)
  }

  const handleVerde = () => {
    setRojo(false)
    setVerde(true)
    setAmarillo(false)
  }

  const handleAmarillo = () => {
    setRojo(false)
    setVerde(false)
    setAmarillo(true)
  }

  return (
    <div style={{display: 'flex'}}>
      <div style={{ borderRadius: '50%', border: '1px solid black', width: '200px', height: '200px', margin: '2rem', backgroundColor: rojo ? 'red' : 'white'}} onClick={handleRojo} ></div>
      <div style={{borderRadius: '50%', border: '1px solid black', width: '200px', height: '200px', margin: '2rem', backgroundColor: verde ? 'green' : 'white'}} onClick={handleVerde} ></div>
      <div style={{borderRadius: '50%', border: '1px solid black', width: '200px', height: '200px', margin: '2rem', backgroundColor: amarillo ? 'yellow' : 'white'}} onClick={handleAmarillo} ></div>
    </div>
  )
}