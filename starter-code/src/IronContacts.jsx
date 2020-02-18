import React, { Component } from "react";
import Contact from "./Contact";

export default class IronContacts extends Component {
  state = {
    contacts: this.props.contacts,
    sortByNameASC: true,
    sortByPopularityASC: true
  };
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  addRandomContact = () => {
    this.setState({
      contacts: [...this.state.contacts, this.state.contacts[this.randomIntFromInterval(0, this.state.contacts.length)]]
    });
  };
  sortByName = () => {
    const $contacts = [...this.state.contacts].sort((a, b) => {
      if (this.state.sortByNameASC) return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });
    this.setState({
      contacts: $contacts,
      sortByNameASC: !this.state.sortByNameASC
    });
  };
  sortByPopularity = () => {
    const $contacts = [...this.state.contacts].sort((a, b) => {
      if (this.state.sortByPopularityASC) return b.popularity - a.popularity;
      return a.popularity - b.popularity;
    });
    this.setState({
      contacts: $contacts,
      sortByPopularityASC: !this.state.sortByPopularityASC
    });
  };

  deleteContact = id => {
    const $contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: $contacts
    });
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Photo</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => (
              <Contact contact={contact} key={contact.id} handleDelete={this.deleteContact} />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
