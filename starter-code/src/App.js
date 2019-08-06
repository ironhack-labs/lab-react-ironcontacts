import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import ContactRow from './components/ContactRow.js';

// Create full array of ContactRows

var contactsFull = contacts.map((contact, index) => {
  return(
    <ContactRow
      index = {contact.index}
      pictureUrl = {contact.pictureUrl}
      name = {contact.name}
      popularity = {contact.popularity}
      />
  );
});

// Create App

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactsFull: contactsFull,
      contactsDisplay: contactsFull
    }
  }

  searchContacts = (event) => {
    let searchTerm = event.target.value;

    let contactsToLoadIn = this.state.contactsFull.filter((contact) => {
      return contact.props.name.indexOf(searchTerm) >= 0;
    });
  
    this.setState({contactsDisplay: contactsToLoadIn})   
  };

  sortContactsByName = () => {
    let contactsDisplayCopy = [...this.state.contactsDisplay];
    contactsDisplayCopy = contactsDisplayCopy.sort( (a, b) => {
      if(a.props.name < b.props.name) { return -1; }
      if(a.props.name > b.props.name) { return 1; }
      return 0;
      });
    this.setState({contactsDisplay: contactsDisplayCopy})
  };

  sortContactsByPopularity = () => {
    let contactsDisplayCopy = [...this.state.contactsDisplay];

    contactsDisplayCopy = contactsDisplayCopy.sort( (a, b) => {
      return b.props.popularity - a.props.popularity;
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

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th> 
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsDisplay}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;



