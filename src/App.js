import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos/Todos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>TODO</h3>
        <hr/>
        <Todos/>
      </div>
    );
  }
}

export default App;
