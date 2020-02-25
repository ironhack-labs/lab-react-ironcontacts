import React from "react";
import Card from "../Card/Card";
import contacts from "../contacts.json";
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export default class ConctactList extends React.Component {
  constructor() {
    super();
    // const randomInt = (min, max) =>
    //   Math.floor(Math.random() * (max - min + 1) + min);

    this.state = {
      contacts: contacts.slice(0, 6)
    };
  }
  // componentDidMount() {
  //   let sliceArr = this.state.contacts.slice(0, 6);
  //   this.setState({
  //     contacts: sliceArr
  //   });
  // }
  sortContactName() {
    let newContactsArr = this.state.contacts;

    let sortedArr = newContactsArr.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      sortedArr
    });
  }
  sortContactPop() {
    let newContactsArr = this.state.contacts;

    let sortedArr = newContactsArr.sort((a, b) => a.popularity - b.popularity);
    this.setState({
      sortedArr
    });
  }
  addContact() {
    let contactsCopy = this.state.contacts;
    let randomCont = contacts[randomInt(0, contacts.length - 1)];
    contactsCopy.indexOf(randomCont) === -1
      ? contactsCopy.push(randomCont)
      : console.log("This item already exists");

    this.setState({
      contactsCopy
    });
  }
  deleteContact(id) {
    let contactsCopyDel = this.state.contacts;

    let filteredContacts = contactsCopyDel.filter(contact => contact.id !== id);
    // contactsCopyDel.filter(contactsCopyDel.id !== id);

    contactsCopyDel = filteredContacts;
    this.setState({
      contacts: contactsCopyDel
    });
  }
  render() {
    return (
      <tbody>
        <button
          onClick={() => {
            this.addContact();
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            this.sortContactName();
          }}
        >
          Short Name
        </button>
        <button
          onClick={() => {
            this.sortContactPop();
          }}
        >
          Short Popularity
        </button>
        {this.state.contacts.map((oneContact, index) => (
          <Card
            {...oneContact}
            button={() => this.deleteContact(oneContact.id)}
          />
        ))}
      </tbody>
    );
  }
}
