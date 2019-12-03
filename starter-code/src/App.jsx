import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactList: contacts.slice(0, 4)
    };
    this.addContact = this.addContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.delete = this.delete.bind(this);
  }

  addContact() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const newContact = [...this.state.contactList, randomContact];
    this.setState({
      contactList: newContact
    });
  }

  sortByName() {
    const constactsABC = this.state.contactList.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }

      return 0;
    });

    const newABCorder = [...this.state.contactList, constactsABC];
    this.setState({
      contactList: newABCorder
    });
  }

  sortByPopularity() {
    const contactsPopularity = this.state.contactList.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }

      return 0;
    });
    const newPopularityOrder = [...this.state.contactList, contactsPopularity];

    this.setState({
      contactList: newPopularityOrder
    });
  }

  delete(index) {
    //const celebIndex = contacts.indexOf(this.state.contactList);
    //const deletedCeleb = contacts.splice(celebIndex, 1);
    let updatedList = [...this.state.contactList];
    updatedList.splice(index, 1);
    this.setState({
      contactList: updatedList
    });
  }

  render() {
    const contactList = this.state.contactList;
    return (
      <div className="App">
        <h1>Table</h1>
        <button onClick={this.addContact}>Add new Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <table className="Table">
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th> </th>
          </thead>
          <tbody>
            {contactList.map((contact, index) => {
              return (
                <tr>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td> {contact.popularity}</td>
                  <td>
                    <button onClick={() => this.delete(index)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
