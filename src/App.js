import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos/Todos'
import TodoForm from './components/Todos/TodoForm/TodoForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm/>
        <Todos/>
      </div>
    );
  }
}

export default App;
