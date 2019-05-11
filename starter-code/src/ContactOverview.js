import React, { Component } from 'react';

import contacts from './contacts.json';

import ContactTable from './ContactTable.js';
import ContactRow from './ContactRow.js';

class ContactOverview extends Component {
  state = {
    currentContacts: contacts.slice(0, 5)
  }

  createRandomContact = () => {
    let unChosenContacts = this.getUnChosenContacts()
    let randomContact = unChosenContacts[Math.floor(Math.random() * unChosenContacts.length)];
    this.setState({ currentContacts: [...this.state.currentContacts, randomContact] })
  }

  getUnChosenContacts = () => {
    return contacts.filter(cont => {
      return !this.state.currentContacts.includes(cont);
    })
  }

  sortContactByName = () => {
    let sortedArray = [...this.state.currentContacts].sort((contactOne, contactTwo) => {
      var nameA = contactOne.name.toUpperCase();
      var nameB = contactTwo.name.toUpperCase();
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    });
    this.setState({ currentContacts: sortedArray });
  }

  sortContactByPopularity = () => {
    let sortedArray = [...this.state.currentContacts].sort((contactOne, contactTwo) => {
      return (contactOne.popularity < contactTwo.popularity) ? -1 : (contactOne.popularity > contactTwo.popularity) ? 1 : 0;
    });
    this.setState({ currentContacts: sortedArray });
  }

  hideContact = (name) => {
    // find in currentContacts
    let selectedContact = this.state.currentContacts.map(cont => {
      return cont.name;
    }).indexOf(name);
    // delete from array and update state
    let newContacts = this.state.currentContacts.splice(selectedContact, 1)
    this.setState({ currentContact: newContacts })
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <p className="button-action" onClick={this.createRandomContact}>Add random contact</p>
        <p className="button-action" onClick={this.sortContactByName}>Sort by name</p>
        <p className="button-action" onClick={this.sortContactByPopularity}>Sort by popularity</p>

        {/* Contact table (bit hacky with delete button here.. but otherwise need uplift) */}
        <ContactTable>
          {this.state.currentContacts.map(contact => {
            return (
              <ContactRow key={contact.name} name={contact.name} pictureUrl={contact.pictureUrl} popularity={contact.popularity}>
                {/* Note to self: anonymous function need to return function instead of calling it directly */}
                <span className="button-action button-delete" onClick={() => this.hideContact(contact.name)}>Delete</span>
              </ContactRow>
            )
          })}
        </ContactTable>
      </div>
    )
  }
}

export default ContactOverview;