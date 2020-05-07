import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
// import ContactsList from "./components/ContactsList";

class App extends Component {
  /* Step 1: Create and initialise class object inside constructor
      Step 2 - call super method to extend react component class and have to call base class constructor
    step 3 - create state object need this because inside a class! */
  constructor() {
    super();
    this.state = {
      contacts: contacts.splice(0, 5),
    };
  }

  // ALTERNATIVE SYNTAX:
  // state = {
  //   contacts: contacts.splice(0, 5),
  // };

  addContact = () => {
    const addContact = contacts[Math.floor(Math.random() * contacts.length)];
    // use setState and be careful not to mutate the original state!!
    this.setState({
      contacts: [addContact, ...this.state.contacts],
    });
  };

  sortByName = () => {
    const sortedByName = this.state.contacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });

    this.setState({
      contacts: [...sortedByName],
    });
  };

  sortByPopularity = () => {
    const sortedByPopularity = this.state.contacts.sort((a, b) =>
      a.popularity > b.popularity ? 1 : -1
    );
    this.setState({
      contacts: [...sortedByPopularity],
    });
  };

  //this always deletes fm index 0
  // deleteContact = (index, e) => {
  //   const contactsList = [...this.state.contacts];
  //   contactsList.splice(index, 1);
  //   this.setState({
  //     contacts: contactsList,
  //   });
  // };

  //Jan's solution, lifting state:
  // deleteContact = (contactId) => {
  //   const filtered = this.state.contacts.filter((contact) => {
  //     return contact.id !== contactId;
  //   });
  //   this.setState({
  //     contacts: filtered,
  //   });
  // };

  render() {
    const contactList = this.state.contacts.map((contact) => (
      <tr key={contact.id} className="individual-contacts">
        <td>
          <img
            className="contact-pic"
            src={contact.pictureUrl}
            alt={contact.name}
          />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
        <td>
          {/* <button onClick={this.deleteContact(contact.id)}>
            Delete contact
          </button> */}
        </td>
      </tr>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>

        {/* reference the clickHandler function in button but don't call it yet! */}
        <div className="button-container">
          <button onClick={this.addContact}>Add random contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>

        <table className="contacts-container">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{contactList}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
