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


  sortByName = () => {

    const contactsCopy = [...this.state.contacts];

    this.setState({
      ...this.state,
      contacts: contactsCopy.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name))
    })
  }


  sortByPopularity = () => {

    const contactsCopy = [...this.state.contacts];

    this.setState({
      ...this.state,
      contacts: contactsCopy.sort((contact1, contact2) => contact2.popularity - contact1.popularity)
    })
  }


  deleteContact = (id) => {

    this.setState({
      ...this.state,
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    })
  }


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <br />
        <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Sort By Name</button>
        <button onClick={() => this.sortByPopularity()}>Sort By Popularity</button>
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
                  <tr key={contact.id}>
                    <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                    <td><button onClick={() => this.deleteContact(contact.id)}>Delete</button></td>
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
