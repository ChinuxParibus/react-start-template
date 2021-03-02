/**
 * store: almacen de los datos
 * action: objeto indicador de la acción a ejecutar. Tiene dos parámetros
 * action.type = string que define la accion a ejecutar
 * action.payload = datos complementarios que pueden modificar el store */

const reducer = (store, action) => {
  switch(action.type) {
    case "ADD_TODO":
      return {
        ...store,
        todo_list: [...store.todo_list, action.payload]
      }
      break;
    case "DEL_TODO":
      return {
        ...store,
        todo_list: store.todo_list.filter(todo => todo.id !== action.payload.id)
      }
      break;
    case "WRITE_TODO":
      return {
        ...store,
        todo_task: action.payload
      }
      break;
    case "CLEAN_TODO":
      return {
        ...store,
        todo_task: ''
      }
      break;
    default:
      throw new Error('Hubo un error')
  }
}

export default reducer

