import React from 'react'

export default function LightBulb(props) {
  const [on, setOn] = React.useState(false)

  const handleClick = () => {
    setOn(!on)
  }

  return (
    <div
      style={{
        width: '150px',
        height: '150px',
        backgroundColor: on ? 'yellow' : 'black'
      }}
      className="m-1 rounded-circle border"
      onClick={handleClick}
    />
  )
}
