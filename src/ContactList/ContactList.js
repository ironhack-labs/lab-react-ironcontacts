import React, { Component } from 'react';
import './ContactList.css';
import contacts from '../contacts.json';

const firstFive = contacts.slice(0, 5);

class ContactList extends Component {
  state = {
    contactList: firstFive,
  };

  addRandomContact = () => {
    const newList = this.state.contactList;
    const newContact = contacts[Math.floor(Math.random() * contacts.length)]
    if (!newList.includes(newContact)) {
        newList.push(newContact)
    }
    this.setState((prevState) => ({
      contactList: newList,
    }));
  };

  sortName = () => {
    this.setState((prevstate) => ({
      contactList: prevstate.contactList.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      }),
    }));
  };

  sortPop = () => {
    this.setState((prevstate) => ({
      contactList: prevstate.contactList.sort((a, b) => {
        return a.popularity < b.popularity ? 1 : -1;
      }),
    }));
  };

  deleteContact = (index) => {
    const newList = this.state.contactList;
    newList.splice(index, 1);
    this.setState(() => ({
      contactList: newList,
    }));
  }

  render() {
    return (
      <div className="contact-list">
        <h1>Iron Contacts</h1>
        <div id="button-box">
          <button className="random-button" onClick={this.addRandomContact}>
            Add Random Contact
          </button>
          <button className="sort-name-button" onClick={this.sortName}>
            Sort by name
          </button>
          <button className="sort-pop-button" onClick={this.sortPop}>
            Sort by popularity
          </button>
        </div>
        <div className="headings">
          <h3>Picture</h3>
          <h3>Name</h3>
          <h3>Popularity</h3>
          <h3>Action</h3>
        </div>
        {this.state.contactList.map((contact, index) => {
          return (
            <div className="contact-info" key={contact.id}>
              <div id="img-box">
                <img
                  id="contact-pic"
                  src={contact.pictureUrl}
                  alt={contact.name}
                />
              </div>
              <p id="contact-name">{contact.name}</p>
              <p id="contact-pop">{contact.popularity}</p>
              <button className="delete-button" onClick={() => this.deleteContact(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ContactList;
