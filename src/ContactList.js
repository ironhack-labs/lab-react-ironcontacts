import React, { Component } from 'react';
import contacts from './contacts.json';

class ContactList extends Component {
  // State
  state = {
    contacts: contacts.slice(0, 5),
  };

  /**
   *  Sorts the display by popularity
   */
  sortByPopularity = () => {
    const sortPopularity = this.state.contacts.sort((a, b) => {
      return a.popularity - b.popularity;
    });
    this.setState({ contacts: sortPopularity });
  };

  /**
   *  Sorts the display by name
   */
  sortByName = () => {
    const sortName = this.state.contacts.sort((a, b) => {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return a.name.toLowerCase() < b.name.toLowerCase()
        ? -1
        : a.name.toLowerCase() > b.name.toLowerCase()
        ? 1
        : 0;
    });
    this.setState({ contacts: sortName });
  };

  /**
   *  Add a new contact
   */
  addContacts = () => {
    const randIdx = this.getRandomContactIdx();
    const newContacts =
      randIdx > 0
        ? [...this.state.contacts, contacts[randIdx]]
        : this.state.contacts;
    this.setState({ contacts: newContacts });
  };

  /**
   *  Generates a random number not in the displayed contacts
   */
  getRandomContactIdx = () => {
    let randNum = -1;
    if (contacts.length != this.state.contacts.length) {
      do {
        randNum = Math.floor(Math.random() * (contacts.length - 4)) + 4;
      } while (
        this.state.contacts.find((eachContact, idx) => idx === randNum) // .length > 0
      );
    }
    return randNum;
  };

  /**
   * Deletes the contact
   */
  deleteContact = (idx) => {
    console.log(' delete', idx);
    this.state.contacts.splice(idx, 1);
    this.setState({ contacts: this.state.contacts });
  };

  /**
   *  render() function
   */
  render() {
    console.log(' My Contacts: ', this.state.contacts);
    return (
      <div>
        <h1 className="App"> Iron Contacts </h1>
        <br />
        <div className="btns App ">
          <button onClick={this.addContacts}> Add Random Contact </button>
          <button onClick={this.sortByName}> Sort by Name </button>
          <button onClick={this.sortByPopularity}> Sort by Popularity </button>
        </div>
        <br />
        <div className="App ">
          <table className="table-borderless ">
            <thead>
              <tr>
                <th scope="col" colSpan="3">
                  Picture
                </th>
                <th scope="col" colSpan="3">
                  Name
                </th>
                <th scope="col" colSpan="4">
                  Popularity
                </th>
                <th scope="col" colSpan="3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="justify-content-around">
              {this.state.contacts.map((contact, idx) => {
                return (
                  <tr key={contact.id}>
                    <td colSpan="3">
                      <img src={contact.pictureUrl} />
                    </td>
                    <td colSpan="3"> {contact.name} </td>
                    <td colSpan="3"> {contact.popularity} </td>
                    <td colSpan="3">
                      <button onClick={() => this.deleteContact(idx)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ContactList;
