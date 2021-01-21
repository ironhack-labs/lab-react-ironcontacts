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

  render() {
    const contactsList = this.state.fiveContacts.map(contact => {
      return (
        <React.Fragment>
          <tr key={contact.id}>
            {/* <td><img src={contact.pictureUrl} alt={contact.name}></img></td> */}
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
          </tr>
        </React.Fragment>
      );
    })

    return (
      <React.Fragment>
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>Add random contact</button>
        <table className="ironcontacts-table">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {contactsList}
        </table>
      </React.Fragment>
    );
  }
}

export default App;