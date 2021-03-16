import React, { Component } from 'react'
import './App.css';
import contactsJSON from './contacts.json'

const fiveFirstContact = [...contactsJSON].slice(0,5);

export class App extends Component {
  state = {
    contacts : fiveFirstContact
  }

  handleAddRandomContact = () => {
    let randomIndex = Math.round(Math.random() * contactsJSON.length - 1);
    const currentContactsId = this.state.contacts.map(contact => contact.id)
    
    while(currentContactsId.includes(contactsJSON[randomIndex].id)) {
      randomIndex = Math.round(Math.random() * contactsJSON.length - 1);
    }

    this.setState({contacts : 
      [contactsJSON[randomIndex], ...this.state.contacts]
    });
  }

  handleSortByName = () => {
    const currentContact = [...this.state.contacts];
    currentContact.sort((first, second) => first.name < second.name ? -1 : 1);
    this.setState({contacts : currentContact})
  }

  handleSortByPopularity = () => {
    const currentContact = [...this.state.contacts];
    currentContact.sort((first, second) => second.popularity - first.popularity);
    this.setState({contacts : currentContact});
  }

  handleRemoveContact = (contactIdToRemove) => {
    const copyActorWithoutOne = this.state.contacts.filter(contact => contact.id !== contactIdToRemove);
    
    this.setState({contacts : copyActorWithoutOne});
  }

  render() {
    return (
      <div className="App">

        <button onClick={this.handleAddRandomContact}>Add a random contact</button>
        <button onClick={this.handleSortByName} >Sort by name ↓</button>
        <button onClick={this.handleSortByPopularity}>Sort by popularity ↑</button>

        {this.state.contacts.map(contact => 
          <div className="contact" key={contact.id}>
            <img src={contact.pictureUrl} alt=""/>
            <p>{contact.name}</p>
            <p>{Number(contact.popularity).toFixed(2)}</p>
            <button onClick={() => this.handleRemoveContact(contact.id)}>Remove</button>
          </div>
        )}

      </div>

    )
  }
}


export default App;
