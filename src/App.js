import React from 'react';
import './App.css';
import contacts from './contacts.json';

const fiveContacts = contacts.slice(0, 5);
const leftoverContacts = contacts.slice(6);

class App extends React.Component {

  state = { fiveContacts }

  addRandomContact() {
    const newContacts = [...this.state.fiveContacts];
    let randomContact = leftoverContacts[Math.floor(Math.random() * leftoverContacts.length)];

    newContacts.push(randomContact);
    
    const index = leftoverContacts.findIndex(item => item.id == randomContact.id);
    leftoverContacts.splice(index, 1);

    if(leftoverContacts.length == 0) {
      alert('No more actors left!')
    } else {
      this.setState({
        fiveContacts: newContacts
      });
    }
  }

  sortByName() {
    const sortedByNameContacts = [...this.state.fiveContacts].sort((a, b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  });

    this.setState({
      fiveContacts: sortedByNameContacts
    });
  }

  sortByPopularity() {
    const sortedByPopularityContacts = [...this.state.fiveContacts].sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity));
  
    this.setState({
      fiveContacts: sortedByPopularityContacts
    });
  }

  deleteContact(contactId) {
    const newContacts = [...this.state.fiveContacts];
    const index = newContacts.findIndex(item => item.id == contactId);
    newContacts.splice(index, 1);

    this.setState({
      fiveContacts: newContacts
    });
  }

  render() {
    const contactsList = this.state.fiveContacts.map(contact => {
      return (
        <React.Fragment>
          <tr key={contact.id}>
            <td><img src={contact.pictureUrl} alt={contact.name}></img></td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td><button onClick={() => this.deleteContact(contact.id)}>Delete</button></td>
          </tr>
        </React.Fragment>
      );
    })

    return (
      <React.Fragment>
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>Add random contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
        <table className="ironcontacts-table">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {contactsList}
        </table>
      </React.Fragment>
    );
  }
}

export default App;