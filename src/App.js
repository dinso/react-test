import React from 'react';
import './App.css';
import userList from './components/userList';

import firebase from './firebase';

// Get a reference to the database service
var db = firebase.database();

class App extends React.Component {
  constructor(props) {
    super(props);   
    this.state = {userList : []}
  }

 

  render(){
    return (
      <userList />

    );
  }

}

export default App;
