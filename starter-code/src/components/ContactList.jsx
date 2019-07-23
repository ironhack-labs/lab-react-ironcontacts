import React, { Component, Fragment } from 'react';
import ListEntries from './ListEntries';
import contacts from '../contacts.json';

class ContactList extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: contacts.slice(0,5),
    }
  }

  addRandomContact = () => {
    let currContacts = [...this.state.contacts];
    const filteredContact = contacts.filter(contact => !currContacts.includes(contact));
    const rndNumber = Math.floor(Math.random() * filteredContact.length);
    currContacts.push(filteredContact[rndNumber]);
    this.setState({
      contacts: currContacts,
    });
  }

  sortByName = () => {
    let currContacts = [...this.state.contacts];
    const sortedContact = currContacts.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contacts: sortedContact,
    });
  }

  sortByPopularity = () => {
    let currContacts = [...this.state.contacts];
    const sortedContact = currContacts.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      contacts: sortedContact,
    });
  }

  deleteContact = (key) => {
    let currContacts = [...this.state.contacts];
    currContacts.splice(key, 1);
    this.setState({
      contacts: currContacts,
    });
  }

  render() {
    return(
      <Fragment>
      <h1>IronContacts</h1>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
      <br /><br />
      <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
      <button onClick={() => this.sortByName()}>Sort by name</button>
      <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
      </div>
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
        {this.state.contacts.map((contact, index) => {
          return <ListEntries key={index} {...contact} deleteContact={() => this.deleteContact(index)}/>
        })}
      </tbody>
      </table>
      </Fragment>
    )
  }
}

export default ContactList;