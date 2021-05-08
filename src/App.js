import React, {Component} from 'react';
import './App.css';
import Table from './components/Table/Table'
import ActionsContainer from './components/ActionsContainer/ActionsContainer.js'
import contacts from './contacts.json';

class App extends Component{
  state = {
    contacts: contacts.slice(0, 5),
  }

  updateContactsState = (value) => {
    this.setState({contacts: value});
  }

  handleAddRandomContact = () => {
    const randomContact = this.getRandomContact(contacts);

    this.state.contacts.push(randomContact);

    this.updateContactsState(this.state.contacts);
  }

  handleSortContactsByName = () => {
    this.state.contacts.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name));

    this.updateContactsState(this.state.contacts);
  };

  handleSortContactsByPopularity = () => {
    this.state.contacts.sort((contact1, contact2) => contact1.popularity - contact2.popularity);

    this.updateContactsState(this.state.contacts);
  };

  handleDeleteContact = (contactId) => {
    const {contacts} = this.state; //porque estamos usando muito isso e é bom resumir
    const contactToDeleteIdx = this.state.contacts.findIndex(contact => contact.id === contactId); //o findIndex vai retornar direto o index que preciso usar 
    contacts.splice(contactToDeleteIdx, 1); //achei o índice que quero deletar e pego ele mesmo
    this.updateContactsState(contacts);
  };

  getRandomContact = contacts => {
    return contacts[this.getRandomNumber(0, contacts.length)];
  };

  getRandomNumber = (min, max) => {
    const minNum = min;
    const maxNum = max;
    return Math.floor(Math.random() * (maxNum - minNum)) + min; 
  };

  render () {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <ActionsContainer 
        addRandomContact={this.handleAddRandomContact}
        sortContactsByName={this.handleSortContactsByName}
        sortContactsByPopularity={this.handleSortContactsByPopularity}
        />
        <Table 
        headers={['Picture', 'Name', 'Popularity', 'Action']} 
        data={this.state.contacts} 
        deleteContact={this.handleDeleteContact}
        />
      </div>
    )
  }
}

export default App;
