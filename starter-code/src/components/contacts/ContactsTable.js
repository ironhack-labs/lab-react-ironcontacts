import React, { Component } from 'react'
import ContactsRow from './ContactsRow'
import contactsData from '../../data/contacts.json'
import Controls from './Controlls'

class ContactTable extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ contacts: contactsData })
    }, 1000)
  }

  onClickDeleteContact(contact) {
    this.setState({
      contacts: this.state.contacts.filter(c =>
        c !== contact)
    });
  }

  onClickRandomContact() {
    // const randContact = this.props.contacts[Math.floor(Math.random() * this.props.contacts.length)];

    
  }

  render() {
    return (
      <div>
        <Controls
          onClickRandomContact={() => this.onClickRandomContact()}
        />
        <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>popularity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map((contact, index) => (
            <ContactsRow
              key={index}
              {...contact} 
              // image={contact.pictureUrl}
              onClickDelete={() => this.onClickDeleteContact(contact)}
            />
          ))}
        </tbody>
      </table>
      </div>
    )
  }
}

export default ContactTable;