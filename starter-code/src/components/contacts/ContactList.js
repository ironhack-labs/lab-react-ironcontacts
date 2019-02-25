import React, { Component } from 'react';
import ContactItem from './ContactItem';
import contacts from '../../contacts.json'

export default class ContactList extends Component  {
  state = {
    contacts: [...contacts]
  };

  onClickDeleteContact = (contact) => {
    this.setState({
      contacts: this.state.contacts.filter(c => c.name !== contact.name)
    })
  }

  renderItems = () => {
    return this.state.contacts.map((contact, index) => 
      { return <ContactItem key={index} {...contact} onClickDelete={this.onClickDeleteContact.bind(this, contact)}/>});
  }
  render(){
    return(
      <table className="table table-borderless table-striped mx-auto">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}

