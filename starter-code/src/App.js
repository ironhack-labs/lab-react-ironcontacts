import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts'

class App extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>IronContacts</h1>
        </header>
        <table><tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        </table>
        <Contacts />
      </div>
    );
  }
}

export default App;
