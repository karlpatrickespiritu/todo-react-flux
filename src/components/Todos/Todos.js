import React, { Component } from 'react'
import Todo from './Todo/Todo'
import TodoStore from '../../stores/TodoStore'

class Todos extends Component {
  constructor() {
    super()
    TodoStore.all(todos => this.state = { todos })
  }

  componentWillMount() {
    TodoStore.on('change', () => {
      TodoStore.all(todos => this.setState({ todos }))
    })
  }

  isEmptyTodos() {
    return this.state.todos.length < 1
  }

  render() {
    const todos = this.state.todos.map(todo => <Todo key={todo.id} todo={todo}/>)   
    return (
      <ul className="list-group">
        {this.isEmptyTodos() ? 
          <div className="alert alert-warning">No todos found</div>: ''
        }
        {todos}
      </ul>
    )
  }
}

export default Todos