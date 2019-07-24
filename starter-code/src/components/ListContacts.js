import React, { Component, Fragment } from 'react';
import contacts from '../contacts.json';

class ListContacts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contactList: contacts.slice(0,5),
      allContacts: contacts,
    };
  }

  addContact() {
    let newContactList = [...this.state.contactList];
    let newContacts = [...this.state.allContacts];

    let contactRandom = newContacts[Math.floor(Math.random() * newContacts.length)];

    if (newContactList.includes(contactRandom)) {
      this.addContact();
    } else {
      newContactList.push(contactRandom);
    }

    this.setState({
      contactList: newContactList
    });
  }

  sortByName() {
    let newContactList = [...this.state.contactList];
    let sortedContactList = newContactList.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contactList: sortedContactList
    });
  }

  sortByPopularity() {
    let newContactList = [...this.state.contactList];
    let sortedPopularity = newContactList.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      return 0;
    });

    this.setState({
      contactList: sortedPopularity
    });
  }

  deleteContact(contactIdx) {
    let newContactList = [...this.state.contactList];
    newContactList.splice(contactIdx, 1)

    this.setState({
      contactList: newContactList
    });
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <p>
          <button onClick={this.addContact.bind(this)}>Add Random Contact</button>
          <button onClick={this.sortByName.bind(this)}>Sort by Name</button>
          <button onClick={this.sortByPopularity.bind(this)}>Sort by Popularity</button>
        </p>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.contactList.map((contact, index) => {
                  return <Fragment>
                  <tr>
                    <td><img src={contact.pictureUrl} alt="1"/></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td><button onClick={this.deleteContact.bind(this, index)}>Delete</button></td>
                  </tr>
                 </Fragment>
              }
              )}

          </tbody>
        </table>
      </div>
    )
  }
}

export default ListContacts;