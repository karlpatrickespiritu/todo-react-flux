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
      completed: false,
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

  remove(todo) {
    console.log('remove todo:', todo)
  }

  update(todo) {
    console.log('update todo:', todo)
  }

  handleActions(payload) {
    switch (payload.type) {
      case 'ADD_TODO': this.add(payload.todo); break;
      case 'REMOVE_TODO': this.remove(payload.todo.id); break;
      case 'UPDATE_TODO': this.update(payload.todo); break;
      default: break
    }
  }
}

const todoStore = new TodoStore()
Dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore