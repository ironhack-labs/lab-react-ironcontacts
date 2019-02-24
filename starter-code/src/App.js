import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import ActorRow from "./components/ActorRow.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  // Check duplicate before adding a new contact
  addRandom = () => {
    const contactsPlusOne = [...this.state.contacts];
    let newContact = contactsPlusOne[0];
    while (contactsPlusOne.includes(newContact)) {
      newContact = contacts[Math.floor(Math.random() * contacts.length)];
    }
    contactsPlusOne.push(newContact);
    this.setState({
      contacts: contactsPlusOne
    });
  };

  sortByName = () => {
    const sortedByName = [...this.state.contacts];
    sortedByName.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({
      contacts: sortedByName
    });
  };

  sortByPopularity = () => {
    const sortedByPopularity = [...this.state.contacts];
    sortedByPopularity.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
    this.setState({
      contacts: sortedByPopularity
    });
  };

  deleteContact = (index) => {
    const newContacts = [...this.state.contacts];
    newContacts.splice(index,1)
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <div>
        <h1> IronContacts</h1>
        <button onClick={this.addRandom}> Add Random </button>
        <button onClick={this.sortByName}> Sort by Name </button>
        <button onClick={this.sortByPopularity}> Sort by Popularity </button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {/* ...contact prend toutes les clés valeurs de contact[index] et les envoie en props au children */}
            {this.state.contacts.map((contact, index) => {
              return (
                <div className="contact-row">
                  <ActorRow onClick={this.deleteContact} key={index} {...contact} />
                </div>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
