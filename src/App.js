import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {

  state = {
    contacts: contacts.slice(0,5)
  }

  addRandomContact = () => {
    const selectedRandomContact = contacts[Math.floor(Math.random()* contacts.length)];
    this.setState({
        contacts: [...this.state.contacts, selectedRandomContact]
    });
  }

  sortContactByPopularity = () => {
    const sortedPopularList = this.state.contacts.sort(function (a, b) {
      if (a.popularity < b.popularity) {
        return -1
      } else if (a.popularity > b.popularity) {
        return 1
      } else {
        return 0
      }
    })
    this.setState({
      contacts: [...sortedPopularList]
    })
  }

  sortContactByName = () => {
    const sortedNameList = this.state.contacts.sort(function (a, b) {
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      } else {
        return 0
      }
    })
    this.setState({
      contacts: [...sortedNameList]
    })
  }

  deleteContact(contact) {
    this.setState({
      contacts: this.state.contacts.filter(c => c !== contact)
    });
  }

  render () {
    return (
      <div className="App">
        <h1>Ironhack Contacts</h1>
        <button onClick={this.addRandomContact}>Add a random celebrity</button>
        <button onClick={this.sortContactByPopularity}>Sort by popularity</button>
        <button onClick={this.sortContactByName}>Sort alphabetically</button>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map(contact => {
                return (
                  <tr key={contact.id}>
                    <td><img src={contact.pictureUrl} className="portrait" alt="portrait"/></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td><button onClick={() => this.deleteContact(contact)}>Delete</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;