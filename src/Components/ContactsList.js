import React, { Component } from 'react';
import contacts from '../contacts.json';
import Contact from './Contact'


class ContactsList extends Component {
  state = { contactList: contacts.slice(0, 5) };

  addRandomContactHandler = () => {
    const contactsCopy = [...this.state.contactList];
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    if (!contactsCopy.includes(randomContact)) {
      contactsCopy.push(randomContact);
    }
    this.setState({ contactList: contactsCopy });
  };

  sortByName = () => {
    const contactsCopy = [...this.state.contactList];
    contactsCopy.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ contactList: contactsCopy });
  };

  deleteContactHandler = (id) => {
    const contactsCopy = this.state.contactList;
    const contactIndex = contactsCopy.findIndex((item) => item.id === id);
    contactsCopy.splice(contactIndex, 1);
    this.setState({
      contactList: contactsCopy,
    });
  };

  sortByPopularity = () => {
    const contactsCopy = [...this.state.contactList];
    contactsCopy.sort((a, b) => b.popularity - a.popularity);
    this.setState({ contactList: contactsCopy });
  };


  render() {
    return (
      <div>
        <button onClick={this.addRandomContactHandler}>
          {' '}
          Add random contact
        </button>
        <button onClick={this.sortByName}> Sort by name </button>
        <button onClick={this.sortByPopularity}> Sort by popularity</button>

        <table className="contactTable">
          <tr>
            <th>Picture</th>
            <th> Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          <tr>
            {this.state.contactList.map((item) => {
              return (
                <Contact
                  key={item.id}
                  {...item}
                  clickToDelete={() => this.deleteContactHandler(item.id)} 
                />
              );
            })}
          </tr>
        </table>
      </div>
    );
  }
}

export default ContactsList;
