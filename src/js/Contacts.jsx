import contacts from "../../contacts.json";
import Card from "./components/Card";
import React, { Component } from "react";

let contactObj = JSON.stringify(contacts);
contactObj = JSON.parse(contactObj);

const styleContainer = {
  margin: "0 auto"
};

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this._addRandomContact = this._addRandomContact.bind(this);
    this._deleteContact = this._deleteContact.bind(this);
  }

  componentDidMount() {
    let firstFive = [];
    contactObj.forEach((contact, ind) => {
      if (ind < 5) {
        firstFive.push(contact);
      }
    });
    contactObj = contactObj.slice(5);
    this.setState({
      contacts: firstFive
    });
  }

  render() {
    return (
      <div>
        <div className="contact-wrapper">
          <h1>IronContacts</h1>
          <div>
            <button onClick={() => this._addRandomContact()}>
              Add Random Contact
            </button>
            <button onClick={() => this._sortByName()}>Sort by name</button>
            <button onClick={() => this._sortByPopularity()}>
              Sort by popularity
            </button>
          </div>
          <div className="contact-container">
            <p>Picture</p>
            <p>Name</p>
            <p>Popularity</p>
          </div>
          {this.state.contacts.map((contact, ind) => {
            return (
              <Card
                name={contact.name}
                pictureUrl={contact.pictureUrl}
                popularity={contact.popularity}
                deleteContact={this._deleteContact}
                index={ind}
              />
            );
          })}
        </div>
      </div>
    );
  }

  _deleteContact(ind) {
    let newArray = this.state.contacts;
    newArray.splice(ind, 1);
    this.setState({
      contacts: newArray
    });
  }

  _sortByName() {
    let sortedArray = this.state.contacts;
    sortedArray.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contacts: sortedArray
    });
  }

  _sortByPopularity() {
    let sortedArray = this.state.contacts;
    sortedArray.sort((a, b) => {
      return a.popularity - b.popularity;
    });
    this.setState({
      contacts: sortedArray
    });
  }

  _addRandomContact() {
    const randomNumb = this._rn(contactObj.length);
    this.setState({
      contacts: [...this.state.contacts, contactObj[randomNumb]]
    });
  }

  _rn(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

export default Contacts;
