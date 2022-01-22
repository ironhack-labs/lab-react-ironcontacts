import React, { Component} from 'react';
import contacts from './contacts.json';
import Table from './components/Table';
import Container from './components/container/Container';
import './App.css';

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
  }

  addRandomContact = () => {
    const randomContact = this.getRandomContact(contacts);

    this.state.contacts.push(randomContact);

    this.setState( { contacts: this.state.contacts } )
  }
  
  sortContactName = () => {
    this.state.contacts.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name));

    this.setState( { contacts: this.state.contacts } )
  }

  sortContactPopularity = () =>{
    this.state.contacts.sort((contact1, contact2) => contact1.popularity - contact2.popularity);

    this.setState( { contacts: this.state.contacts } )
  }

  getRandomContact = contacts => {
    return contacts[this.getRandomNumber(0, contacts.length)];
  }

  getRandomNumber = (min, max) => {
    const minNumber = min;
    const maxNumber = max;
    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  }

  render() {
    return (
      <div className="App">
        <h1>Ironcontacts</h1>
        <Container 
          addContact={this.addRandomContact} 
          sortName={this.sortContactName} 
          sortPopularity={this.sortContactPopularity}
        />
        <Table headers={['Picture', 'Name', 'Popularity']} data={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
