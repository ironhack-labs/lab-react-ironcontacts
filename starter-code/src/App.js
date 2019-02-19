import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
// import ContactsList from "./components/ContactsList";
import _ from "lodash";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  getRandomActor = () => {
    this.state.contacts.unshift(
      contacts[Math.floor(Math.random() * contacts.length)]
    );
    const newContactsArr = this.state.contacts;
    this.setState({
      contacts: newContactsArr
    });
  };

  sortActors = () => {
    let sortedActors = _.sortBy(this.state.contacts, "name");

    this.setState({
      contacts: sortedActors
    });
  };

  sortPopularity = () => {
    let sortedActorsPop = _.sortBy(this.state.contacts, "popularity").reverse();

    this.setState({
      contacts: sortedActorsPop
    });
  };

  deleteActor(index) {
    this.state.contacts.splice(index, 1);
    const afterDeletionArr = this.state.contacts;

    this.setState({
      contacts: afterDeletionArr
    });
  }

  render() {
    const tableHead = (
      <tr>
        <th className="tablehead">Picture</th>
        <th className="tablehead">Name</th>
        <th className="tablehead">Popularity</th>
      </tr>
    );
    const tableRows = this.state.contacts.map((contact, index) => {
      return (
        <tr key={index}>
          <td className="tablecell">
            <img className="contactImage" src={contact.pictureUrl} />
          </td>
          <td className="tablecell">{contact.name}</td>
          <td className="tablecell">{contact.popularity}</td>
          <td>
            <button onClick={() => this.deleteActor(index)}>Delete</button>
          </td>
        </tr>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
          {/* s<ContactsList /> */}
          <button onClick={() => this.getRandomActor()}>
            Add Random Contact
          </button>
          <button onClick={() => this.sortActors()}>Sort by name</button>
          <button onClick={() => this.sortPopularity()}>
            Sort by popularity
          </button>
          <table>
            {tableHead}
            {tableRows}
          </table>
        </header>
      </div>
    );
  }
}
export default App;
