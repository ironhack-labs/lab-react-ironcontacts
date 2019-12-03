import React, { Component } from "react";
import ContactCard from "../components/contactCard";
import contacts from "../contacts.json";

class contactList extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts,
      filteredContacts: contacts.slice(0, 5)
    };
  }

  randomContactBtn = () => {
    //alert("PROBANDOOO ESTE BOTON")
    const newContact = [...this.state.filteredContacts];
    newContact.push(contacts[Math.floor(Math.random() * contacts.length)]);
    this.setState({ filteredContacts: newContact });
  };

  sortContactBtn = () => {
    const sortContact = [...this.state.filteredContacts];
    sortContact.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    //console.log(sortContact)
    this.setState({ filteredContacts: sortContact });
  };

  sortPopContactBtn = () => {
    const popularContact = [...this.state.filteredContacts];
    popularContact.sort(function(a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });
    //console.log(popularContact)
    this.setState({ filteredContacts: popularContact });
  };

  deleteContactBtn = idx => {
    const deleteContact = [...this.state.filteredContacts];
    deleteContact.splice(idx, 1);
    this.setState({ filteredContacts: deleteContact });
  };

  render() {
    return (
      <>
        <button className="btn btn-dark" onClick={this.randomContactBtn}>
          Add Random Contact
        </button>
        <button className="btn btn-dark" onClick={this.sortContactBtn}>
          Sort by Name
        </button>
        <button className="btn btn-dark" onClick={this.sortPopContactBtn}>
          Sort by Popularity
        </button>
        <hr />
        <div className="container">
          <table className="contact-card">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredContacts.map((elm, idx) => (
                <ContactCard
                  key={idx}
                  imgSrc={elm.pictureUrl}
                  name={elm.name}
                  popularity={elm.popularity}
                  deleteContact={() => this.deleteContactBtn(idx)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default contactList;
