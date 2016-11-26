import Dispatcher from '../Dispatcher'

let TodoActions = {
  add: (todo) => {
    Dispatcher.dispatch({
      type: 'ADD_TODO',
      todo
    })
  },
  remove: (todo) => {
    Dispatcher.dispatch({
      type: 'REMOVE_TODO',
      todo
    })
  }
}

export default TodoActions