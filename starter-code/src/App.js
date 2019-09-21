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
    newContacts.push(contacts[randomContact])
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


  render() {
    return (
      <React.Fragment>
        <ContactList
          filteredContacts={this.state.contactsToRender}
          onContactAdd={this.handleContactAdd}
          onItemRemove={this.handleDelete}
        />
      </React.Fragment>

    );
  }
}

export default App;
