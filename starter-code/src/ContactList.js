import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import ContactCard from './ContactCard';

class ContactList extends Component {
    constructor(props){
        super(props)
        this.state = {
            contacts: contacts.slice(0,5)
        }
    }

  showContacts(){
    return this.state.contacts.map((eachContact, index)=>{
      return(
       <ContactCard key = {index}
        name={eachContact.name}
        picture={eachContact.pictureUrl}
        popularity={eachContact.popularity}
        deleteClickHandler = {()=>this.deleteContact(index)}  
        />
      )
    })
  }

  addContact(){
    const index = Math.floor((Math.random() * 150) + 6);
    const contact = contacts[index]
    const theContacts = [...this.state.contacts];
    theContacts.push(contact)
    this.setState({
      contacts: theContacts
    })
  }

  deleteContact(index){
    const theContacts = [...this.state.contacts];
    theContacts.splice(index, 1)
    this.setState({
      contacts: theContacts
    })
  }

  sortName(){
    const theContacts = [...this.state.contacts];
    theContacts.sort(function(a, b){
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
  })
    this.setState({
      contacts: theContacts
    })
  }

  sortPopularity(){
    const theContacts = [...this.state.contacts];
    theContacts.sort(function(a, b){
   return b.popularity - a.popularity
  })
    this.setState({
      contacts: theContacts
    })
  }

  




  render() {
    return (
      <div className="list">
      <button className="menubuttons" onClick ={()=> this.addContact()}>Add a Random Contact</button>
      <button className="menubuttons" onClick ={()=> this.sortName()}>Sort by Name</button>
      <button className="menubuttons" onClick ={()=> this.sortPopularity()}>Sort by Popularity</button>
      <table id="header">
      <tbody>
      <tr>
      <th>Picture</th>
      <th>Name</th> 
      <th>Popularity</th>
      <th>Action</th>
      </tr>
      </tbody>
      </table>
      {this.showContacts()}
    
       
      </div>
    );
  }
}

export default ContactList;