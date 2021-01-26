import React from 'react';
import './App.css';
import contacts from './contacts.json';

const fiveContacts = contacts.slice(0, 5);
const otherContacts = contacts.slice(6);

class App extends React.Component {
  state = {
    fiveContacts
  }

  addRandomContact() {
    const updatedContacts = [...this.state.fiveContacts];
    const randomContact = otherContacts[Math.floor(Math.random() * otherContacts.length)];

    updatedContacts.push(randomContact);

    this.setState({ fiveContacts: updatedContacts })
  }

  sortNames() {
    const sortedNamesList = [...this.state.fiveContacts].sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })

    this.setState({ fiveContacts: sortedNamesList })
  }

  sortPopularity() {
    const sortedPopularityList = [...this.state.fiveContacts].sort(function (a, b) {
      if (a.popularity < b.popularity) { return 1; }
      if (a.popularity > b.popularity) { return -1; }
      return 0;
    })

    this.setState({ fiveContacts: sortedPopularityList })
  }

  render() {
    const contactsList = this.state.fiveContacts.map(contact => {
      return <React.Fragment>
        <tr>
          <td><img src={contact.pictureUrl} alt="face of contact" /></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
        </tr>
      </React.Fragment>
    })

    return (
      <div className="App" >
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
        <button onClick={() => this.sortNames()}>Sort by name</button>
        <button onClick={() => this.sortPopularity()}>Sort by popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {contactsList}
        </table>
      </div>
    );
  }
}

export default App;