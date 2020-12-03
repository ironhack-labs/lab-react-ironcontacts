import React, { Component } from 'react'
import './App.css';
import contacts from './contacts.json';

export default class App extends Component {

  state = {
    contacts: contacts.slice(0, 5),
  }

  add = () => {
    const stateContactsIds = this.state.contacts.map(displayedContact => displayedContact.id)
    const filtered = contacts.filter(contact=> {
      return !stateContactsIds.includes(contact.id);
    });
    const randomIndex = Math.floor(Math.random() * filtered.length);
    const added = this.state.contacts.concat(filtered[randomIndex]);
    this.setState({ contacts: added });
  }

  sortByName = () => {
    const sorted = this.state.contacts.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (b.name > a.name) return 1;
    })
    this.setState({ contacts: sorted });
  }

  sortByPopularity = () => {
    const sorted = this.state.contacts.sort((a, b) => {
      return a.popularity - b.popularity
    })
    this.setState({ contacts: sorted });
  }

  delete = (id) => {
    const deleted = this.state.contacts.filter(contact => contact.id !== id)
    this.setState({ contacts: deleted });
  }

  render() {
    return (
      <>
        <div className="App">
          {/* <header className="App-header">
          </header> */}
          <h1>IronContacts</h1>
          <button onClick={ this.add }>Add Random Contact</button>
          <button onClick={ this.sortByName }>Sort by Name</button>
          <button onClick={ this.sortByPopularity }>Sort by Popularity</button>
          <table>
            <thead>
              <tr>
                <td>Picture</td>
                <td>Name</td>
                <td>Popularity</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              { this.state.contacts.map(contact => {
                return (
                  <tr key={ contact.id }>
                    <td><img src={ contact.pictureUrl } style={{ width: '50px'}} alt="picture"/></td>
                    <td>{ contact.name }</td>
                    <td>{ contact.popularity }</td>
                    <td><button onClick={ () => this.delete(contact.id)}>Delete</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}