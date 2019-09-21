import React, { Component } from 'react';
import contacts from "./contacts.json"
import './App.css';
import ContactList from './components/contactList';

class App extends Component {
  state = {
    contacts: [],
    contactsToRender: [],
  }

  componentDidMount() {
    this.setState({
      contacts: contacts,
      contactsToRender: contacts.splice(0, 5)
    })
  }


  handleContactAdd = () => {
    let contacts = [...this.state.contacts]
    let newContacts = [...this.state.contactsToRender]
    let randomContact = Math.floor(Math.random() * contacts.length)
    if (newContacts.indexOf(randomContact) < 0) {
      newContacts.push(contacts[randomContact])
    } else {
      this.handleContactAdd()
    }
    this.setState({
      contactsToRender: newContacts
    })
  }

  handleDelete = (id) => {
    let newContacts = [...this.state.contactsToRender]
    newContacts.splice(id, 1)
    this.setState({
      contactsToRender: newContacts
    })
  }

  handleSort = () => {
    let contacts = [...this.state.contactsToRender]
    contacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1
      } else {
        return 1
      }
      return 0
    })
    this.setState({
      contactsToRender: contacts
    })
  }

  handleNameSort = () => {
    let contacts = [...this.state.contactsToRender]
    contacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else {
        return -1
      }
      return 0
    })
    this.setState({
      contactsToRender: contacts
    })
  }


  render() {
    return (
      <React.Fragment>
        <ContactList
          filteredContacts={this.state.contactsToRender}
          onContactAdd={this.handleContactAdd}
          onItemRemove={this.handleDelete}
          onSort={this.handleSort}
          onNameSort={this.handleNameSort}
        />
      </React.Fragment>

    );
  }
}

export default App;
