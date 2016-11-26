import React, { Component } from 'react'
import Todo from './Todo/Todo'

class Todos extends Component {
  constructor() {
    super()
    
    const todos = [{
      id: 1,
      name: 'Learn React'
    }, {
      id: 2,
      name: 'Learm Flux'
    }, {
      id: 3,
      name: 'Learm Redux'
    }]

    this.state = {
      todos: todos
    }
  }

  render() {
    const todos = this.state.todos.map(todo => <Todo key={todo.id} todo={todo}/>)   
    return (
      <ul>
        {todos}
      </ul>
    )
  }
}

export default Todos