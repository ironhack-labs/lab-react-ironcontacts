import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import ContactTable from './components/ContactTable'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { contact: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]] }
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>

        {this.state.contact.map(elem => <ContactTable pictureUrl= {elem.pictureUrl} name= {elem.name} popularity= {elem.popularity} />)}
      </div>
    );
  }
}

export default App;
