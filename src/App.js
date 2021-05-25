import React, { Component } from 'react';
import contactJson from './contacts.json';

console.log(contactJson);
export default class App extends Component {
  state = {
    contacts: contactJson.splice(0, 5),
  };

  addRandomContact = () => {
    console.log('clickeddd');
    const newContacts = contactJson.splice(Math.floor(Math.random() * contactJson.length), 1);
    console.log(newContacts);

    const copyNewContacts = [...this.state.contacts];
    copyNewContacts.push(...newContacts);

    this.setState({
      contacts: copyNewContacts,
    });
  };

  sortByName = () => {
    console.log('hello');
    const copyContacts = [...this.state.contacts];
    copyContacts.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contacts: copyContacts,
    });
  };

  sortByPopularity = () => {
    console.log('button is clicked');
    const copyContacts = [...this.state.contacts];
    copyContacts.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      contacts: copyContacts,
    });
  };

  deleteContact = (id) => {
    console.log("deleting...")
    // const copyContacts = this.state.contacts;
    // const contactIndex = copyContacts.findIndex(contact => contact.id === id);
    // console.log(contactIndex)
    // // copyContacts.splice(contactIndex, 1)
    // // this.setState({
    // //   contacts: copyContacts,
    // // });

    const deleteContact = this.state.contacts.filter((contact) => contact.id !== id);
    console.log(deleteContact)
    this.setState({
      contacts: deleteContact,
    });
  }

  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th colSpan="4">
                <h1>IronContacts</h1>
              </th>
            </tr>
            <tr>
              <th>
                <button onClick={this.addRandomContact}>
                  Add Random Contact
                </button>
                <button onClick={this.sortByName}>Sort by Name</button>
                <button onClick={this.sortByPopularity}>
                  Sort by Popularity
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <h2>Picture</h2>
              </th>
              <th>
                <h2>Name</h2>
              </th>
              <th>
                <h2>Popularity</h2>
              </th>
              <th>
                <h2>Action</h2>
              </th>
            </tr>
          </thead>

          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr>
                  <td>
                    <img
                      className="Picture"
                      style={{
                        width: 90,
                        height: 130,
                      }}
                      src={contact.pictureUrl}
                    />
                  </td>
                  <td>
                    <p>
                      <b>{contact.name}</b>
                    </p>
                  </td>
                  <td>
                    <p>
                      <b>{contact.popularity.toFixed(2)}</b>
                    </p>
                  </td>
                  <td>
                    <button onClick={() => this.deleteContact(contact.id)}>Delete</button>
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
