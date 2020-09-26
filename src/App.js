import React from 'react';
import './App.css';
import contacts from './contacts.json';
import Button from './components/Button'
import Table from './components/Table';

export default class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  addRandomContact = () => {
    const randomNumber = Math.floor(
      Math.random() * (contacts.length - this.state.contacts.length) +
        this.state.contacts.length
    );

    this.setState({
      contacts: [
        ...this.state.contacts.filter((f) => f !== contacts[randomNumber]),
        contacts[randomNumber],
      ],
    });
  };
  sortName = () => {
    const contactSortName = this.state.contacts.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    this.setState ({
      contacts : contactSortName
    })
  };

  sortPopularity = () => {
    this.setState ({
      contacts : this.state.contacts.sort((a, b) => b.popularity - a.popularity)
    })
  }

  deleteUser = (indexDelete) => {
    this.setState ({
      contacts : this.state.contacts.filter((user, index) => index !== indexDelete)
    })

  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Button event = {this.addRandomContact}>Add Random Contact</Button>
        <Button event = {this.sortName}>Sort By Name</Button>
        <Button event = {this.sortPopularity}>Sort By Popularity</Button>
        <Table contacts = {this.state.contacts} deleteUser = {this.deleteUser}/>
      </div>
    );
  }
}
