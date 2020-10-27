/*
 * CONTACTS LIST
 */

import React from 'react';
import ContactDetails from './ContactDetails';

// Bootstrap components.
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

// Custom CSS.
import './ContactsList.css';

import contactsList from '../contacts.json';

// First five contacts.
const firstFive = contactsList.slice(0, 5);

class ContactsList extends React.Component {
  state = { contacts: firstFive };

  // Adds a random contact to the rendered list.
  addOneRandom = () => {
    const randomContact =
      contactsList[Math.floor(Math.random() * Math.floor(contactsList.length))];

    if (this.state.contacts.includes(randomContact)) {
      this.addOneRandom();
    } else {
      this.state.contacts.push(randomContact);
    }

    this.setState({
      contacts: this.state.contacts,
    });
  };

  // Sorts by name.
  sortByName = () => {
    const clonedContacts = [...this.state.contacts];

    clonedContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });

    this.setState({
      contacts: clonedContacts,
    });
  };

  // Sorts by popularity.
  sortByPop = () => {
    const clonedContacts = [...this.state.contacts];

    clonedContacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (a.popularity < b.popularity) {
        return 1;
      } else {
        return 0;
      }
    });

    this.setState({
      contacts: clonedContacts,
    });
  };

  // Removes one.
  removeOne = (contactId) => {
    const afterRemoval = this.state.contacts.filter((contact) => {
      return contact.id !== contactId;
    });

    console.log(afterRemoval);
    this.setState({
      contacts: afterRemoval,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <Container>
            {/* Title */}
            <h1>IronContacts</h1>

            {/* Buttons. */}
            <div className="myButtons">
              <Button onClick={this.addOneRandom}>Add random</Button>
              <Button onClick={this.sortByName}>Sort by name</Button>
              <Button onClick={this.sortByPop}>Sort by popularity</Button>
            </div>
          </Container>
        </Jumbotron>

        {/* List of contacts. */}
        <CardGroup>
          {this.state.contacts.map((contact) => {
            return (
              <ContactDetails
                key={contact.id}
                details={contact}
                removeHandler={this.removeOne}
              />
            );
          })}
        </CardGroup>
      </React.Fragment>
    );
  }
}

export default ContactsList;
