import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import _ from "lodash";

import contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  addRandomContact() {
    // const randomactor = contacts[Math.floor(Math.random() * contacts.length)];
    let randomactor = _.sample(_.difference(contacts, this.state.contacts));

    this.setState({
      contacts: this.state.contacts.concat([randomactor])
      //we use .concat here because .push would change the original state (we should never do that!) ->
      //so either use .concat because it creates a new array or create a copy before pushing
    });
  }

  sortByName() {
    this.setState({ contacts: _.sortBy(this.state.contacts, "name") });
  }

  sortByPopularity() {
    this.setState({ contacts: _.sortBy(this.state.contacts, "popularity") });
  }

  deleteContact(i) {
    const newContactsArr = [...this.state.contacts];
    newContactsArr.splice(i, 1);

    this.setState({
      contacts: newContactsArr
    });
  }

  render() {
    console.log(this.state.contacts);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>

        <button onClick={() => this.addRandomContact()}>
          Add Random Contact
        </button>
        <button onClick={() => this.sortByName()}>Sort by Name</button>
        <button onClick={() => this.sortByPopularity()}>
          Sort by Popularity
        </button>

        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popuplarity</th>
              <th>Action</th>
            </tr>

            {this.state.contacts.map((e, i) => (
              <tr key={i}>
                <td>
                  <img width="100px" src={e.pictureUrl} />
                </td>
                <td>{e.name}</td>
                <td>{e.popularity}</td>
                <td>
                  <button onClick={() => this.deleteContact(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
