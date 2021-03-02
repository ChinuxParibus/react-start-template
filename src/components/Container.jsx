import React from 'react'
import TodoList from './TodoList.jsx'
import TodoInput from './TodoInput.jsx'

import ContextProvider from '../context/Provider.js'

export default function Container() {
  return (
    <ContextProvider>
      <div className="container">
        <TodoInput />
        <TodoList />
      </div>
    </ContextProvider>
  )
}
