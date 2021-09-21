import React from 'react';
import './App.css';

import allContacts from './contacts.json';

const fiveContacts = allContacts.slice(0, 5)


class App extends React.Component {
  state = {
    contacts: fiveContacts,
  }


  addRandomContact = () => {

    const contactsCopy = [...this.state.contacts];
    contactsCopy.push(allContacts[Math.floor(Math.random() * allContacts.length)])

    this.setState({
      ...this.state,
      contacts: contactsCopy
    })
  }


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <br />
        <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
        <br />
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
              this.state.contacts.map(contact => {
                return (
                  <tr>
                    <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }

}


export default App;
