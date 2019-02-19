import React, { Component } from "react";
import contacts from "./contacts.json";

class IronContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0, 4)
    };
  }

  getRandomContact() {
    const randomIndex = Math.floor(Math.random() * (contacts.length - 4) + 4);
    return contacts[randomIndex];
  }

  sortByName(contacts) {
    contacts.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  sortByPopularity(contacts) {
    contacts.sort((a, b) => (a.popularity > b.popularity ? -1 : 1));
  }

  handleClick(opt, i) {
    switch (opt) {
      case "addContact":
        this.setState({
          contacts: [...this.state.contacts, this.getRandomContact()]
        });
        break;
      case "sortByName":
        this.sortByName(this.state.contacts);
        this.setState({
          contacts: this.state.contacts
        });
        break;
      case "sortByPopularity":
        this.sortByPopularity(this.state.contacts);
        this.setState({
          contacts: this.state.contacts
        });
        break;
      case "deleteContact":
        this.setState({
          contacts: this.state.contacts.filter((contact, index) => index !== i)
        });
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center mb-3">
          <button
            className="btn btn-outline-primary shadow m-1"
            onClick={() => this.handleClick("addContact")}>
            Add random contact
          </button>
          <button
            className="btn btn-outline-primary shadow m-1"
            onClick={() => this.handleClick("sortByName")}>
            Sort by name
          </button>
          <button
            className="btn btn-outline-primary shadow m-1"
            onClick={() => this.handleClick("sortByPopularity")}>
            Sort by popularity
          </button>
        </div>
        <table className="table text-light">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, i) => (
              <tr>
                <td className="align-middle">
                  <img className="h-25 shadow rounded" src={contact.pictureUrl} alt={contact.name} />{" "}
                </td>
                <td className="align-middle">{contact.name}</td>
                <td className="align-middle">{contact.popularity.toString().substr(0, 5)}</td>
                <td className="align-middle">
                  <button
                    className="btn btn-outline-danger shadow m-1"
                    onClick={() => this.handleClick("deleteContact", i)}>
                    Delete contact
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default IronContacts;
