import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import ContactRow from './components/ContactRow.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactsBackup: contacts,
      contactsAll: contacts,
      contactsDisplay: contacts
    };
  };

  removeContact = (index) => {        // Needs to be bound to App (using arrow fn to do this)
    let contactsDisplayCopy = [...this.state.contactsDisplay];
    let contactsAllCopy = [...this.state.contactsAll];

    contactsDisplayCopy.splice(index, 1);
    contactsAllCopy.splice(index, 1);

    this.setState({contactsDisplay: contactsDisplayCopy})
    this.setState({contactsAll: contactsAllCopy})
  };

  resetRemovals = () => {
    this.setState({contactsAll: [...this.state.contactsBackup]});
    this.setState({contactsDisplay: [...this.state.contactsBackup]});
  }

  searchContacts = (event) => {
    let searchTerm = event.target.value;

    let contactsToLoadIn = this.state.contactsAll.filter((contact) => {
      return contact.name.indexOf(searchTerm) >= 0;
    });
  
    this.setState({contactsDisplay: contactsToLoadIn})   
  };

  sortContactsByName = () => {
    let contactsDisplayCopy = [...this.state.contactsDisplay];
    contactsDisplayCopy = contactsDisplayCopy.sort( (a, b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
      });
    this.setState({contactsDisplay: contactsDisplayCopy})
  };

  sortContactsByPopularity = () => {
    let contactsDisplayCopy = [...this.state.contactsDisplay];

    contactsDisplayCopy = contactsDisplayCopy.sort( (a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({contactsDisplay: contactsDisplayCopy})
  };

  
  render() {
    return (
      <div className="App">

        <h1>IronContacts</h1>

        <input onChange={this.searchContacts} placeholder='Search for contact' type='search'></input>
        <button onClick={this.sortContactsByName}>Sort by Name</button>
        <button onClick={this.sortContactsByPopularity}>Sort by Popularity</button>
        <button onClick={this.resetRemovals}>Reset removals</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th> 
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.contactsDisplay.map((contact, index) => {
                return(
                  <ContactRow
                    index = {index.toString()}
                    pictureUrl = {contact.pictureUrl}
                    name = {contact.name}
                    popularity = {contact.popularity}
                    removeContact = {this.removeContact}
                  />
                );
              })
            }
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;