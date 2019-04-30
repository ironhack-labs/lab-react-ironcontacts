import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contact from './Contact';

class App extends Component {
  constructor(){
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    }
  }

  addRandomContact(){
    let currentContacts = [...this.state.contacts];
    currentContacts.push(contacts[Math.floor(Math.random()*contacts.length)]);
    
    this.setState({
      ...this.state,
      contacts: currentContacts
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>IronContacts</h1>
        <button onClick={()=>this.addRandomContact()}>Add random Actor</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => <Contact key={contact.name} {...contact}/>)}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
