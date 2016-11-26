import React, { Component } from 'react'
import TodoActions from '../../../actions/TodoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      todo: { name: '' }
    }
  }

  onSubmit(event) {
    event.preventDefault()
    TodoActions.add(this.state.todo)
    this.emptyForm()
  }

  emptyForm() {
    this.setState({ 
      todo: { name: '' }
    })
  }

  onChangeTodoName(event) {
    this.setState({ 
      todo: {
        name: event.target.value
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)} name="todo-form">
        <div className="form-group">
          <label>Todo</label>
          <input type="text" required value={this.state.todo.name} onChange={this.onChangeTodoName.bind(this)} className="form-control" placeholder="Add todo.."/>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Add</button>
      </form>
    )
  }
}

export default TodoForm