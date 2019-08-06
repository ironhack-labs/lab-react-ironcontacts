import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import ContactRow from './components/ContactRow.js';

// Create full array of ContactRows

var contactsFull = contacts.map((contact) => {
  return(
    <ContactRow
      pictureUrl = {contact.pictureUrl}
      name = {contact.name}
      popularity = {contact.popularity}
      />
  );
});


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactsFull: contactsFull,
      contactsDisplay: contactsFull.slice(0,5)
    }
  }

  render() {
    return (
      <div className="App">

        <h1>IronContacts</h1>

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



