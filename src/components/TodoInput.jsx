import React from 'react'

import Context from '../context/Context.js'

export default function TodoInput () {
  const [store, dispatch] = React.useContext(Context)

  const handleAdd = (event) => {
    dispatch({
      type: 'ADD_TODO',
      payload: { id: Math.random(), description: store.todo_task, done: false }
    })
    dispatch({
      type: 'CLEAN_TODO'
    })
  }

  const write = (task) => {
    dispatch({
      type: 'WRITE_TODO',
      payload: task
    })
  }

  return (
    <div className="ml-4 input-group mt-4">
      <input type="text" value={store.todo_task} onChange={(event) => write(event.target.value)} />
      <button className="btn btn-primary" onClick={handleAdd}>Add todo</button>
    </div>
  )
}
