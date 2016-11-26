import React, { Component } from 'react'
import { add } from '../../../actions/TodoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      todo: { name: '' }
    }
  }

  onSubmit(event) {
    event.preventDefault()
    add(this.state.todo)
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
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          <label>Todo</label>
          <input type="text" value={this.state.todo.name} onChange={this.onChangeTodoName.bind(this)} className="form-control" placeholder="Add todo.."/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}

export default TodoForm