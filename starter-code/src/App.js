import React, { Component } from 'react';
import contacts from './contacts.json'
import './App.css';
import Contact from './Contact.js';

contacts.slice(0, 5).forEach(val => console.log(val));
class App extends Component {
 
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    }
  }





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>
        <nav>
          <ul>
            <li><button >Add Random Contact</button></li>
          </ul>
        </nav>
        <table>
          <thead>
          <tr>
            <th>Picture</th>
            <th>name</th>
            <th>Popularity</th>
          </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((val, idx) => 
              <Contact key={idx} {...val} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
