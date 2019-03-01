import React, { Component, Fragment } from 'react';
import contacts from '../contacts.json'
import ContactItem from './ContactItem.jsx';
import './ContactList.css';

export default class ContactList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [...contacts].slice(0, 5) || [],
      allContacts: [...contacts] || []
    };
  }

  randomContact = () => {
    const otherContacts = this.state.allContacts.filter(contact => !this.state.contacts.some(c => c === contact));
    const randomContact = otherContacts[Math.floor(Math.random() * otherContacts.length)];
    if (randomContact) {
      this.setState({
        contacts: [...this.state.contacts, randomContact]
      })
    }
  }

  render() {

    return (
      <Fragment>
        <button type="button" className="btn btn-secondary row" onClick={this.randomContact}>Add random contact</button>
        <div className="columns row">
          <div className="column"><h3 className="title">Picture</h3></div>
          <div className="column"><h3 className="title">Name</h3></div>
          <div className="column"><h3 className="title">Popularity</h3></div>
        </div>
        {this.state.contacts.map((contact, index) => {
            return <ContactItem key={index} {...contact} />
          })}
      </Fragment>
    );
  }

}