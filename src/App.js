import React, { Component } from 'react';
//import logo from './logo.svg';
import contacts from './contacts.json';
import './App.css';

let contactList = [...contacts].slice(0, 5);
let contactForRandom = [...contacts].slice(5, contacts.length - 1);

class App extends Component {
  state = {
    contactList: contactList,
  };

  printRow = (contact, i) => {
    return (
      <tr key={i}>
        <td>
          <img src={contact.pictureUrl} alt="" />
        </td>
        <td>{contact.name}</td>
        <td>{Math.round(contact.popularity * 100) / 100}</td>
        <td>
          <button onClick={(event) => this.handleDelete(i)}>Delete</button>
        </td>
      </tr>
    );
  };

  addRandomContact = () => {
    let randomIndex = Math.floor(Math.random() * contactForRandom.length);
    let randomContact = contactForRandom[randomIndex];

    const newContactList = [...this.state.contactList];
    newContactList.push(randomContact);
    contactForRandom.splice(randomIndex, 1);

    this.setState({
      contactList: newContactList,
    });
  };

  sortByName = () => {
    const orderedList = [...this.state.contactList];
    orderedList.sort((a, b) => a.name.localeCompare(b.name));
    console.log(orderedList);

    this.setState({
      contactList: orderedList,
    });
  };

  sortByPopularity = () => {
    const orderedList = [...this.state.contactList];
    orderedList.sort((a, b) => b.popularity - a.popularity);
    console.log(orderedList);

    this.setState({
      contactList: orderedList,
    });
  };

  handleDelete = (index) => {
    this.setState({
      contactList: this.state.contactList.filter(
        (contactList, i) => i !== index
      ),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Ironhack Contacts</h1>
        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody id="contactTable">
            {this.state.contactList.map((contact, i) =>
              this.printRow(contact, i)
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
