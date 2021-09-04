import { Component } from 'react';
import contacts from './contacts.json';
import { TrashIcon } from '@heroicons/react/solid'
import './App.css';

const firstContacts = contacts.splice(0, 5);

export default class App extends Component{

  state = {
    contacts: firstContacts
  };

  addRandomContact = () => {
    let newRandomContact = '';

    const randomIndex = Math.floor(Math.random() * contacts.length);

    newRandomContact = contacts[randomIndex];

    this.setState(state => {
      return {
        contacts: [...state.contacts, newRandomContact]
      }
    })
  };

  sortByName = () => {
    const nameSortedContacts = this.state.contacts.sort(
      (a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

    this.setState(state => {
      return {
        nameSortedContacts
      }
    })
  };

  sortByPopularity = () => {
    const popularitySortedContacts = this.state.contacts.sort(
      (a,b) => (a.popularity > b.popularity) ? -1 : ((b.popularity > a.popularity) ? 1 : 0))

    this.setState(state => {
      return {
        popularitySortedContacts
      }
    })
  };

  deleteContact = (contactId) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId)
    })
  }

  render() {

    const contactsList = this.state.contacts.map((contact) => {
      return(
        <tr key={contact.id}>
          <td>
            <img src={contact.pictureUrl} alt={contact.name} style={{width:100, objectFit:'cover', height:120}} />
          </td>
          <td>
            {contact.name}
          </td>
          <td>
            {contact.popularity.toFixed(2)}
          </td>
          <td>
            <TrashIcon className="delete-icon" onClick={() => this.deleteContact(contact.id)} />
          </td>
        </tr>
      )
    });

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div>
          <button className="button_a" onClick={this.addRandomContact}> Add Random Contact</button>
          <button className="button_a" onClick={this.sortByName}> Sort By Name</button>
          <button className="button_a" onClick={this.sortByPopularity}> Sort By Popularity</button>
        </div>
        
        <table className="styled-table">
          <thead>
            <tr className="active-row">
              <th>
                Picture
              </th>
              <th>
                Name
              </th>
              <th>
                Popularity
              </th>
              <th>

              </th>
            </tr>
          </thead>
          <tbody>
            {contactsList}
          </tbody>
        </table>
      </div>
    )
  };
}
