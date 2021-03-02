import React from 'react'

import Context from './Context.js'

import TodoStore from '../stores/TodoStore.js'
import TodoReducer from '../reducers/TodoReducer.js'

export default function Provider({ children }) {

  const [store, dispatch] = React.useReducer(TodoReducer, TodoStore)

  return (
    <Context.Provider value={[store, dispatch]}>
      { children }
    </Context.Provider>
  )
}
