import React, { Component } from "react";
import Contact from "./Contact";
import contacts from "../contacts.json";

class Contacts extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    const newContacts = [];
    for (let i = 0; i < 5; i++) {
      newContacts.push(contacts[i]);
    }
    this.setState({
      contacts: newContacts
    });
  }

  sortByName = () => {
    const sorted = this.state.contacts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    this.setState({ contacts: sorted });
  };

  sortByPopularity = () => {
    const sorted = this.state.contacts.sort(
      (a, b) => b.popularity - a.popularity
    );
    this.setState({ contacts: sorted });
  };

  getRandomContact = () => {
    const number = Math.floor(Math.random() * contacts.length);
    const contactsCopy = [...this.state.contacts];

    contactsCopy.push(contacts[number]);
    this.setState({
      contacts: contactsCopy
    });
  };

  deleteContact = (idx) => {
    const contactsCopy = this.state.contacts;
    contactsCopy.splice(idx,1)
    this.setState({contacts: contactsCopy})
  }

  render() {
    return (
      <div className="container">
        <button
          onClick={() => this.getRandomContact()}
          className="button is-primary mg"
        >
          Add random contact
        </button>
        <button onClick={() => this.sortByName()} className="button is-dark mg">
          Sort by name
        </button>
        <button
          onClick={() => this.sortByPopularity()}
          className="button is-info mg"
        >
          Sort by popularity
        </button>
        <div className="container flex screen">
          {this.state.contacts.map((contact, i) => (
            <Contact key={i} {...contact} deleteContact={() => this.deleteContact(i)} />
          ))}
        </div>
      </div>
    );
  }
}

export default Contacts;
