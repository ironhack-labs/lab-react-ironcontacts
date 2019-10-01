import React, { Component } from "react";
// import logo from "./logo.svg";
import Contact from "./Contact";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fiveContacts: contacts.splice(0, 5),
      contacts: contacts
    };
  }

  addContact() {
    let clonedContacts = [...this.state.fiveContacts];
    let filterContacts = [...contacts].filter(e => !clonedContacts.includes(e))
    let randomContact =
      filterContacts[Math.floor(Math.random() * (filterContacts.length -1))];
    clonedContacts.push(randomContact);

    this.setState({
      ...this.state,
      fiveContacts: clonedContacts
    });
  }

  sortName() {
    let sortedByName = this.state.fiveContacts.sort((a, b) => {
      if (a.name > b.name) return 1;
      return -1;
    });

    this.setState({
      ...this.state,
      fiveContacts: sortedByName
    });
  }

  sortPopularity() {
    let sortedByPopularity = this.state.fiveContacts.sort((a, b) => {
      if (a.popularity > b.popularity) return -1;
      return 1;
    });

    this.setState({
      ...this.state,
      fiveContacts: sortedByPopularity
    });
  }

  removeContact(contacts) {
    let updatedContacts = [...this.state.fiveContacts]
    updatedContacts.splice(contacts.key, 1)
  
    this.setState({
      ...this.state,
      fiveContacts: updatedContacts
    });
  }



  render() {
    return (
      <div className="App">
        <h1>IronContacts </h1>
        <br />
        <button onClick={() => this.addContact()}>Add random contact</button>
        <button onClick={() => this.sortName()}>Sort by name</button>
        <button onClick={() => this.sortPopularity()}>
          Sort by popularity
        </button> 
        
        <div className="table-container">
        <br /> 
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            {this.state.fiveContacts.map((contacts, idx) => (
              <Contact 
                key={idx}{...contacts}
                delete={() => this.removeContact(contacts)}
                >
              </Contact>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default App;
