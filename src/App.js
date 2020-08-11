import React, { Component } from 'react';
import './App.css';
import ContactList from './Components/ContactList';

class App extends Component {

  render() {
    // console.log(x);
    return (
      <div className="App">
        <h1>hi</h1>
        <ContactList />
      </div>
    );
  }
}

export default App;
