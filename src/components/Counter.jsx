// Puedes importar useState y useEffect desde React directamente
// import {useEffect, useState} from 'react'
import React from 'react'

export default function Counter () {
  const [counter, setCounter] = React.useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  // Se ejecuta cuando se monta el componente
  // Solo la primera vez que es renderizado (componentDidMount())
  React.useEffect(() => {
    console.log('Se ejecuta la primera vez')
  }, [])

  // Se ejecuta la primera vez y cuando se modifica alguna de las dependencias
  // (componentDidUpdate())
  // Si cambian los props, algun state o hay un forceUpdate(), también se ejecuta
  React.useEffect(() => {
    const interval = setInterval(() => {
      increment()
    }, 1000)

    return () => clearInterval(interval)
  }, [counter])

// Se ejecuta siempre, en todas las etapas del ciclo de vida del componente
// Se recomienda (NO USAR ESTO NUNCA)

/*  React.useEffect(() => {
      console.log('se ejecuta siempre')
    })
*/
  return (
    <> {/* React.fragment */}
      <div className="lead text-bold m-4">{counter}</div>
      <button onClick={increment}>Cambia</button>
    </>
  )
}
