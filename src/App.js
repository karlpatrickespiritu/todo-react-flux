import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos/Todos'
import TodoForm from './components/Todos/TodoForm/TodoForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <TodoForm/>
            <hr/>
            <Todos/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
