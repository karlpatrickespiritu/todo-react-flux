import React, { Component } from 'react'

class Todo extends Component {
  render() {
    return (
      <li>{this.props.todo.name}</li>
    )
  }
}

export default Todo