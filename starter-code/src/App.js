import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'


class App extends Component {
  state = {
    contacts: contacts.splice(0,5)
  }
  showContacts = () => {
    let list = this.state.contacts.map((contact, i) => {
      return (
     
        <tr key={i}>
          <td><img src={contact.pictureUrl} alt="celebrity" height="100px" width="auto"/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <button onClick={() => {this.deleteContact(i)}}>Delete Contact</button>
        </tr>
   
      )
    })
    return list; 
  }

  addToContactList = () => {
    let newList = [...this.state.contacts]
    newList.push(contacts[Math.floor(Math.random()* contacts.length-1)])
    this.setState({
      contacts: newList
    })
  }

  deleteContact = (i) => {
    let listOfCelebs = [...this.state.contacts]
    listOfCelebs.splice(i, 1)
    this.setState({
      contacts: listOfCelebs
    })
  }

  sortByName = () => {
    let contactList = [...this.state.contacts]
    contactList.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
    this.setState({
      contacts: contactList
    });
  }

  sortByPopularity = () => {
    let contactList = [...this.state.contacts]
    contactList.sort(function(a, b){
      if(a.popularity < b.popularity) { return -1; }
      if(a.popularity > b.popularity) { return 1; }
      return 0;
  })
    this.setState({
      contacts: contactList
    });
  }
  


  render() {
    return (
      <div className="App">
          <header>
           <h1 className="App-title">IronContacts</h1>
         </header>
         <button onClick={this.addToContactList}>Add Random Contact</button>
         <button onClick={this.sortByName}>Sort by Name</button>
         <button onClick={this.sortByPopularity}>Sort by Popularity</button>
         <table className="center">
           <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
           </tr>
          {this.showContacts()}
        </table>
        
      </div>
    );
  }
}


export default App;