import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      showContacts: contacts.slice(0,5)
    }
  }

  addRandomContact = () => {
    let newContact = contacts[Math.floor(Math.random() * (contacts.length - 0 + 1)) + 0]
    while(this.state.showContacts.includes(newContact.name)){
      newContact = contacts[Math.floor(Math.random() * (contacts.length - 0 + 1)) + 0]
    }
    this.setState({
      showContacts: [...this.state.showContacts, newContact]
    })
  }

  sortByName = () => {
    this.setState({
      showContacts: this.state.showContacts.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB) return -1 
        if (nameA > nameB) return 1
        return 0
      })
    })
  }

  sortByPopularity = () => {
    this.setState({
      showContacts: this.state.showContacts.sort(function(a, b){
          return b.popularity-a.popularity
        })
    })
  }

  deleteContact = (id) => {
    this.setState({
      showContacts: this.state.showContacts.filter(a => {
        return a.id !== id
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.showContacts.map((c, index) => {
              return(
              <tr key={index}>
                <td> <img className='contact-image' src={c.pictureUrl} alt=""/></td>
                <td>{c.name}</td>
                <td>{c.popularity}</td>
                <td><button onClick={() => this.deleteContact(c.id)}>Delete</button></td>
              </tr>);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
