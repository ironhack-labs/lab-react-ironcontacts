
import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {

  state = {
    contactsList: contacts.slice(0, 5)
  }

  addRandomContact = ()=>{

    const randomIndex = Math.floor(Math.random()*(contacts.length))
    const newContact = contacts[randomIndex]
    
    const copyOfContactsList = [...this.state.contactsList]
    copyOfContactsList.unshift(newContact)

    this.setState({contactsList: copyOfContactsList})
   
  }

  sortByName = ()=>{

    const copyOfContactsList = [...this.state.contactsList]

    copyOfContactsList.sort((item1, item2)=>{
      if (item1.name > item2.name) { return 1; }
      else if (item1.name < item2.name) { return -1; } 
      return 0;
    })

    this.setState({contactsList: copyOfContactsList})
  }

  sortByPopularity = () => {
    const copyOfContactsList = [...this.state.contactsList]

    copyOfContactsList.sort((item1, item2)=>{
      if (item1.popularity > item2.popularity) { return -1; }
      else if (item1.popularity < item2.popularity) { return 1; }
       return 0;
    })

    this.setState({contactsList: copyOfContactsList})

  }

  deleteContact = (contactId) => {

    const newContact = this.state.contactsList.filter((item)=>{
      return item.id !== contactId
      })

    this.setState({contactsList: newContact})

  }

  render() {
    return (
      <div className="App">
        <h2>IronContacts</h2>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
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
          {this.state.contactsList.map((contact)=>{
            return(
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name}></img>
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td><button onClick={()=>{this.deleteContact(contact.id)}}>Delete</button></td>
          </tr>
          )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
