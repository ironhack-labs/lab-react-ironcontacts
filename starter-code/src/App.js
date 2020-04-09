import React, { Component } from 'react';
import Contacts from './contacts.json';
import ContactTable from './components/ContactTable';
import './App.css';

class App extends Component {
  render() {
    const fiveContacts = Contacts.slice(0,5);
    console.log(fiveContacts)
    return (
      <div className="App">
        <table className="table-box">
          <tr className="header-table">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
            {fiveContacts.map(profile => (
              <ContactTable image={profile.pictureUrl} name={profile.name} popularity={profile.popularity} />
            ))};
        </table>
      </div>
    );
  }
}

export default App;
