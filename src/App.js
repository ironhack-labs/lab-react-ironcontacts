import logo from './logo.svg';
import './App.css';
import contactsData from './contacts.json';

import React, { cloneElement, Component } from 'react';

export default class App extends Component {
  state = {
    contacts: contactsData.slice(0, 5),
  };

  addContact = () => {
    // const random = Math.floor(Math.random() * contactsData.length)
    const randomNumber = () => {
      let rand = Math.round(Math.random() * contactsData.length);
      return rand;
    };

    let random = randomNumber();
    // let newContact = contactsData[random]
    // while this. state.includes(random) choose another number
    // console.log(this.state.contacts.includes(newContact));
    // let filtered = contactsData.filter
    do {
      random = randomNumber();
    } while (this.state.contacts.includes(contactsData[random]));
    {
      let newVal = contactsData[random];
      let newArr = [...this.state.contacts, newVal];
      this.setState({ contacts: newArr });
    }
    // if (this.state.contacts.includes(newContact)) {
    //   console.log('match');
    // } else {
    //   this.setState((state) => ({
    //     contacts: state.contacts.concat(newContact)
    //   }))
    // }
  };

  sortName = () => {
    // console.log('sortName');
    // console.log(this.state.contacts);
    const contactsByName = this.state.contacts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    this.setState((state) => ({
      contacts: contactsByName,
    }));
  };

  sortPopularity = () => {
    // console.log('sortPop');
    const contactsByPop = this.state.contacts.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    this.setState((state) => ({
      contacts: contactsByPop,
    }));
  };

  deleteContact = (contactId) => {
    const currentArray = this.state.contacts;
    let index = currentArray.map((contact) => contact.id).indexOf(contactId);
    currentArray.splice(index, 1);
    this.setState((state) => ({
      contacts: currentArray,
    }));
  };

  render() {
    return (
      <>
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.sortPopularity}>Sort by Popularity</button>
        <table>
          <tbody>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Action</td>
            </tr>
            {this.state.contacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="picture" width="30px" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button onClick={() => this.deleteContact(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
