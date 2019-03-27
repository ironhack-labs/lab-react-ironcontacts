import React, { Component } from 'react';
import contacts from '../contacts.json';
import otherContacts from '../contacts.json';
import ContactCard from './ContactCard';
import CoolButton from './CoolButton';
import '../App.css';

class ClassContainer extends Component {
  state = { contacts: contacts.slice(0, 5) };

  addRandomContact = () => {
    const { contacts } = this.state;
    const copy = [...otherContacts];
    const rest = copy.splice(5);
    const random = Math.floor(Math.random() * rest.length);
    const newContact = rest[random];
    this.setState({
      contacts: [...contacts, newContact]
    });
  };

  deleteContact = (index) => {
    const copyOfContacts = [...this.state.contacts];
    copyOfContacts.splice(index, 1);
    this.setState({
      contacts: copyOfContacts
    });
  };

  sortByPopularity = () => {
    const copyOfContacts = [...this.state.contacts];
    copyOfContacts.sort(function(a, b) {
      return b.popularity < a.popularity ? -1 : 1;
    });

    this.setState({
      contacts: copyOfContacts
    });
  };

  sortByName = () => {
    const copyOfContacts = [...this.state.contacts];
    copyOfContacts.sort(function(a, b) {
      return a.name.toLowerCase() < b.name.toLowerCase ? -1 : 1;
    });

    this.setState({
      contacts: copyOfContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Iron Contacts</h1>
        <CoolButton OnClick={this.addRandomContact}>Load Random</CoolButton>
        <CoolButton OnClick={this.sortByName}>Sort by Name</CoolButton>
        <CoolButton OnClick={this.sortByPopularity}>Sort by Popularity</CoolButton>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {contacts.map((contact, index) => {
              return <ContactCard deleteContactBtn={this.deleteContact} key={index} contact={contact} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ClassContainer;
