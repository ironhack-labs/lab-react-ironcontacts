import React, { Component } from "react";
import Contacts from "../contacts.json";
import List from "./list";

class MyFriends extends Component {
  constructor() {
    super();
    this.state = { Contacts, contactsFiltered: Contacts.slice(0, 5) };
  }

  newContact() {
    let number = Math.floor(
      Math.random() * (this.state.Contacts.length - 5) + 5
    );
    let AllContact = [...this.state.contactsFiltered];
    let randomContact = this.state.Contacts[number];
    AllContact.push(randomContact);
    this.setState({ contactsFiltered: AllContact });
  }

  orderName() {
    let AllContact = [...this.state.contactsFiltered];
    AllContact.sort((a, b) => {
      if (a.name > b.name) return 1;
      else if (a.name < b.name) return -1;
      else return 0;
    });
    this.setState({ contactsFiltered: AllContact });
  }

  orderPopularity() {
    let AllContact = [...this.state.contactsFiltered];
    AllContact.sort((a, b) => {
      if (a.popularity < b.popularity) return 1;
      else if (a.popularity > b.popularity) return -1;
      else return 0;
    });
    this.setState({ contactsFiltered: AllContact });
  }

  delete = idx => {
    let AllContact = [...this.state.contactsFiltered];
    AllContact.splice(idx, 1);
    this.setState({ contactsFiltered: AllContact });
  };

  render() {
    return (
      <>
        <tbody>
          {this.state.contactsFiltered.map((elm, idx) => (
            <List key={idx} {...elm} deletePerson={() => this.delete(idx)} />
          ))}
        </tbody>
        <button onClick={() => this.newContact()}>Añadir Contacto</button>
        <button onClick={() => this.orderName()}>Ordenar por nombre</button>
        <button onClick={() => this.orderPopularity()}>
          Ordenar por popularidad
        </button>
      </>
    );
  }
}

export default MyFriends;
