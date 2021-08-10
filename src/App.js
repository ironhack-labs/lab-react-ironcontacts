import React, { Component } from 'react';
import contacts from './contacts.json';

class App extends Component {
  state = {
    contactsList: contacts.slice(0, 6),
  };

  addRandomContact = () => {
    const index = Math.round(Math.random() * contacts.length);
    const randomContact = contacts[index];
    const tempContactList = [...this.state.contactsList];
    tempContactList.push(randomContact);

    this.setState({
      contactsList: tempContactList,
    });
  };

  sortName = () => {
    const tempContactList = [...this.state.contactsList];
    const sortedNameList = tempContactList.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    this.setState({
      contactsList: sortedNameList,
    });
  };

  sortPopularity = () => {
    const tempContactList = [...this.state.contactsList];
    const sortedPopuList = tempContactList.sort(
      (a, b) => b.popularity - a.popularity
    );

    this.setState({
      contactsList: sortedPopuList,
    });
  };

  deleteContact = (contactToBeDeletedId) => {
    const newList = this.state.contactsList.filter(
      (c) => c.id !== contactToBeDeletedId
    );

    this.setState({
      contactsList: newList,
    });
  };

  render() {
    console.log(this.state.contactsList);
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <table className="contactTable">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsList.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img
                      className="contact-picture"
                      src={contact.pictureUrl}
                      alt=""
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    <button onClick={() => this.deleteContact(contact.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
