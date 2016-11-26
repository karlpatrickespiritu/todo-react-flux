import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    return (
      <li>{this.props.todo.name}</li>
    )
  }
}

export default Todo