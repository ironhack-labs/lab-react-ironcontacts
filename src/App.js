import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

console.log(contacts);

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      contacts: []
    };
  }

  handleClick(e) {
    // console.log('I am handled');
    var randomContact = contacts[Math.floor(Math.random() * contacts.length + 5)];
    console.log(randomContact);
    let newStateContacts = this.state.contacts;
    newStateContacts.push(randomContact);
    this.setState({ contacts: newStateContacts });
  }

  sortByName(e) {
    var sortedContact = this.state.contacts.slice();
    sortedContact.sort(function(a, b) {
      return b.name < a.name ? 1 : -1;
    });
    console.log(sortedContact);
    this.setState({ contacts: sortedContact });
  }

  sortByPopularity(e) {
    var sortedContact = this.state.contacts.slice();
    sortedContact.sort(function(a, b) {
      return b.popularity > a.popularity ? 1 : -1;
    });
    console.log(sortedContact);
    this.setState({ contacts: sortedContact });
  }

  deleteButton(e, contact) {
    var currentContacts = this.state.contacts.slice();
    var deleteContact = contact;
    console.log('deleteContact', deleteContact);
    for (let i = 0; i < currentContacts.length; i++) {
      if (currentContacts[i] === deleteContact) {
        currentContacts.splice(i, 1);
      }
    }
    console.log('currentContacts', currentContacts);
    this.setState({ contacts: currentContacts });
  }

  componentWillMount() {
    var startingContacts = contacts.slice(0, 5);
    this.setState({
      contacts: startingContacts
    });
    // console.log(this.state);
  }

  render() {
    // var startingContacts = contacts.slice(0, 5);
    //
    return (
      <div className="ironContacts">
        <h1>IronContacts</h1>
        <hr />
        <button onClick={e => this.handleClick(e)}>Add Random Contact</button>
        <button onClick={e => this.sortByName(e)}>Sort by Name</button>
        <button onClick={e => this.sortByPopularity(e)}>Sort by Popularity</button>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(contact => (
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt="pic of a celeb" style={{ height: '70px' }} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button onClick={e => this.deleteButton(e, contact)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
