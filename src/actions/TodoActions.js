import Dispatcher from '../Dispatcher'

export function add(todo) {
  console.log(todo)
  Dispatcher.dispatch({
    type: 'ADD_TODO',
    todo
  })
}

export function remove(todo) {
  Dispatcher.dispatch({
    type: 'REMOVE_TODO',
    todo
  })
}

export function udpate(todo) {
  Dispatcher.dispatch({
    type: 'UPDATE_TODO',
    todo
  })
}