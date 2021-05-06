import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React, { Component } from "react";

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  handleAddContact = () => {
    var newContact = Math.floor(Math.random() * (contacts.length - 0));
    console.log(newContact);
    this.state.contacts.push(contacts[newContact]);
    this.setState({
      contacts: this.state.contacts,
    });
  };

  handleSortName = () => {
    const newArrayContacts = this.state.contacts;
    newArrayContacts.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: newArrayContacts,
    });
  };

  handleSortPopularity = () => {
    const newArrayPopularity = this.state.contacts;
    newArrayPopularity.sort((a, b) => b.popularity - a.popularity);

    this.setState({
      contacts: newArrayPopularity,
    });
  };

  handleDeleteContact = (id) => {
    const contactsCopy = this.state.contacts;
    const contactIndex = contactsCopy.findIndex((contact) => contact.id === id);
    contactsCopy.splice(contactIndex, 1);
    this.setState((state) => ({
      contacts: contactsCopy,
    }));
  };

  render() {
    console.log(this.state.contacts);

    return (
      <div>
        <h1 className="title">Iron Contacts</h1>
        <div className="buttons">
          <div className="addRandomContact">
            <button onClick={this.handleAddContact}>Add Random Contact</button>
            <button onClick={this.handleSortName}>Sort by name</button>
            <button onClick={this.handleSortPopularity}>
              Sort by Popularity
            </button>
          </div>
        </div>

        <table className="ironTable">
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>

            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td className="picture">
                    <img src={contact.pictureUrl} width="100" />
                  </td>
                  <td className="name">{contact.name}</td>
                  <td className="popularity">
                    {Math.round(contact.popularity * 100) / 100}
                  </td>
                  <td>
                    <button
                      onClick={(contact) => {
                        this.handleDeleteContact({ contact });
                      }}
                    >
                      Delete
                    </button>
                    {/* <button onClick={this.handleDeleteContact}>Delete</button> */}
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
