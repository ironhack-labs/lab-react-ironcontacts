import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {

  state = {
    currentList : contacts.splice(0,5),
    allContacts : contacts
  }

  deleteName = (index) => {
    let everyContact = [...this.state.currentList]
    everyContact.splice(index,1)
      this.setState({
        currentList : everyContact
      })
  }

  getContacts = () => {
    let contact = this.state.currentList.map((contact, i)=>{
      return <tr className='contact-info' key={i}> 
              <td><img src={contact.pictureUrl} alt='celebrity'/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td><button onClick={()=>this.deleteName(i)}> Delete </button></td>
             </tr>
    })
    return contact;
  }

  addRandomContact = () => {
    let everyContact = [...this.state.currentList]
    let randomIndex = Math.floor(Math.random()*(this.state.allContacts.length))
    let newContact = this.state.allContacts[randomIndex]
    everyContact.push(newContact);
      this.setState({
        currentList : everyContact
      })
  }

  sortName = () => {
    let everyContact = this.state.currentList.sort((a, b) => (a.name > b.name) ? 1 : -1)
      this.setState({
        currentList : everyContact
      })
  }

  sortPopularity = () => {
    let everyContact = this.state.currentList.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
      this.setState({
        currentList : everyContact
      })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.sortPopularity}>Sort by Popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.getContacts()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;