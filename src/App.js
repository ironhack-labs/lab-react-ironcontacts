import contacts from "./contacts.json";
import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    fiveFirstContacts: contacts.slice(0, 5),
  };
  getRandomContact() {
    const randomNewContact =
      contacts[Math.floor(Math.random() * (contacts.length - 5)) + 5];
    const copyOfFiveFirstContacts = [...this.state.fiveFirstContacts];
    copyOfFiveFirstContacts.push(randomNewContact);
    this.setState({
      fiveFirstContacts: copyOfFiveFirstContacts,
    });
  }
  sortByName() {
    const copyOfFiveFirstContacts = [...this.state.fiveFirstContacts];
    copyOfFiveFirstContacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      fiveFirstContacts: copyOfFiveFirstContacts,
    });
  }
  sortByPopularity() {
    const copyOfFiveFirstContacts = [...this.state.fiveFirstContacts];
    copyOfFiveFirstContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      fiveFirstContacts: copyOfFiveFirstContacts,
    });
  }
  deleteContact(id) {
    this.setState({
      fiveFirstContacts: this.state.fiveFirstContacts.filter((contact) => {
        return contact.id !== id;
      }),
    });
  }
  render() {
    const contactList = this.state.fiveFirstContacts.map((contact, index) => (
      <tr key={index}>
        <td>
          <img src={contact.pictureUrl} alt={contact.name} />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
        <td>
          <button onClick={() => this.deleteContact(contact.id)}>Delete</button>
        </td>
      </tr>
    ));
    return (
      <div className="App">
        <div className="table">
          <h2>IronContacs</h2>
          <button onClick={() => this.getRandomContact()}>
            Add Random Contact
          </button>
          <button onClick={() => this.sortByName()}>Sort by name</button>
          <button onClick={() => this.sortByPopularity()}>
            Sort by popularity
          </button>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>{contactList}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
