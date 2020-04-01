import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ironcontacts from './list.js'
import contacts from './contacts.json';
import Contact from './Contact'

class App extends Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this);
}

  state = {
    allContacts: contacts,
    contactsList: contacts.slice(0,5)
  }

  randomContact = ()=>{
    let myArray = [...this.state.contactsList];
    myArray.push(this.state.allContacts[Math.ceil(Math.random()*this.state.allContacts.length)])
    this.setState({contactsList: myArray })
  }

 

  sortAlphabetically = ()=>{
  this.setState({
      contactsList: this.state.contactsList.sort((a,b)=>{
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
          if (b.name.toLowerCase() < a.name.toLowerCase()) return 1
          return 0
      })
  })
  }

  
  popularSort = ()=>{
    this.setState({
      contactsList: this.state.contactsList.sort((a,b)=> {return b.popularity - a.popularity})
  
    })
  }

  delete (index) {
    let myArray = [...this.state.contactsList]
    myArray.splice(index,1);
    this.setState({contactsList:myArray})
  }

  render() {
    return (
      <div className="App">
         
      <h1>IronContacts</h1>
      <div class="buttons">
        <button onClick={this.randomContact}>Add Random contact</button>
        <button onClick={this.sortAlphabetically}>Sort Contacts Alphabetically</button>
        <button onClick={this.popularSort}>Sort Contacts by Popularity</button>
        </div>
          {this.state.contactsList.map((contact, index)=> (
                <Contact 
                    key = {index}
                    name = {contact.name} 
                    rating={contact.popularity}
                    pictureUrl={contact.pictureUrl}
                    deleteContact={this.delete}
                     />
            ))}
          
            </div>
    );
  }
}

export default App;
