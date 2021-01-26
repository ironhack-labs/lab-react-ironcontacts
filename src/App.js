import React from 'react';
import './App.css';
import contacts from './contacts.json';

const fiveContacts = contacts.slice(0, 5)

class App extends React.Component {
  state = {
    fiveContacts
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
        <table>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <React.Fragment>{contactsList}</React.Fragment>
        </table>
      </div>
    );
  }
}

export default App;