import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

import { ListaContactos } from "./components/ListaContactos";
import { Header } from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactsArr: contacts.slice(0, 5),
      message: false
    };
  }

  handleAdd() {
    let newContact = {};
    let index = 0;

    do {
      newContact = contacts[Math.floor(Math.random() * contacts.length)];
      index = this.state.contactsArr.findIndex(c => c.name === newContact.name);
    } while (index !== -1 && contacts.length > this.state.contactsArr.length);

    if (index === -1) {
      this.state.contactsArr.push(newContact);
      this.setState({ contactsArr: this.state.contactsArr });
      if (contacts.length === this.state.contactsArr.length) {
        this.setState({ message: true });
      }
    }
  }

  handleSort(param) {
    let isName = param === "name";
    isName
      ? this.state.contactsArr.sort((a, b) =>
          a[param] > b[param] ? 1 : b[param] > a[param] ? -1 : 0
        )
      : this.state.contactsArr.sort((a, b) =>
          a[param] < b[param] ? 1 : b[param] < a[param] ? -1 : 0
        );

    this.setState({ contactsArr: this.state.contactsArr });
  }

  handleDelete(idx) {
    this.state.contactsArr.splice(idx, 1);
    this.setState({ contactsArr: this.state.contactsArr });

    if (this.state.contactsArr.length < contacts.length) {
      this.setState({ message: false });
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          staticButton={this.state.message}
          addContact={() => this.handleAdd()}
          sortContact={param => this.handleSort(param)}
        />
        {this.state.message ? (
          <article className="message is-danger">
            <div className="message-body">You've added all the contacts!</div>
          </article>
        ) : null}
        <ListaContactos
          contactData={this.state.contactsArr}
          deleteContact={idx => this.handleDelete(idx)}
        />
      </div>
    );
  }
}

export default App;
