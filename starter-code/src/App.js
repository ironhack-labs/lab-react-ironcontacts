import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts'

class App extends Component {
  render() {

    return (
      <>
      <h1>IronContacts</h1>
      <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
      </table>
      <table>
        <Contacts />
      </table>
      </>
    )
  }
}

export default App;
