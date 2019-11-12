import contacts from "../contacts.json";
import React, { Component } from "react";

window.contacts = contacts;

class ContactList extends Component {
  state = {
    contacts: contacts.splice(0, 5),
    restOfContacts: contacts,
    sort: true
  };

  addNewContact = () => {
    console.log(this.state.restOfContacts);
    let randomContact = this.state.restOfContacts[
      Math.floor(Math.random() * this.state.restOfContacts.length)
    ];
    let copyContacts = [...this.state.contacts];
    copyContacts.push(randomContact);
    this.setState({ contacts: copyContacts });
  };

  sortByName = () => {
    this.setState({ sort: !this.state.sort });
    if (this.state.sort === true) {
      let sortedArr = this.state.contacts.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      this.setState({ contacts: sortedArr });
      console.log("sorting");
    } else {
      let sortedArr = this.state.contacts.sort((a, b) =>
        a.name < b.name ? 1 : -1
      );
      this.setState({ contacts: sortedArr });
      console.log("sortingBack");
    }
  };

  deleteRow = theIndex => {
    console.log(theIndex);
    console.log(this.state.contacts);
    let clonedArr = [...this.state.contacts];
    clonedArr.splice(theIndex, 1);
    console.log(clonedArr);
    this.setState({ contacts: clonedArr });
    console.log("deleting row!");
  };

  sortByPop = () => {
    this.setState({ sort: !this.state.sort });
    if (this.state.sort === true) {
      let sortedArr = this.state.contacts.sort((a, b) =>
        a.popularity > b.popularity ? 1 : -1
      );
      this.setState({ contacts: sortedArr });
      console.log("sorting");
    } else {
      let sortedArr = this.state.contacts.sort((a, b) =>
        a.popularity < b.popularity ? 1 : -1
      );
      this.setState({ contacts: sortedArr });
      console.log("sortingBack");
    }
  };

  showContacts = () => {
    return this.state.contacts.map((eachContacts, i) => {
      return (
        <li key={i}>
          <h3 className="eachContacts">
            <span>
              <img className="images" src={eachContacts.pictureUrl} />
            </span>
            <span>{eachContacts.name}</span>

            <span>{eachContacts.popularity}</span>
            <button
              onClick={() => {
                this.deleteRow(i);
              }}
              className="button"
            >
              Delete this row
            </button>
          </h3>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <ul>
          <h2 className="heading">
            <span>Picture</span>
            <span>Name</span>
            <span>Popularity </span>
          </h2>
          <button onClick={this.addNewContact} className="button">
            Add a new person
          </button>
          <button onClick={this.sortByName} className="button">
            Sort by Name
          </button>
          <button onClick={this.sortByPop} className="button">
            Sort by Popularity
          </button>
          {this.showContacts()}
        </ul>
      </div>
    );
  }
}

export default ContactList;
