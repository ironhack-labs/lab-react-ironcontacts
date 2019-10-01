import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.splice(0, 5)
    };    
  }

  AddRandomContact() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)]

    let clonedContactsList = [...this.state.contacts]
    clonedContactsList.push(randomContact)  
    
    this.setState({
      ...this.state,
      contacts: clonedContactsList
    });
  }

  SortByName() {
    const sortedByName = [...this.state.contacts]
    sortedByName.sort((a, b) => a.name > b.name ? 1 : -1);

    this.setState({
      ...this.state,
      contacts: sortedByName
    })
  }

  SortByPopularity() {
    const sortedByPopularity = [...this.state.contacts]
    sortedByPopularity.sort((a, b) => a.popularity > b.popularity ? -1 : 1);

    this.setState({
      ...this.state,
      contacts: sortedByPopularity
    })
  }

  removeContact(name) {
    let clonedContactsList = [...this.state.contacts]
    const index = clonedContactsList.findIndex(a => a.name === name)

    if (index === -1) return;
    clonedContactsList.splice(index, 1);

    this.setState({
      ...this.state,
      contacts: clonedContactsList
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <button onClick={() => this.AddRandomContact()}>
          Add Random Contact
        </button>

        <button onClick={() => this.SortByName()}>
          Sort By Name
        </button>

        <button onClick={() => this.SortByPopularity()}>
          Sort By Popularity
        </button>

        <table>
          {/* <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead> */}

          <tbody>
            <>
              {this.state.contacts.map((contact, idx) => {
                return (
                  <tr key={idx}>
                    <td><img src={contact.pictureUrl} alt={contact.name + "profile picture"} /></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                    <td><button onClick={() => this.removeContact(contact.name)}>Delete</button></td>
                  </tr>
                );
              })}
            </>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
