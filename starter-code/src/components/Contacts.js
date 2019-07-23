import React, { Component } from 'react';
import contacts from '../../src/contacts.json'

class Contacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: this.getContacts()
    }
  }
  getContacts() {
    let newContacts = contacts.splice(0, 5);
    return newContacts
  }

  addRandomContact() {
    let newContacts = [...this.state.contacts];

    newContacts.push(contacts[Math.floor(Math.random() * contacts.length)]);
    this.setState({
      contacts: newContacts
    });
  }

  deleteContact(idx) {
    let newContacts = [...this.state.contacts];

    newContacts.splice(idx, 1)
    this.setState({
      contacts: newContacts
    });
  }

  sortByName() {
    let newContacts = [...this.state.contacts];
    newContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
    this.setState({
      contacts: newContacts
    })
  }

  sortByPopularity() {
    let newContacts = [...this.state.contacts];
    newContacts.sort((a, b) => b.popularity - a.popularity)
    this.setState({
      contacts: newContacts
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by Popularity</button>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>

            {
              this.state.contacts.map((contact, index) => {
                return <tr key={index}>
                  <td><img src={contact.pictureUrl} alt={contact.name} /> </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td><button className="delete-btn" onClick={this.deleteContact.bind(this, index)}>Delete</button></td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Contacts;