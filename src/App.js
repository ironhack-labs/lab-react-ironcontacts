import React from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5)
  }


  clickHandler = () => {

    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const newContacts = this.state.contacts.concat(randomContact)

    this.setState({
      contacts: newContacts
    })
  }

  sortByNameHandler = () => {
    const sortedContacts = [...this.state.contacts].sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({
      contacts: sortedContacts
    })
  }

  sortByPopHandler = () => {
    const sortedContacts = [...this.state.contacts].sort((a, b) => (a.popularity < b.popularity) ? 1 : -1)
    this.setState({
      contacts: sortedContacts
    })
  }


  deleteHandler = (id) => {

    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    })
  }



  render() {
    
    const mappingContacts = (contact) => {
      return (
        <tr key={contact.id}>
          <td><img src={contact.pictureUrl}></img></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td><button onClick={() => this.deleteHandler(contact.id)}>Delete</button></td>
        </tr>
      )
    }

    const myContacts = this.state.contacts.map(mappingContacts)

    return (
      <div>
        <h1>Iron Contacts</h1>

        <button onClick={this.clickHandler}>Add Random Contact</button>
        <button onClick={this.sortByNameHandler}>Sort by Name</button>
        <button onClick={this.sortByPopHandler}>Sort by Popularity</button>

        <table>
          <tr>
            <th>
              <b>Picture</b>
            </th>
            <th>
              <b>Name</b>
            </th>
            <th>
              <b>Popularity</b>
            </th>
          </tr>
          {myContacts}
        </table>
      </div>
    );
  }
}
export default App;