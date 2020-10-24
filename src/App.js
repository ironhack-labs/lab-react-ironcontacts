//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

export default class App extends Component {
  state = {
    contactsOnPage: contacts.slice(0, 5)
    //randomContact: 
  };
  
  addRandomContact = () => {
    const randomNum = Math.floor(Math.random() * contacts.length) + this.state.contactsOnPage.length;
    const randomContact = contacts[randomNum];
    console.log(randomNum)
    console.log(contacts.length)
    this.state.contactsOnPage.forEach(contact => {
      if (!this.state.contactsOnPage.includes(randomContact)) {
        this.setState({
          contactsOnPage: [randomContact, ...this.state.contactsOnPage]
        })
      } else {
        console.log("Sorry, click again!")
      }
    })
  }

  nameSort = () => {
    const sortActual = this.state.contactsOnPage.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    this.setState({
      contactsOnPage: sortActual
    });
  };

  sortByPopularity = () => {
    const sortPopularity = this.state.contactsOnPage.sort((a, b) => {
      return b.popularity - a.popularity
    })
    this.setState({
      contactsOnPage: sortPopularity
    })
  }

  deleteContact = (contactId) => {
    console.log(contactId)
    const filterRemovedContact = this.state.contactsOnPage.filter(item => {
      return contactId !== item.id
    })
    this.setState({
      contactsOnPage: filterRemovedContact
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h3>IronContacts</h3>
          <button onClick={this.addRandomContact}>
            Add Random Contact
          </button>
          <button onClick={() => this.nameSort()}>
            Sort by name
          </button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contactsOnPage.map((contact) => (
                // return
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td><button onClick={() => this.deleteContact(contact.id)}>Remove this contact</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}



/* export default class App extends Component {
  state = {
    contacts: contacts,
    randomContact: [],
    sortType: 'asc',
  };

  addContact = (min, max) => {
    const randomNum = Math.floor(Math.random() * max) + min;
    const randomContact = this.state.contacts[randomNum];


    this.setState({
      ...this.state,
      randomContact: [...this.state.randomContact, randomContact],
    });
  };

  nameSort = (allActualContacts) => {
    const sortActual = allActualContacts.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    this.setState({
      contacts: sortActual
    });
    console.log(sortActual)
  };

  render() {
    const firstFiveContacts = this.state.contacts.slice(0, 5);
    const max = this.state.contacts.length - 1;
    const min = 5;
    //
    const allActualContacts = [
      ...firstFiveContacts,
      ...this.state.randomContact,
    ];

    return (
      <div className="App">
        <div>
          <h3>IronContacts</h3>
          <button onClick={() => this.addContact(min, max)}>
            Add Random Contact
          </button>
          <button onClick={() => this.nameSort(allActualContacts)}>
            Sort by name
          </button>
          <button>Sort by popularity</button>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {firstFiveContacts.map((contact) => (
                // return
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              ))}
              {this.state.randomContact.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.pictureUrl} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.popularity}</td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

 */