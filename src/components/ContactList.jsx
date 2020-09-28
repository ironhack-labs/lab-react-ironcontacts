import React from 'react';
import ContactCard from './ContactCard';

export default class ContactList extends React.Component {
  state = {
    fiveContacts: this.props.contacts.slice(0, 5),
    contact: {}
  };

  addRandomContact = () => {
    const allContacts = this.props.contacts;
    let showedContacts = this.state.fiveContacts;
    let ramdonContact =
      allContacts[Math.floor(Math.random() * allContacts.length)];

    this.setState({
      fiveContacts: [...showedContacts, ramdonContact],
    });
  };

  sortByName = () => {
    this.setState({
      fiveContacts: this.state.fiveContacts.sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
    });
  };

  sortByPopularity = () => {
    this.setState({
      fiveContacts: this.state.fiveContacts.sort(
        (a, b) => b.popularity - a.popularity
      ),
    });
  };

  deleteContact = () => {
      this.setState({
          fiveContacts: this.state.fiveContacts.filter((contact) => this.props.contact.id != contact.id)
      })
  }

  render() {
    return (
      <div className="container">
        <h1 className="header">IronContacts</h1>
        <div>
          <button onClick={this.addRandomContact}>Add Ramdon Contact</button>
          <button onClick={this.sortByName}>Sort by Name</button>
          <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            <tr>
              {this.state.fiveContacts.map((contact) => (
                <ContactCard contact={contact} deleteContact={this.deleteContact} />
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
