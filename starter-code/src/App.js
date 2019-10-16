import React, { Component } from 'react';

import './App.css';
import contacts from './contacts.json';




class App extends Component {
  constructor() {
    super()
    this.state = {
      contactsList: [contacts[0],contacts[1], contacts[2],contacts[3],contacts[4]]
    }
  }
  addContact() {
    const contactsListCopy = this.state.contactsList;
    const randomNumber = Math.floor(Math.random() * contacts.length);
    const random = contacts[randomNumber];
    contactsListCopy.push(random);
    this.setState({
        contactsList: contactsListCopy
    })
  }

  deleteContact(index){
    const contactsListCopy = [...this.state.contactsList];
    contactsListCopy.splice(index, 1);
    this.setState({
        contactsList: contactsListCopy
    })
  }

  sortByNameContact(){
   
    this.setState({
    contactsList: this.state.contactsList.sort((a, b) => a.name.localeCompare(b.name))
        
    })
  }

  sortByPopularity(){
   
    this.setState({
    contactsList: this.state.contactsList.sort((a, b) => b.popularity - a.popularity)
        
    })
  }

  render() {
    return (
      <div className="App">
      <header>IronContacts</header>
 
      
      <button onClick={() => this.addContact()}>Add</button>
      <button onClick={() => this.sortByNameContact()}>sort by name</button>
      <button onClick={() => this.sortByPopularity()}>sort by popularity</button>
      <div>
        {
            this.state.contactsList.map((oneContact, index) => {
             return [ 
              
              <tr>
              <th>  <img src={oneContact.pictureUrl} className="photo" alt="photo" /></th>
              <th> <h2 className="name">{oneContact.name} </h2></th>
              <th><h2 className="rank">{oneContact.popularity}</h2> </th>
              <button onClick = {()=> this.deleteContact(index)}></button>
            </tr>
             ] 
          })
        }
      </div>

      </div>   
     
    );
  }
}

export default App;
