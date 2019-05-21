import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contact from './components/Contact'
import ContactList from './components/ContactList'
import Button from './components/Button'

class App extends Component {
  state = {
    listOfContacts: contacts.map( (item, i) => {
      return ( 
          <Contact contact={item} key={i}/>
      )
    }).splice(0,5)
  }

  list = contacts.map( (item, i) => {
    return ( 
        <Contact contact={item} key={i}/>
    )
  })

  addContact = (contact => {
    this.setState({
      listOfContacts: [...this.state.listOfContacts, contact]
    })
  })


  render() {

    return (
      <div className="App">
        <h1 className="main-title">Iron Contacts</h1>
        <Button contacts={this.list} addContact={this.addContact} addedContacts={this.state.listOfContacts}/>
        <ContactList contacts={this.list} addedContacts={this.state.listOfContacts}/>
      </div>
    );
  }
}

export default App;
