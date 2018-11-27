import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

import ContactList from './components/ContactList';


class App extends Component {
  constructor(){
    super();
    this.state = {
      contact: [
        contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]
      ]
    }
    console.log(this.state);
  }

// Functions
  randomContact = () => {
    const contactCopy = [...this.state.contact];
    const randomNum = Math.floor(Math.random() * contacts.length);
    contactCopy[contacts.length] = contacts[randomNum];
    this.setState({
      contact: contactCopy
      
    })

}

sortByName = () => {
  const contactCopy = [...this.state.contact];
  contactCopy.sort((a, b) =>{
    if (a.name > b.name){
      return 1
    }
    if(a.name  < b.name){
      return -1
    }
    return 0
  });
  this.setState({
    contact: contactCopy
  })
}
sortByPopularity = () => {
  const contactCopy = [...this.state.contact];
  contactCopy.sort((a, b) =>{
    return a.popularity - b.popularity
  });
  this.setState({
    contact: contactCopy
  })
}


deleteContact = (contactidx) => {
  const contactCopy = [...this.state.contact];
  contactCopy.splice(contactidx, 1);
  this.setState({
    contact:contactCopy
  })
}

  render() {
    return (
      <div className="App">
      <h1>IRON CONTACTS</h1>
      <button onClick = {() => this.randomContact()}>NOSSO BUTÃO!</button>
      <button onClick = {() => this.sortByName()}>Sort by Name</button>
      <button onClick = {() => this.sortByPopularity()}>Sort by Popularity</button>
        <table>
          <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th> 
            <th>Populary</th>
          </tr>
          </thead>
            <ContactList delete={this.deleteContact}contact={this.state.contact}/>
          </table>
      </div>
    );
  }
}

export default App;
