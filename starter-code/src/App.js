import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Additional imports
import contacts from "./contacts.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsList: contacts.slice(0, 5),
      otherContacts: contacts.slice(5),
      aZ: false,
      pop: false
    };
  }
  displayContacts = () => {
    return (
      <div className="tableContainer">
        <table className="contactTable">
          <thead>
            <tr className="tableHeader">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{this.createContactRows()}</tbody>
        </table>
      </div>
    );
  };

  createContactRows = () => {
    let items = [...this.state.contactsList];

    return items.map((item, i) => {
      return (
        <tr key={i} className="tableBody">
          <td>
            <img className="tablePicture" src={item.pictureUrl} />
          </td>
          <td className="tableName">{item.name}</td>
          <td className="tablePop">
            {Math.round(item.popularity * 100) / 100}
          </td>
          <td>
            <button
              onClick={() => {
                this.deleteContact(i);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  addRandomContact = () => {
    let contacts = [...this.state.contactsList];
    let otherContacts = [...this.state.otherContacts];
    let key = Math.floor(Math.round(Math.random() * otherContacts.length));
    let newContact = otherContacts.splice(key, 1);
    console.log(otherContacts.length);
    contacts.push(newContact[0]);

    this.setState({ contactsList: contacts, otherContacts: otherContacts });
  };

  deleteContact = index => {
    let currentList = [...this.state.contactsList];

    currentList.splice(index, 1);

    this.setState({ contactsList: currentList });
  };
  sortByName = () => {
    let currentList = [...this.state.contactsList];
    if (this.state.aZ === false) {
      let sortedList = currentList.sort(function(a, b) {
        let nameA = a.name,
          nameB = b.name;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.setState({ contactsList: sortedList, aZ: true });
    } else {
      let sortedList = currentList.sort(function(a, b) {
        let nameA = a.name,
          nameB = b.name;
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
      this.setState({ contactsList: sortedList, aZ: false });
    }
  };

  sortByPopularity = () => {
    let currentList = [...this.state.contactsList];

    if (this.state.pop === false) {
      let sortedList = currentList.sort(function(a, b) {
        let popA = a.popularity,
          popB = b.popularity;
        if (popA < popB) {
          return 1;
        }
        if (popA > popB) {
          return -1;
        }
        return 0;
      });
      this.setState({ contactsList: sortedList, pop: true });
    } else {
      let sortedList = currentList.sort(function(a, b) {
        let popA = a.popularity,
          popB = b.popularity;
        if (popA < popB) {
          return -1;
        }
        if (popA > popB) {
          return 1;
        }
        return 0;
      });
      this.setState({ contactsList: sortedList, pop: false });
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>IronContacts</h1>
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort By Name</button>
          <button onClick={this.sortByPopularity}>Sort By Popularity</button>
          {this.displayContacts()}
        </div>
      </div>
    );
  }
}

export default App;
