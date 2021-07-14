import { Component } from 'react';
import './App.css';
import contacts from "./contacts.json";

//create an array of the 5 first contacts to use as your initial state.
//Display that array of 5 contacts in a <table> and display the picture, 
//name, and popularity of each contact.

const firstContacts = contacts.slice(0,5)

class App extends Component {

  state = {
    ironContacts: firstContacts
  }

  addRandomContact = () => {
    let newContact = '';
    const randomIndex = Math.floor(Math.random() * contacts.length -1)

    newContact = contacts[randomIndex]

    this.setState(state => {
      return {
        ironContacts: [...state.ironContacts, newContact]
      }
    })
  }

  sortByName = () => {
    const sortedContacts = this.state.ironContacts.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

    this.setState(state => {
      return {
        ironContacts: sortedContacts
      }
    })
  }

  sortByPopularity = () => {
    const sortedContacts = this.state.ironContacts.sort((a, b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0));

    this.setState(state => {
      return {
        ironContacts: sortedContacts
      }
    })
  }

  deleteContact = (id) => {
    this.setState(state => ({
      ironContacts: this.state.ironContacts.filter(contact => {
        return contact.id !== id
      })
    }))
  }

  render() {

    const contactList = this.state.ironContacts.map(contact => {

      return (
        <tr key={contact.id}>
        <td>
          <img src={contact.pictureUrl} alt={contact.name} width='50'/>
        </td>
        <td> {contact.name}
        </td>
        <td> {contact.popularity}
        </td>
        <td> <button onClick={() => this.deleteContact(contact.id)}>Delete</button>
        </td>
        </tr>
      )
    });

    return (
      <>
      <h1>IronContacts</h1>
      <button onClick={this.addRandomContact}>Add Random Contact</button>
      <button onClick={this.sortByName}>Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by Popularity</button>
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
          <th>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {contactList}
      </tbody>
      </table>
      </>
    );
  }
}

export default App;
