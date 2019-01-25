import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList.js'

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <h1>Friends List</h1>
        <FriendsList /> 
      </div>
    );
  }
}

export default App;