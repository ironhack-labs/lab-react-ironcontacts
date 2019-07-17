import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contacts from './components/Contacts';
class App extends Component {

  state = {
    contacts: contacts.slice(0, 5)
  }

  addRandomContact = () => {
    // Delete the first 5 elements. 
    contacts.splice(0, 5);

    // Get random contact.
    let item = contacts[Math.floor(Math.random() * contacts.length)];

    // Create a new array and push the random contact.
    let newContactArray = [...this.state.contacts]
    newContactArray.push(item)

    // Set new state.
    this.setState({ contacts: newContactArray })
  }

  sortByName = () => {
    let newContactArray = [...this.state.contacts]
    newContactArray.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    this.setState({ contacts: newContactArray })
  }

  sortByPopularity = () => {
    let newContactArray = [...this.state.contacts]
    newContactArray.sort((a, b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0))
    this.setState({ contacts: newContactArray })
  }

  deleteContact = (i) => {
    let newContactArray = [...this.state.contacts]
    console.log(i)
    newContactArray.splice(i, 1)
    this.setState({
      contacts: newContactArray
    });
  }


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="buttons">
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
          <Contacts data={this.state.contacts} deleteContact={this.deleteContact} />
        </div>
      </div>
    );
  }
}

export default App;
