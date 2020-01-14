import React, { Component } from 'react'
import ContactsRow from './ContactsRow'
import contactsData from '../../data/contacts.json'
import Controls from './Controlls'

class ContactTable extends Component {
  state = {
    contacts: [],
    sortedBy: null
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ contacts: contactsData })
    }, 1000)
  }

  //delete selected contact
  onClickDeleteContact(contact) {
    this.setState({
      contacts: this.state.contacts.filter(c =>
        c !== contact)
    });
  }

  //add random contact at the strat of the table
  onClickRandomContact() {
    const randContact = this.props.contacts[Math.floor(Math.random() * this.props.contacts.length)];

    if(randContact){
      this.setState({
        contacts: [randContact, ...this.state.contacts]
      })
    }
  }

  //sort contacts by name or popularity
  onClickSortContacts(sortKey) {
    const contacts = [...this.state.contacts].sort((c1, c2) => {
      switch (sortKey) {
        case 'name':
          return c1.name.localeCompare(c2.name);
        case 'popularity':
          return c2.popularity - c1.popularity;
      }
    });

    this.setState({
      contacts: contacts,
      sortedBy: sortKey
    })
  }

  render() {
    return (
      <div>
        <Controls
          onClickRandomContact={() => this.onClickRandomContact()}
          onClickSortContacts={(key) => this.onClickSortContacts(key)}
          sortedBy={this.state.sortedBy}
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