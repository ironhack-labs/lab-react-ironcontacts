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

  sortArray = (contacts => {
    this.setState({
      listOfContacts: contacts
    })
  })


  render() {

    return (
      <div className="App">
        <h1 className="main-title">Iron Contacts</h1>
        <div className="button-list">
          <Button contacts={this.list} options="1" function={this.addContact} addedContacts={this.state.listOfContacts} children="Add random Contact"/>
          <Button options="2" function={this.sortArray} addedContacts={this.state.listOfContacts} children="Sort by name" />
          <Button options="3" function={this.sortArray} addedContacts={this.state.listOfContacts} children="Sort by popularity" />
        </div>
        <ContactList contacts={this.list} addedContacts={this.state.listOfContacts}/>
      </div>
    );
  }
}

export default App;
