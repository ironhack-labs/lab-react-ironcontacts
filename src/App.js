import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import React from 'react';


class App extends React.Component {

  state = {
    contacts: contacts.slice(0, 5),
  }

  addRandomContact = () => {
    const stateContactsIds = this.state.contacts.map(contact => contact.id);
    const restOfContacts = contacts.filter(contact => !stateContactsIds.includes(contact.id))
    const randomContact = restOfContacts[Math.floor(Math.random() * restOfContacts.length)]
    this.setState((state, props) => ({
    contacts: [...this.state.contacts, randomContact]
    }))
  }

  sortByName = () => {
const sortedContacts = contacts.sort((a, b) =>{
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0
})
this.setState((state, props) =>({
  contacts: sortedContacts
}))
  }

  sortByPopularity = () => {
    const sortedPopularity = contacts.sort((a, b) =>{
      if (a.popularity < b.popularity) return -1
      if (a.popularity > b.popularity) return 1
      return 0
    })
    this.setState((state, props) =>({
      contacts: sortedPopularity
    }))
  }

  delete = id => {
const contactCopy = this.state.contacts;
const contactId = contactCopy.findIndex(contact => contact.id === id);
contactCopy.splice(contactId, 1)
this.setState({
  contacts: contactCopy
})
  }

  render() {
    return (
<div className="App">
<header className="App-header">
  <h1>IronContacts</h1>
  <div>
  <button onClick={this.addRandomContact}>Add Random Contact</button>
  <button onClick={this.sortByName}>Sort by name</button>
  <button onClick={this.sortByPopularity}>Sort by popularity</button>
  </div>
  <br></br>
  <table>
  <thead>
    <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    </tr>
  </thead>
  <tbody>
    {this.state.contacts.map(contact => (
      <tr key={contact.id}>
     <td><img src={contact.pictureUrl} style={{width:'100px'}}/></td>
      <td>{contact.name}</td>
     <td>{contact.popularity}</td>
     <td><button onClick={() => this.delete(contact.id)}>Delete</button></td>
      </tr>
    ))}
  </tbody>
  </table>
  </header>
</div>

    )
   
}
}

export default App;
