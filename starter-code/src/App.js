import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json';
import Contacts from './Contacts';


class App extends Component {

  state = {
    contactList: contacts.slice(0, 5),
  }

   addRandomContact = () => {
    let availableList = contacts.filter( (contact) => {
      let availableContact = true;
      this.state.contactList.forEach( (OneContact) => {
        if (OneContact.name === contact.name ) {
          availableContact = false;
        }
      } )
      return availableContact;
    } )
    let randomIndex = Math.floor(Math.random() * availableList.length);
    let randomContact = availableList[randomIndex];

    let newContactList = this.state.contactList
    newContactList.push(randomContact)

    this.setState({contactList: newContactList})
  }

  sortByName = () => {
    let sortedContactList = this.state.contactList.sort( (objA, objB) => {
      if (objA.name < objB.name) {
        return -1;
      } else if (objA.name > objB.name) {
        return 1;
      } else {
        return 0;
      }
    })
    this.setState({contactList: sortedContactList})
  }

  sortByPopularity = () => {
    let sortedContactList = this.state.contactList.sort( (objA, objB) => {
      if (objA.popularity > objB.popularity) {
        return -1;
      } else if (objA.popularity < objB.popularity) {
        return 1;
      } else {
        return 0;
      }
    } )
    this.setState({contactList: sortedContactList})
  }

  deleteContact = (contactId) => {
    let filteredContactList = this.state.contactList.filter( (contact) => 
      contact.id !== contactId
    )
    this.setState({contactList: filteredContactList})
  }

  render() {
    return (
      <div className="App">

        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>

       <table>
       <thead></thead>
       <tbody>
        {this.state.contactList.map( contactObj => {
          return (
            <div>

            <Contacts
            key={contactObj.id}
            {...contactObj}
            clickToDelete = {()=> {
              this.deleteContact(contactObj.id)
            }
            }
            />

            </div>
            );
        })}
        </tbody>

      </table>

      </div>
    );
  }
}

export default App;
