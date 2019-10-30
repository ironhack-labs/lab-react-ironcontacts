import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Table from './components/Table/Table';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import FilterForm from './components/FilterForm/FilterForm';

class App extends Component {
  state = {
    contacts: [],
    filteredContacts: [],
    contactsDb: [],
  };

  componentDidMount() {
    this.setState({
      contacts: contacts.slice(0, 5),
      filteredContacts: contacts.slice(0, 5),
      contactsDb: contacts.slice(5),
    })
  }
  
  addRandomContact = () => {
    const { contacts, filteredContacts, contactsDb } = this.state;
    const randomIdx = Math.floor(Math.random() * contactsDb.length);
    const newContact = contactsDb[randomIdx];
    
    contacts.push(newContact);
    filteredContacts.push(newContact);
    contactsDb.splice(randomIdx, 1);
    console.log('chamou add random contact', filteredContacts)

    this.setState({
      contacts,
      filteredContacts,
      contactsDb,
    })
  }
  
  removeContact = (idx) => {
    const { contacts, filteredContacts, contactsDb } = this.state;
    
    contactsDb.push(contacts[idx]);
    contacts.splice(idx, 1);
    filteredContacts.splice(idx, 1);

    this.setState({
      contacts,
      filteredContacts,
      contactsDb,
    })
  }

  filterContacts = (filter) => {
    const { contacts } = this.state;
    const { name, popularity } = filter;

    const filteredContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(name) && contact.popularity >= +popularity;
    });

    this.setState({
      filteredContacts,
    })
  }

  sortByName = () => {
    const { contacts } = this.state;

    const sortedContacts = contacts.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    this.setState({
      contacts: sortedContacts
    })

  }

  sortByPopularity = () => {
    const { contacts } = this.state;

    const sortedContacts = contacts.sort((a, b) => {
      return +a.popularity - +b.popularity;
    });
    this.setState({
      contact: sortedContacts
    })
  }

  render() {
    const { contacts } = this.state
    
    return (
      <div className="">
        <Title children="IronContacts" />
        <Button type="button" onclick={this.addRandomContact} children='Add random contact'></Button>
        <Button type="button" onclick={this.sortByName} children='Sort by name'></Button>
        <Button type="button" onclick={this.sortByPopularity} children='Sort by popularity'></Button>
        {/* <FilterForm filterFunction={this.filterContacts} /> */}
        <Table contacts={contacts} funcRemove={this.removeContact} children='Delete' />
      </div>
    );
  }
}

export default App;
