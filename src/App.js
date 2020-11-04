import React from 'react';
import './App.css';

import contacts from './contacts.json';

import Table from './components/Table/Table';

import ActionsContainer from './components/ActionsContainer/ActionsContainer';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),

  }

  handleAddRandomContact = () => {
    console.log('Add random button.');

    const randomContact = this.getRandomContact(contacts);

    this.state.contacts.push(randomContact);
    this.setState({ contacts: this.state.contacts });
  };

  handleSortContactByName = () => {
    this.state.contacts.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name));
    console.log(this.state.contacts);
    this.setState({ contacts: this.state.contacts });
    return this.state.contacts;
  }

  handleSortContactByPopularity = () => {
    this.state.contacts.sort((contact1, contact2) => {
      return contact1.popularity - contact2.popularity;
    });
    console.log(this.state.contacts);
    this.setState({ contacts: this.state.contacts });
    return this.state.contacts;
  }

  getRandomContact = contacts => {
    return contacts[this.getRandomNumber(0, contacts.length)];
  };

  getRandomNumber = (min, max) => {
    const minIndex = min;
    const maxIndex = max;
    return Math.floor(Math.random() * (maxIndex - minIndex)) + minIndex;
  }

  deleteContact = idx => {
    const contactToDeleteIdx = this.state.contacts.findIndex(contact => contact.id === idx);
    this.state.contacts.splice(contactToDeleteIdx, 1);
    this.setState(this.state.contacts);
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <ActionsContainer click={this.handleAddRandomContact} action='Add Random Contact'/>
        <ActionsContainer click={this.handleSortContactByName} action='Sort by Name' />
        <ActionsContainer click={this.handleSortContactByPopularity} action='Sort by Popularity' />
  
        <Table 
          headers={['Picture', 'Name', 'Popularity', 'Delete']} 
          data={this.state.contacts} 
          deleteContact={this.deleteContact}/>
      </div>
    );
  };
}

export default App;
