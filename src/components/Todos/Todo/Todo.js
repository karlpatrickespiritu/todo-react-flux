import React, { Component } from 'react'
import TodoActions from '../../../actions/TodoActions'

class Todo extends Component {
  remove() {
    TodoActions.remove(this.props.todo)
  }
  
  render() {
    return (
      <li className="list-group-item">
        {this.props.todo.name}
        <button type="button" className="close" onClick={this.remove.bind(this)}>
          <span aria-hidden="true">×</span>
        </button>
      </li>
    )
  }
}

export default Todo