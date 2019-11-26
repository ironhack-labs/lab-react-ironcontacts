import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";

export default class Contacts extends Component {
  state = {
    contacts: contacts,
    filteredcontacts: contacts.slice(0, 5),
    allPContact: contacts.slice(5)
  };
  addRandomContact = () => {
    const randomIndex = Math.floor(
      Math.random() * Math.floor(this.state.allPContact.length)
    );
    const RandomContact = this.state.allPContact[randomIndex];
    const newAllPContact = this.state.allPContact.filter(
      (c, i) => i !== randomIndex
    );
    const goodArray = this.state.filteredcontacts;
    goodArray.push(RandomContact);
    this.setState({
      allPContact: newAllPContact,
      filteredcontacts: goodArray
    });
  };
  sortByName = () => {
    const ContactByName = this.state.filteredcontacts.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    this.setState({
      filteredcontacts: ContactByName
    });
  };
  sortByPopularity = () => {
    const ContactByPopularity = this.state.filteredcontacts.sort((a, b) =>
      a.popularity < b.popularity ? 1 : -1
    );
    this.setState({
      filteredcontacts: ContactByPopularity
    });
  };
  deleteContact = i => {
    const contactDelete = [...this.state.filteredcontacts];
    console.log("coucou");
    contactDelete.splice(i, 1);
    this.setState({ filteredcontacts: contactDelete });
  };

  render() {
    return (
      <React.Fragment>
        <div className="Buttons">
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
        <table className="contacts">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredcontacts.map((c, i) => (
              <tr key={i}>
                <th>
                  <img className="coucou" src={c.pictureUrl} alt="coucou" />
                </th>
                <th>{c.name}</th>
                <th>{c.popularity}</th>
                <th>
                  <button onClick={() => this.deleteContact(i)}>Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
