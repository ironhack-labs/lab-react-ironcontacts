import React, { Component } from "react";
import "./App.css";

import { ContactsTable } from "./components/contacts-table/contacts-table.component";

import contacts from "./contacts.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contacts.splice(0, 5)
    };
  }

  reRender = () => {
    this.setState({ state: this.state });
  };

  handleClick = () => {
    let randomContact = Math.floor(Math.random() * contacts.length);

    this.setState(
      (prevState, prevProps) => {
        return { contacts: prevState.contacts };
      },
      () => {
        this.state.contacts.push(contacts[randomContact]);
        return this.reRender();
      }
    );
  };

  handleSorting = by => {
    const { contacts } = this.state;

    const sortedContacts = contacts.sort((a, b) => {
      if (a[by] > b[by]) {
        return 1;
      }
      if (a[by] < b[by]) {
        return -1;
      }
      return 0;
    });

    this.setState(
      (prevState, prevProps) => {
        return { contacts: prevState.contacts };
      },
      () => sortedContacts
    ); 
  };

  borrar = i => {
    const {contacts} = this.state
    contacts.splice(i, 1)
    this.setState({contacts})
  }

  render() {

    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={this.handleClick}>Add random contact</button>
        <button onClick={() => this.handleSorting('name')}>Sort by name</button>
        <button onClick={() => this.handleSorting('popularity')}>Sort by popularity</button>
        <div className="container">
          <ContactsTable borrar={this.borrar} contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}

export default App;
