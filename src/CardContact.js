import contactsApi from "./contacts.json";
import React, { Component } from "react";
import "./App.css";

class CardContact extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contactsApi.slice(0, 5),
    };
  }

  AddRandomContact() {
    this.state.contacts.push(contactsApi[Math.floor(Math.random() * contactsApi.length)]);

    this.setState({
      contacts: this.state.contacts,
    });
  }

  SortByName() {
    this.state.contacts.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    this.setState({
      contacts: this.state.contacts,
    });
  }

  SortByPopularity() {
    this.state.contacts.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      return 0;
    });

    this.setState({
      contacts: this.state.contacts,
    });
  }

  RemoveContant(eachContactID) {
    this.state.contacts.splice(
      this.state.contacts.findIndex((contact) => contact.id === eachContactID),
      1
    );

    this.setState({
      contacts: this.state.contacts,
    });
  }

  render() {
    return (
      <>
        <div className="button">
          <button onClick={() => this.AddRandomContact()}>Add Random Contact</button>
          <button onClick={() => this.SortByName()}>Sort By Name</button>
          <button onClick={() => this.SortByPopularity()}>Sort By Popularity</button>
        </div>
        <table className="header">
          <tr>
            <td>
              <h2>Picture</h2>
            </td>
            <td>
              <h2>Name</h2>
            </td>
            <td>
              <h2>Popularity</h2>
            </td>
          </tr>
          {this.state.contacts.map((eachContact) => (
            <tr className="card" key={eachContact.id}>
              <td>
                <img src={eachContact.pictureUrl} alt={eachContact.name}></img>
              </td>
              <td>{eachContact.name}</td>
              <td>{eachContact.popularity.toFixed(2)}</td>
              <td>
                <button onClick={() => this.RemoveContant(eachContact.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </table>
      </>
    );
  }
}

export default CardContact;
