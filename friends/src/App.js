import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
    };
  }
  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
    .then(res => this.setState({ friends: res.data }, () => console.log(res)))
      .catch(err => { throw new Error(err) });
  }
  
  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;