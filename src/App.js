import React, { Component } from 'react';

import './App.css';

import Table from './components/Table/Table';

import ActionsContainer from './components/ActionsContainer/ActionsContainer';

import contacts from './contacts.json';

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
  }

  handleAddRadomContact = () => {
    console.log('add radom contact')

    const randomContact = this.getRandomContact(contacts);

    this.state.contacts.push(randomContact);

    this.setState({ contacts: this.state.contacts })
  }

  getRandomContact = contacts => {
    return contacts[this.getRandomNumber(0, contacts.length)];
  }

  getRandomNumber = (min, max) => {
    const minNum = min;
    const maxNum = max;
    return Math.floor(Math.random() * (maxNum - minNum)) + min;
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>

        <ActionsContainer addRadomContact={this.handleAddRadomContact} />

        <Table 
          headers={['Picture', 'Name', 'Popularity']} 
          data={this.state.contacts} />
      </div>
    );
  }
}

export default App;
