import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contacts/Contact.js";
import contacts from "./contacts.json";
class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.splice(0, 5)
    };
  }
  randomHandler = () => {
    let newContactcontact =
      contacts[Math.floor(Math.random() * contacts.length) + 1];
    let randomContact = [...this.state.contacts];
    randomContact.push(newContactcontact);
    this.setState({ ...this.state, contacts: randomContact });
  };

  sortNameHandler = () => {
    let sortContact = [...this.state.contacts];
    const compare = (a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    };
    this.setState({ ...this.state, contacts: sortContact.sort(compare) });
  };

  sortPopularityHandler = () => {
    let popuContact = [...this.state.contacts];
    const compare = (a, b) => {
      if (a.popularity > b.popularity) return -1;
      if (a.popularity < b.popularity) return 1;
      return 0;
    };
    this.setState({ ...this.state, contacts: popuContact.sort(compare) });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="contactCont">
          <button onClick={this.randomHandler}>Add Random Contact</button>
          <button onClick={this.sortNameHandler}>Sort by Name</button>
          <button onClick={this.sortPopularityHandler}>
            Sort by popularity
          </button>
          <table>
            <tbody>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
              {this.state.contacts.map((contact, index) => (
                <Contact key={index} {...contact} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
