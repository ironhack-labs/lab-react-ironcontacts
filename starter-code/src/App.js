import React, { Component } from 'react';
import contacts from './contacts.json'
import './App.css'
class App extends Component {
	render() {
		return (
      <Contacts></Contacts>
    )
  }
}

class Contacts extends Component {
  constructor(){
    this.state = {
      myContacts: contacts.slice(0,4)
    };
  }
  sortByName() {
    this.setState(state => {
      myContacts: state.myContacts.sort((a,b) => a.name > b.name)
    })
  }
  sortByPopularity() {
    this.setState(state => {
      myContacts: state.myContacts.sort((a,b) => b.popularity > a.popularity)
    })
  }
  addRandomContact() {
    let n = Math.floor(Math.random() * contacts.length)
    n < 5 ? n = 5 : n = n
    this.setState(state => {
      myContacts: state.myContacts.push(contacts[n])
    })
  }
  deleteContact(i) {
    this.setState(state => {
      myContacts: state.myContacts.splice(i,1)
    })
  }
  render() {
    let contactOutput = [];
    contactOutput.push(
      <tr>
        <th>Picture</th>
        <th>Name</th> 
        <th>Popularity</th>
        <th>Action</th>
      </tr>
    );
   
    for (let i = 0; i < this.state.contacts.length; i++) {
      contactOutput.push(
        <tr>
          <th><img src={this.state.contacts[i].pictureUrl} alt="a banal profile pic"/></th>
          <th>{this.state.contacts[i].name}</th>
          <th>{this.state.contacts[i].popularity}</th>
          <th><button onClick={() => this.deleteContact(i)}>Delete</button></th>
        </tr>
      )
    }
    return (
      <div className="App">
        <h1>IronContacts</h1>
          <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
          <button onClick={() => this.sortByName()}>Sort by name</button>
          <button onClick={() => this.sortByPopularity()}>Sort by name</button>
        <h2></h2>
        <table>
          {contactOutput}
        </table>
      </div>
    );
  }
}

export default App;
