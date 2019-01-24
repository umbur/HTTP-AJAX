import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendsList.js'
import AddFriend from './components/AddFriend.js'

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <h1>Friends List</h1>
        <FriendList />
        <AddFriend />
      </div>
    );
  }
}

export default App;