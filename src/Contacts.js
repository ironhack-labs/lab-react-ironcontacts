import React from 'react';
import ironContacts from './contacts.json';

class Contacts extends React.Component {
  state = {
    contacts: ironContacts.slice(0, 5),
  };

  generateRandomNumber = () => {
    return Math.floor(Math.random() * ironContacts.length);
  };

  addRandomContact = () => {
    let randomNumber;
    if (this.state.contacts.length === ironContacts.length) {
      alert('Not possible to add any more Random Contacts');
    } else {
      do {
        randomNumber = this.generateRandomNumber();
        console.log('got random number');
      } while (this.state.contacts.includes(ironContacts[randomNumber]));

      const newContacts = this.state.contacts.concat(
        ironContacts[randomNumber]
      );

      this.setState({
        contacts: newContacts,
      });
    }
  };

  sortByName = () => {
    const contactsCopy = this.state.contacts.slice();

    contactsCopy.sort((a, b) => {
      let lastNameA = a.name.slice(a.name.indexOf(' '));
      let lastNameB = b.name.slice(b.name.indexOf(' '));

      if (lastNameA < lastNameB) {
        return -1;
      } else if (lastNameA > lastNameB) {
        return 1;
      } else {
        return 0;
      }
    });

    this.setState({
      contacts: contactsCopy,
    });
  };

  sortByPopularity = () => {
    const contactsCopy = this.state.contacts.slice();

    contactsCopy.sort((a, b) => {
      return a.popularity - b.popularity;
    });

    this.setState({
      contacts: contactsCopy,
    });
  };

  deleteHandler = (id) => {
    console.log('trying to delete contact');
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  render() {
    const myContacts = this.state.contacts.map((contact) => {
      return (
        <tr key={contact.id}>
          <td>
            <img src={contact.pictureUrl} alt={contact.name}></img>
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td>
            <button onClick={() => this.deleteHandler(contact.id)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="Contacts">
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{myContacts}</tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
