import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Row from "./components/Row/Row.js";

class App extends Component {
  constructor() {
    super();
    this.state = { contacts: [...contacts].slice(0, 5) };
  }

  removeContact = (i) => {
    let stateContacts = [...this.state.contacts];
    stateContacts.splice(i, 1);
    this.setState({ contacts: stateContacts });
  };

  addRandomContact = () => {
    let stateContacts = [...this.state.contacts];
    let rndN = Math.floor(Math.random() * contacts.length);
    if (!stateContacts.includes([...contacts][rndN])) {
      stateContacts.push([...contacts][rndN]);
      this.setState({
        contacts: stateContacts,
      });
    }
  };

  sortByName = () => {
    let stateContacts = [...this.state.contacts].sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });
    this.setState({ contacts: stateContacts });
  };

  sortByPopularity = () => {
    let stateContacts = [...this.state.contacts].sort((a, b) => {
      let popA = a.popularity;
      let popB = b.popularity;
      return popB < popA ? -1 : popB > popA ? 1 : 0;
    });
    this.setState({ contacts: stateContacts });
  };

  render() {
    let tabRow = this.state.contacts.map((e, i) => (
      <Row
        key={i}
        name={e.name}
        pictureUrl={e.pictureUrl}
        popularity={e.popularity}
        rem={() => this.removeContact(i)}
      />
    ));

    return (
      <div>
        <button onClick={this.addRandomContact}>Add a dude</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>
          <tbody>{tabRow}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
