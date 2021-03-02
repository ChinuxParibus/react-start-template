import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Counter () {
  const { count } = useParams()

  return (
    <div>
      <div
        style={{width: '50px', height: '50px'}}
        className="text-center border lead text-bold p-1 mt-3"
      >
        { count ? count : 0 }
      </div>
      <Link to='/counter/23'>Contador con parámetros</Link>
    </div>
  )
}
