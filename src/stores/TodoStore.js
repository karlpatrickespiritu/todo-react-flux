import { EventEmitter } from "events";
import Dispatcher from '../Dispatcher'
import uuid from 'uuid'

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.initializeTodos()
  }

  initializeTodos() {
    this.todos = [{
      id: uuid(),
      name: 'Learn React',
      completed: true,
      created_at: Date.now()
    }, {
      id: uuid(),
      name: 'Learn Flux',
      completed: false,
      created_at: Date.now()
    }, {
      id: uuid(),
      name: 'Learn Redux',
      completed: false,
      created_at: Date.now()
    }]
  }

  all(callback) {
    return callback(this.todos)
  }

  add(todo) {
    this.todos.push({
      id: uuid(),
      name: todo.name,
      completed: false,
      created_at: Date.now()
    })
    this.emit('change')
  }

  remove(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
    this.emit('change')
  }

  handleActions(payload) {
    switch (payload.type) {
      case 'ADD_TODO': this.add(payload.todo); break;
      case 'REMOVE_TODO': this.remove(payload.todo.id); break;
      case 'TODO_TOGGLE_COMPLETED': this.toggleCompleted(payload.todo); break;
      default: break
    }
  }
}

const todoStore = new TodoStore()
Dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore