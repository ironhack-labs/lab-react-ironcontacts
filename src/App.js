import React from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends React.Component {

  state = {
    contacts: contacts.slice(0, 5)
  };


  addRandomContact = () => {

    const randomContacts = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState((state) => {
      return { contacts: [...state.contacts, randomContacts] };
    })

  }

  
  sortContactByName = () => {

    const sortContacts = [...this.state.contacts].sort((a, b) => (a.name > b.name) ? 1 : -1);
    this.setState({
      contacts: sortContacts
    })

  }
  
  
  sortContactByPopularity = () => {

    const sortContacts = [...this.state.contacts].sort((a, b) => (a.popularity < b.popularity) ? 1 : -1);
    this.setState({
      contacts: sortContacts
    })

  }
  
  
  deleteOneContact = (id) => {

    this.setState({
      contacts: this.state.contacts.filter(oneContact => oneContact.id !== id)
    })

  }


  render() {

    const theContacts = this.state.contacts.map(contact => {
      return (
        <tr key = { contact.id }>
          <td><img src = { contact.pictureUrl } alt = "{ contact.name }"/></td>
          <td>{ contact.name }</td>
          <td>{ contact.popularity.toFixed(2) }</td>
          <td><button onClick = { () => { this.deleteOneContact(contact.id) } } >Delete</button></td>
        </tr>
      )
    })

    return (
      <div className="Contacts" >

      <div className="upper-div">
        <h1>IronContacts</h1>

        <button onClick = { this.addRandomContact } >Add Random Contact</button>
        <button onClick = { this.sortContactByName } >Sort by name</button>
        <button onClick = { this.sortContactByPopularity } >Sort by popularity</button>
      </div>

        <table>
          <thead>
            <tr>
              <th className="tags">Picture</th>
              <th className="tags">Name</th>
              <th className="tags">Popularity</th>
              <th className="tags">Action</th>
            </tr>
          </thead>
          <tbody>
            { theContacts }
          </tbody>
        </table>
      </div>
    );
  }
}


export default App;