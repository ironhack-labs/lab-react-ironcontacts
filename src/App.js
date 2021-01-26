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

  render() {
    const contactsList = this.state.fiveContacts.map(contact => {
      return <React.Fragment>
        <tr>
          <td><img src={contact.pictureUrl} /></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
        </tr>
      </React.Fragment>
    })

    return (
      <div className="App" >
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
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