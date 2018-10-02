import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contact from './Contact';

class App extends Component {
  render() {
    const firstContacts = contacts.slice(0,5);
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {firstContacts.map(e => <Contact name={e.name} pictureUrl={e.pictureUrl} popularity={e.popularity} key={e.name}></Contact>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
