import React, { Component } from "react";
import "./style.css";
import contacts from "./../../contacts.json";

const contactsDisplayed = contacts.slice(0, 5);

class Celebrities extends Component {
  constructor() {
    super();
    this.state = {
      contactsDisp: contactsDisplayed
    };
    this.addContact = this.addContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
  }

  addContact() {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    let contactsDisp = [...this.state.contactsDisp, randomContact];

    this.setState({
      contactsDisp
    });
  }

  sortByName() {
    // console.log(this.state.contactsDisp);
    let contactsDisp = this.state.contactsDisp.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    this.setState({
      contactsDisp
    });
  }

  sortByPopularity() {
    // console.log("Sort by pop");
    let contactsDisp = this.state.contactsDisp.sort((a, b) =>
      a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0
    );
    this.setState({
      contactsDisp
    });
  }

  render() {
    return (
      <div className="contactsTable">
        <button className="btn" onClick={this.addContact}>
          Add Random Contact
        </button>
        <button className="btn" onClick={this.sortByName}>
          Sort By Name
        </button>
        <button className="btn" onClick={this.sortByPopularity}>
          Sort By Popularity
        </button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsDisp.map(contact => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{Math.round(contact.popularity * 100) / 100}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Celebrities;
