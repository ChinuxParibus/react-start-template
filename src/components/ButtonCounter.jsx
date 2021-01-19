import React, {useEffect} from 'react'

export default function ButtonCounter () {
  const [counter, setCounter] = React.useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  // Se ejecuta cuando se monta el componente (componentDidMount())
  React.useEffect(() => {
    console.log('Se ejecuta la primera vez')
  }, [])

  // Se ejecuta cuando se modifica alguno de los estados del componente (componentDidUpdate())
  React.useEffect(() => {
    console.log('se ejecuta cada vez que se modifica')
  }, [counter])

// NO USAR ESTO NUNCA
/*  React.useEffect(() => {
    setCounter(counter + 1)
  })
*/

/*  componentDidMount() {
    setInterval(() => {
      this.increment()
    }, 1000)
  }
*/
  return (
    <>
      <div className="lead text-bold m-4">{counter}</div>
      <button onClick={increment}>Cambia</button>
    </>
  )
}
