import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import ContactCard from './components/contacts/ContactCard.js'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      shownContacts: contacts.slice(0,5),
      restOfContacts: contacts.slice(5)
    }
  }

  showContacts = () => {
    return(
      this.state.shownContacts.map((eachContact, i)=>{
        return(
          <ContactCard
          key={i}
          image = {eachContact.pictureUrl} 
          name = {eachContact.name}
          popularity = {eachContact.popularity} 
          deleteContact = { () => {this.deleteContact(i)} }
          />
          )
      })
    )
  }

  addRandomContact = () => {
    let shownClone = [...this.state.shownContacts]
    let restClone = [...this.state.restOfContacts]
    let randomNumber = Math.floor(Math.random() * restClone.length)
    let randomContact = restClone.splice(randomNumber, 1 )
    shownClone.push(randomContact[0])

    this.setState({shownContacts: shownClone})
  }

  sortByName = () => {
    let shownClone = [...this.state.shownContacts]
    shownClone.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({shownContacts: shownClone})
  }

  sortByPopularity = () => {
    let shownClone = [...this.state.shownContacts]
    shownClone.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
    this.setState({shownContacts: shownClone})
  }
  
  deleteContact = (indexOfContact) =>{
    let shownClone = [...this.state.shownContacts]
    shownClone.splice(indexOfContact, 1)
    this.setState({shownContacts: shownClone})
  }


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className='top-buttons'>
          <button onClick ={ () => {  this.addRandomContact() } }>Add random contact</button>
          <button onClick ={ () => {  this.sortByName() } }>Sort by name</button>
          <button onClick ={ () => {  this.sortByPopularity() } }>Sort by popularity</button>
        </div>
        {this.showContacts()}
      </div>
    );
  }
}

export default App;
