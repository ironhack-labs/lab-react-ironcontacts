import React from 'react';
import contacts from './contacts.json';

import './App.css';


class App extends React.Component {

  state = {
    contacts: contacts.slice(0,4)
  }

  addRandom = () => {
    const randomNumber = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomNumber];
    this.setState({
      contacts: [...this.state.contacts, randomContact]
    })
  }
  sortByName = () => {
    const sortedByName = this.state.contacts.sort((a, b)=> {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      contacts: sortedByName
    })
  }
  sortByPopularity = () => {
    const sortByPopularity = this.state.contacts.sort((a,b) => {
      return b.popularity - a.popularity;
    })
    this.setState({
      contacts: sortByPopularity
    })
  }
  delete = (id) => {
    const newContactList = this.state.contacts.filter(contact => {
      return contact.id !== id;
    })
    this.setState({
      contacts: newContactList
    })
 
  }

  render() {
    const firstContacts = this.state.contacts.map(contact => {
      return (
          <tr key={contact.id}>
              <td><img style={{ width:"100px"}}src={contact.pictureUrl} alt=""/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td><button onClick={()=>this.delete(contact.id)}>Delete</button></td>
          </tr>
      )
  });
    return (
      <div className='App'>
        <h1>IronContacts</h1>
        <div>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
<table>
<tr>
    <th>Picture</th>
    <th>Name</th> 
    <th>Popularity</th>
    <th>Action</th>
  </tr>
      {firstContacts}

      
</table>

      </div>
    )
  }
}

export default App;
