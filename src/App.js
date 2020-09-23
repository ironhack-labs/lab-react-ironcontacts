import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactInfo from './Component/Contact';
import 'bootstrap/dist/css/bootstrap.css';

/**
 *
 */
class App extends Component {
  state = {
    contacts: contacts.slice(0, 5).map((eachContact, idx) => ({
      ...eachContact,
      index: idx,
    })),
  };

  /**
   *  function to add a new contact
   */
  addContacts = () => {
    const randIdx = this.getRandomContactIdx();
    const newContacts =
      randIdx > 0
        ? [...this.state.contacts, { ...contacts[randIdx], index: randIdx }]
        : this.state.contacts;
    this.setState({ contacts: newContacts });
  };

  /**
   *  function that generates a random number not in the displayed contacts
   */
  getRandomContactIdx = () => {
    let randNum = -1;
    if (contacts.length != this.state.contacts.length) {
      do {
        randNum = Math.floor(Math.random() * (contacts.length - 4)) + 4;
      } while (
        this.state.contacts.find((eachContact) => eachContact.index === randNum) // .length > 0
      );
    }
    return randNum;
  };
  /**
   *  render() function
   */
  render() {
    console.log(' My Contacts: ', this.state.contacts);
    // console.log(contacts.length); // 53
    return (
      <div>
        <h1 className="App"> Iron Contacts </h1>
        <br />
        <div className="btns App ">
          <button onClick={this.addContacts}> Add Random Contact </button>
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
                <th scope="col" colSpan="3">
                  Popularity
                </th>
              </tr>
            </thead>
            <tbody className="justify-content-around">
              {this.state.contacts.map((contact) => ContactInfo(contact))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
