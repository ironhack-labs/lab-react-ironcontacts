import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import ActorsList from './components/List'


class App extends Component {

  render() {
    console.log(contacts)
    return (
      <div className="App">
        <header className="App-header">
          <h1>IronContacts</h1>
        </header>
        <ActorsList />
      </div>
    );
  }
}

export default App;
