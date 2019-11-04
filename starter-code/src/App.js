import React, { Component } from 'react';
import './App.css';
import contactsJSON from './contacts.json';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import List from './App/Components/List';
import { Button } from 'shards-react';

const fiveContacts = contactsJSON.slice(0,5);

class App extends Component {
  state = {
    data: {
      contacts: fiveContacts
    }
  }

  addRandomContact = (event) => {
    event.preventDefault()
    let { data } = this.state;
    let newContact = contactsJSON[Math.floor(Math.random()*contactsJSON.length)];
    data.contacts.push(newContact);
    this.setState({ data });
  }

  sortByName = (event) => {
    event.preventDefault()
    let { data } = this.state;

    data.contacts.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if ( nameA < nameB ) return -1;
      if ( nameA > nameB ) return 1;

      return 0;

    });
    
    this.setState({ data });
  }

  sortByPopularity = (event) => {
    event.preventDefault()
    let { data } = this.state;

    data.contacts.sort((a, b) => b.popularity - a.popularity)

    this.setState({ data });
  }

  deleteContact = (index) => {
    //event.preventDefault()
    let { data } = this.state;

    data.contacts.splice(index, 1);
    
    this.setState({ data });
  }

  render() {
    let { addRandomContact, sortByName, sortByPopularity, deleteContact } = this;

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Button theme="light" onClick={event=>addRandomContact(event)}>Add Random Contact</Button>
        <Button theme="light" onClick={event=>sortByName(event)}>Sort by Name</Button>
        <Button theme="light" onClick={event=>sortByPopularity(event)}>Sort by Popularity</Button>
        <List contacts={fiveContacts} deleteContact={deleteContact}/>
      </div>
    );
  }
}

export default App;
