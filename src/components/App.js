import './App.css';
import contacts from './../contacts.json';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allContacts: contacts.slice(0, 5)
    }
  }

  addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * (contacts.length));
    const newContact = contacts[randomIndex];
    const copyAllContacts = [...this.state.allContacts];
    copyAllContacts.unshift(newContact);
    this.setState({ allContacts: copyAllContacts });
  }

  sortByName = () => {
    const copyAllContacts = [...this.state.allContacts]
    copyAllContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    })
    this.setState({ allContacts: copyAllContacts })
  }

  sortByPopularity = () => {
    const copyAllContacts = [...this.state.allContacts]
    copyAllContacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      else if (a.popularity < b.popularity) {
        return 1;
      }
      else if (a.popularity === b.popularity) {
        return 0;
      }
    })
    this.setState({ allContacts: copyAllContacts })
  }

  deleteContact = (contactId) => {
    const copyAllContacts = [...this.state.allContacts]
    const deletedContact = copyAllContacts.filter((contact) => {
      return contact.id != contactId
    })
    this.setState({ allContacts: deletedContact })
  }


  render() {

    return (
      <main>
        <h1>IronContacts</h1>
        <div className="buttons">
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allContacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt={contact.name}></img>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td><button onClick={() => this.deleteContact(contact.id)}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    )
  }

}

export default App;
