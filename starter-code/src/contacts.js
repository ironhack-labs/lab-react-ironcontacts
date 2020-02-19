import React, { Component } from "react";
import contacts from "./contacts.json";

class Contacts extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  randomContact = () => {
    let randCeleb =
      contacts[Math.floor(Math.random() * (contacts.length - 6)) + 6];
    return randCeleb;
  };

  toggleContact = () => {
    //contacts.splice(0, 5) + this.randomContact()

    let newContacts = this.state.contacts;
    newContacts.push(this.randomContact());

    this.setState({
      contacts: newContacts
    });
    console.log(this.randomContact());
    console.log(this.state.contacts, "contacts");
  };

  toggleName = () => {
    let sortedNames = this.state.contacts;
    console.log(this.state.contacts);
    sortedNames.sort((a, b) => (a.name > b.name ? 1 : -1));

    console.log(sortedNames);

    this.setState({
      contacts: sortedNames
    });
  };

  togglePopular = () => {
    let sortedRates = this.state.contacts;
    console.log(this.state.contacts);
    console.log(sortedRates);
    sortedRates.sort((a, b) => (a.popularity > b.popularity ? 1 : -1));

    this.setState({
      contacts: sortedRates
    });
  };

  render() {
    let output = this.state.contacts.map((contact, index) => {
      return (
        <tr key={contact.id}>
          <td>
            <img className="image" src={contact.pictureUrl} />
          </td>
          <td>
            <p> {contact.name}</p>
          </td>
          <td>
            <p> {contact.popularity}</p>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.toggleContact}>Add Random Contact</button>
        <button onClick={this.toggleName}>Sort by Name</button>
        <button onClick={this.togglePopular}>Sort by Popularity</button>
        <div className="contacts">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>{output}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Contacts;
