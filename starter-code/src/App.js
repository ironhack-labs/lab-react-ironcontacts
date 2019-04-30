import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {contacts.slice(0, 5).map((contact, index) => <Contact key={contact.name} {...contact}/>)}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
