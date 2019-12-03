import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Contacts from "./contacts";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: Contacts,
      contactsArray: Contacts.slice(0, 5)
    };
    this.selectRandomContactAndAdd = this.selectRandomContactAndAdd.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  selectRandomContactAndAdd() {
    const randomContact = this.state.contacts[
      Math.floor(Math.random() * this.state.contacts.length)
    ];
    const contactsArray = [...this.state.contactsArray, randomContact];
    this.setState({
      contactsArray
    });
  }

  sortByName() {
    const sortByName = this.state.contactsArray.slice().sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      return 0;
    });
    this.setState({
      contactsArray: sortByName
    });
  }

  sortByPopularity() {
    const sortByPopularity = this.state.contactsArray.slice().sort((a, b) => {
      if (a.popularity < b.popularity) return 1;
      else if (a.popularity > b.popularity) return -1;
      return 0;
    });
    this.setState({
      contactsArray: sortByPopularity
    });
  }

  handleClick(event, contact) {
    event.preventDefault();
    const originalArray = [...this.state.contactsArray];
    let index = originalArray.indexOf(contact);
    if (index > -1) {
      originalArray.splice(index, 1);
    }
    this.setState({
      contactsArray: originalArray
    })
  }

  render() {
    const contacts = this.state.contactsArray;

    return (
      <div className="App">
        <header>
          <h1>Ironhack Contacts</h1>
        </header>
        <button onClick={this.selectRandomContactAndAdd}>
          Add random Contact
        </button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => {
              return (
                <tr>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      alt="picture"
                      className="img-thumbnail"
                      width="50"
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>
                    <button onClick={event => this.handleClick(event, contact)}>
                      Delete
                    </button>
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
