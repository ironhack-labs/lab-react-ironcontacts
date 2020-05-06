import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };

    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addRandomContact() {
    const randomContact =
      contacts[Math.floor(Math.random() * contacts.length) + 4];
    console.log(randomContact);
    const contactsNew = this.state.contacts.push(randomContact);

    this.setState({
      contactsNew
    });
  }
  
  sortByName() {
    const nameSort = this.state.contacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
    });
    this.setState({
      nameSort
    });
  }

  sortByPopularity() {
    const popSort = this.state.contacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
    });
    this.setState({
      popSort
    });
  }


  deleteContact(i) {
    const deleteContact = [...this.state.contacts.splice(i, 1)];
    this.setState({
      deleteContact
    });
  }

  render() {
    const contacts = this.state.contacts;
    return (
      <div className="App">
        <h1>Iron Contacts</h1>

        <button onClick={this.addRandomContact}>AddContact</button>
        <button onClick={this.sortByName}>NameSort</button>
        <button onClick={this.sortByPopularity}>PopularitySort</button>

        {contacts.map((contact, index) => {
          return (
            <table>
              <tr>
                <button onClick={() => this.deleteContact(index)}>
                  DeleteContact
								</button>
                <th>
                  <img
                    src={contact.pictureUrl}
                    className="Image-Logo"
                    alt="logo"
                  />
                </th>

                <th>
                  <h1 className="Name">{contact.name}</h1>
                </th>

                <th>
                  <h2 className="popularity">{contact.popularity}</h2>
                </th>
              </tr>
            </table>
          );
        })}
      </div>
    );
  }
}

export default App;