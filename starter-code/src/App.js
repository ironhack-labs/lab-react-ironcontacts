import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json'

class App extends Component {
  state = {
    contacts: contacts.splice(0,5)
  }
  showContacts = () => {
    let list = this.state.contacts.map((contact,i) => {
      return ( 
      <tr key={i}> 
        <td><img src={contact.pictureUrl} alt={contact.name} height="100" width="auto" ></img> </td>
        <td> {contact.name} </td>
        <td> {contact.popularity.toFixed(2)} </td>
        <td> <button onClick={()=>{this.deleteContact(i)}}>Delete</button></td>
      </tr>
      
        )
    })
    return list;
  }


  //document.getElementById("sjkfh").onclick = function(){ delete()}

  addContact = () => {
    let randomContact = contacts[Math.floor(Math.random()*contacts.length)];
    const contactsCopy = [...this.state.contacts];
    contactsCopy.push(randomContact);
    this.setState({
      contacts: contactsCopy
    })   
  }

  sortByPopularity = () => {
    const contactsByPopularity = [...this.state.contacts];
    contactsByPopularity.sort(function(a,b){
      var popA=a.popularity, popB=b.popularity
      if(popA < popB)
        return -1
      if (popA > popB)
        return 1
      return 0
      })

    this.setState({
      contacts: contactsByPopularity
    })
  }

  sortByName = () => {
    const contactsByName = [...this.state.contacts];
    contactsByName.sort(function(a,b){
      var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if(nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
      })

    this.setState({
      contacts: contactsByName
    })
  }

  deleteContact = (i) => {
    const contactsDelete = [...this.state.contacts];
    contactsDelete.splice(i,1);
    this.setState({
      contacts: contactsDelete
    })

  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="AppTitle">IronContacts</h1>
        </header>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name </button>
        <button onClick={this.sortByPopularity}>Sort by Popularity </button>
        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.showContacts()} 
        </table>
          
      </div>
    )
  }
}

export default App;
