import { Component } from 'react';
import contacts from './contacts.json';
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
    const nameSortedContacts = this.state.contacts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

    this.setState(state => {
      return {
        nameSortedContacts
      }
    })
  };

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
        </tr>
      )
    });

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div>
          <button onClick={this.addRandomContact}> Add Random Contact</button>
          <button onClick={this.sortByName}> Sort By Name</button>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>
                Picture
              </th>
              <th>
                Name
              </th>
              <th>
                Popularity
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
