import React, { Component, Fragment } from 'react';
import contacts from '../contacts.json'
import ContactItem from './ContactItem.jsx';
import './ContactList.css';

export default class ContactList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [...contacts].slice(0, 5) || [],
      allContacts: [...contacts] || [],
      sortedType: undefined
    };
  }

  randomContact = () => {
    const otherContacts = this.state.allContacts.filter(contact => !this.state.contacts.some(c => c === contact));
    const randomContact = otherContacts[Math.floor(Math.random() * otherContacts.length)];
    if (randomContact) {
      this.setState({
        contacts: [...this.state.contacts, randomContact]
      }, () => this.state.sortedType && this.sortContacts(this.state.sortedType));
    }
  }

  sortContacts = (sortedType) => {
    const contacts = [...this.state.contacts].sort((c1, c2) => {
      switch (sortedType) {
        case 'name':
          return c1.name.localeCompare(c2.name);
        case 'popularity':
          return c2.popularity - c1.popularity;
      }
    });
    this.setState({
      contacts: contacts,
      sortedType: sortedType
    })
  }

  onClickDelete = (contact) => {
    this.setState({
      contacts: [...this.state.contacts].filter(c => c !== contact)
    });
  }

  render() {

    return (
      <Fragment>
        <div className="container contactList">
          <div className="buttons row level-item">
            <button type="button" className="button is-normal is-info is-inverted" onClick={this.randomContact}>Add random contact</button>
            <button type="button" className="button is-normal is-info is-inverted" onClick={this.sortContacts.bind(this, 'name')}>Sort by name</button>
            <button type="button" className="button is-normal is-info is-inverted" onClick={this.sortContacts.bind(this, 'popularity')}>Sort by popularity</button>
          </div>
          <div className="columns row">
            <div className="column"><h3 className="title">Picture</h3></div>
            <div className="column"><h3 className="title">Name</h3></div>
            <div className="column"><h3 className="title">Popularity</h3></div>
            <div className="column"><h3 className="title">Remove this contact</h3></div>
          </div>
          {this.state.contacts.map((contact, index) => {
            return <ContactItem key={index} {...contact} onClickDelete={this.onClickDelete.bind(this, contact)} />
          })}
        </div>
      </Fragment>
    );
  }

}