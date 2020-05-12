import React from 'react';
import contacts from './../contacts.json';
import Card from './Card';

class ContactList extends React.Component {
  state = {
    contactList: contacts.splice(0, 5), //[array * 5]
  };

  randomContact = () => {
    let randomActor = contacts[Math.floor(Math.random() * contacts.length)]; //crea un contacto random
    const contactUpdated = this.state.contactList; // asociamos a la variable la contactlist
    contactUpdated.push(randomActor); //push al contactlist

    this.setState({ contactList: contactUpdated });
  };

  sortByName = () => {
    const sortedByName = this.state.contactList.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    this.setState({ contactList: sortedByName });
  };

  sortByPop = () => {
    const sortedByPop = this.state.contactList.sort((a, b) => {
      return a.popularity - b.popularity;
    });

    this.setState({ contactList: sortedByPop });
  };

  deleteContact = (id) => {
    const updatedContacts = this.state.contactList.filter((contact) => {
      return contact.id !== id;
    });

    this.setState({ contactList: updatedContacts });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.randomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPop}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>

              <th>Name</th>

              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactList.map((contact) => {
              return (
                <Card
                  key={contact.id}
                  {...contact}
                  removeContact={this.deleteContact}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
