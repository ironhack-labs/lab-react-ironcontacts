import React, { Component } from "react";
import "./App.css";
// import TableComponent from "./TableComponent";
import Contacts from "./contacts.json";
class App extends Component {
  state = {
    contacts: Contacts.splice(0, 5),
    randomContacts: Contacts.splice(Math.floor(Math.random() * 100), 5),
    addContacts: Contacts
  };
  addContact = () => {
    let contactsCopy = [...this.state.contacts];
    let i = Math.floor(Math.random() * contactsCopy.length);
    contactsCopy.push(this.state.addContacts[i]);
    this.setState({
      contacts: contactsCopy
    });
    // console.log("TESTING ADD");
  };
  deleteContact = i => {
    {
      let contactsCopy = [...this.state.contacts];
      contactsCopy.splice(i, 1);
      this.setState({
        contacts: contactsCopy
      });
    }
  };
  sortName = () => {
    let contactsCopy = [...this.state.contacts];
    let comp = (a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      let comp = 0;
      if (nameA > nameB) {
        comp = 1;
      } else if (nameA < nameB) {
        comp = -1;
      }
      return comp;
    };
    contactsCopy.sort(comp);
    console.log("SORT ISSUED");
    this.setState({
      contacts: contactsCopy
    });
  };
  sortPopularity = () => {
    let contactsCopy = [...this.state.contacts];
    let comp = (a, b) => {
      const popA = a.popularity;
      const popB = b.popularity;
      let comp = 0;
      if (popA > popB) {
        comp = -1;
      } else if (popA < popB) {
        comp = +1;
      }
      return comp;
    };
    contactsCopy.sort(comp);
    console.log("SORT ISSUED");
    this.setState({
      contacts: contactsCopy
    });
  };
  displayAll = () => {
    return this.state.contacts.map((oneContact, i) => {
      console.log(i);
      console.log("=========================================", oneContact);
      return (
        <tr key={i}>
          <td>
            <img className="contactpic" src={oneContact.pictureUrl} />
          </td>
          <td>{oneContact.name}</td>
          <td>{oneContact.popularity}</td>
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
  render() {
    return (
      <div className="App">
        <h1 className="App-title">IronContacts</h1>
        <div className="button-container">
          <button
            onClick={() => {
              this.addContact();
            }}
          >
            Add A Random Contact
          </button>
          <button
            onClick={() => {
              this.sortName();
            }}
          >
            Sort By Name
          </button>
          <button
            onClick={() => {
              this.sortPopularity();
            }}
          >
            Sort By Popularity
          </button>
        </div>
        <table className="main-table">
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {this.displayAll()}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
