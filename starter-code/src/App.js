import React, { Component } from 'react';
import contacts from './contacts.json'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    contacts: contacts.slice(0,5)
  }

  componentDidMount(){
    
  }

  

  render() {
    return (
      <div className="App">
        {alert(this.state.contacts.length)}
      </div>
    );
  }
}

export default App;
