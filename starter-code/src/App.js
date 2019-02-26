import React, { Component } from 'react';
import './App.css';
import ContactList from './components/Actor';

class App extends Component {
  render() {
    return (
      <div>
      <h1>IronContacts</h1>
        <ContactList />
      </div>
    );
  }
}

export default App;




