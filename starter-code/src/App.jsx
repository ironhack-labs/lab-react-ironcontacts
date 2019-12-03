import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ContactsTable from "./components/ContactsTable";
import contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: contacts.slice(0, 5)
    };
    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addRandomContact() {
    const randomContact = contacts.slice(5)[
      Math.floor(Math.random() * contacts.length)
    ];
    this.setState({
      list: [...this.state.list, randomContact]
    });
    console.log(randomContact);
  }
  sortByPopularity() {
    const list = this.state.list;
    const sortArr = [...list].sort((a, b) => {
      if (a.popularity < b.popularity) {
        return -1;
      }
      if (a.popularity > b.popularity) {
        return 1;
      }
      return 0;
    });
    this.setState({
      list: sortArr
    });
  }
  sortByName() {
    const list = this.state.list;
    const sortArr = [...list].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      list: sortArr
    });
  }
  deleteContact(id) {
    const list = this.state.list.filter(value => {
      return value.id !== id ? true : false;
    });
    /* const list = this.state.list;
    const index = list.indexOf(id);

    delete list[index]; */

    this.setState({
      list: [...list]
    });
  }
  render() {
    const list = this.state.list;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="App-intro">
          <div>
            <h1>IronContacts</h1>
            <button onClick={this.addRandomContact}>
              Add a Random Contact
            </button>
            <button onClick={this.sortByName}>Sort By Name</button>
            <button onClick={this.sortByPopularity}>Sort By Popularity</button>
            <table>
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map(contact => {
                  return (
                    <ContactsTable
                      key={contact.id}
                      value={contact.id}
                      onChange={() => this.deleteContact(contact.id)}
                      message={contact}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
