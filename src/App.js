import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

//set the state to 5 contacts (create the contactlist and set it to state)
class App extends Component { 
  state = {
    contactList: contacts.slice(0, 5),
  };

// --- add the random contacts-------
  addRandom = () => {
    const copyList = [...this.state.contactList];
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    if (!copyList.includes(random)) {
      copyList.push(random);
    }
    this.setState({
      contactList: copyList,
    });
  };

  //-----Sort the contacts by name
  sortByName = () => {
    const copyList = [...this.state.contactList];
    copyList.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    this.setState({
      contactList: copyList,
    });
  };



    //-----Sort the contacts by poulatirity
  sortByPopularity = () => {
    const copyList = [...this.state.contactList];
    copyList.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });

    this.setState({
      contactList: copyList,
    });
  };


    //-----delete the contacts
  deleteContact = (index) => {
    const removeContact = this.state.contactList.filter(
      (contact) => contact.id !== index
    );
    this.setState({
      contactList: removeContact,
    });
  };

  render() {
    return (
      <div className="App">
          <div className="buttons">
        <button onClick={() => this.addRandom()}>Add another contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
        </div>
        <div className="table">
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.state.contactList.map((mapContact) => {
            return (
              <tr>
                <td>
                  <img src={mapContact.pictureUrl} alt="" width="100"  />
                </td>
                <td>{mapContact.name}</td>
                <td>{mapContact.popularity}</td>
                <td>
                  <button onClick={() => this.deleteContact(mapContact.id)}>
                    Delete contact
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
        </div>
      </div>
    );
  }
}

export default App;