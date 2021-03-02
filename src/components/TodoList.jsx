import React from 'react'

import Context from '../context/Context.js'

export default function TodoList() {
  const [store, dispatch] = React.useContext(Context)

  //const [ todoList, setTodoList ] = React.useState([])

  const handleDelete = (id) => {
    dispatch({
      type: 'DEL_TODO',
      payload: { id }
    })
  }

  return (
    <div style={{'maxWidth': 350}}>
      <ul className="mt-4">
      {
        store.todo_list.map(todo => {
          return (
            <li
              key={todo.id}
              className="d-flex justify-content-between align-items-center border p-1"
            >
              {todo.description}
              <span>
                <button className="btn btn-danger" onClick={(event) => handleDelete(todo.id)}>Done</button>
              </span>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}
