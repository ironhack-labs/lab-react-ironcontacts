import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Iteration 1:
import contacts from "./contacts.json";

// note on button onClick -> NO parenthese or the function will call itself until app crash

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactList: contacts.slice(0, 5), //<p>{this.state.contacts[0].name}</p> is possible
    };
  }

  addContact = () => {
    this.setState({
      contactList: [
        ...this.state.contactList,
        contacts[Math.floor(Math.random() * contacts.length - 1)],
      ],
    });
  };

  sortByName = () => {
    let sortedContactsByName = [...this.state.contactList];
    sortedContactsByName.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contactList: sortedContactsByName,
    });
  };

  sortByPop = () => {
    let sortedContactsByPop = [...this.state.contactList];
    sortedContactsByPop.sort((a, b) => a.popularity - b.popularity);
    this.setState({
      contactList: sortedContactsByPop,
    });
  };

  deleteContact = (event) => {
    let lessContacts = this.state.contactList.filter(
      (item) => item.id !== event.target.value
    );
    this.setState({
      contactList: lessContacts,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>IronContacts</h2>
        <div className="buttons">
          <button onClick={this.addContact}>Add random contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPop}>Sort by popularity</button>
        </div>
        <table className="contacts-table">
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>
          <tbody>
            {this.state.contactList.map((item, key) => {
              return (
                <tr key={key}>
                  <td>
                    <img src={item.pictureUrl} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.popularity.toFixed(2)}</td>
                  <td>
                    <button onClick={this.deleteContact} value={item.id}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
