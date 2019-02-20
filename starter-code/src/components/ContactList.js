import React, { Component } from "react";
import "./ContactList.css";
import contacts from "../contacts.json";

class ContactList extends Component {
  constructor(props) {
    super(props);

    // initial state for ONLY when you need state
    this.state = {
      contactArray: contacts.filter(oneContact => {
        return contacts.indexOf(oneContact) <= 4;
      })
    };
  }

  addRandomContact() {
    const shortlist = this.state.contactArray;
    if (shortlist.length==contacts.length) { 
      alert("All the contacts have already been added");
      return
    }
    var randomIndex = 0;
    const keys = shortlist.map(oneContact => oneContact.pictureUrl)
    while (keys.indexOf(contacts[randomIndex].pictureUrl) !== -1 ) {

      randomIndex = Math.floor(Math.random() * contacts.length) 
    }
    shortlist.push(contacts[randomIndex]);
    this.setState({ contactArray: shortlist });
  }

  sortByName() {
    const namelist = this.state.contactArray;
    namelist.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({ contactArray: namelist });
  }

  sortByPopularity() {
    const popularitylist = this.state.contactArray;
    popularitylist.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({ contactArray: popularitylist });
  }

  deleteContact(index) {
    const deletelist = this.state.contactArray;
    deletelist.splice(index, 1);

    this.setState({ contactArray: deletelist });
  }

  render() {
    const { contactArray } = this.state;

    return (
      <section className="ContactList container">
        <h1>IronContacts</h1>
        

        <table className="table table-dark table-sm">
        <thead>
          <tr>
            <th><button className="btn btn-warning" onClick={() => this.addRandomContact()}>
          Add a Random Contact
        </button></th>
            <th><button className="btn btn-primary" onClick={() => this.sortByName()}>Name</button></th>
            <th><button className="btn btn-secondary" onClick={() => this.sortByPopularity()}>Popularity</button></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contactArray.map((oneContact, index) => {
            return (
              <tr key={oneContact.pictureUrl}>
                <td>
                  <img
                    width="15%"
                    height="auto"
                    src={oneContact.pictureUrl}
                    alt={oneContact.name}
                  />
                </td>
                <td className="align-middle">{oneContact.name}</td>
                <td className="align-middle">{oneContact.popularity}</td>
                <td className="align-middle">
                  <button className="btn btn-danger" onClick={() => this.deleteContact(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
        </table>
      </section>
    );
  }
}

export default ContactList;
