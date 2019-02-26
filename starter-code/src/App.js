import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contactsTab from './contacts.json'

class App extends Component {
  state = {contacts : contactsTab.slice(0, 5)}

  addRandomContact = () => {
    const randomContact = contactsTab[Math.floor(Math.random() * contactsTab.length)];
    
    this.setState({ contacts: [...this.state.contacts, randomContact] });
  }

  sortBy = (sortKey) => {
    const { contacts } = this.state;
    const contactSortByKey= contacts.sort((celeb1, celeb2) => {
      if (celeb1.name > celeb2.name) {
        return 1;
      } else if (celeb1[sortKey] < celeb2[sortKey]) return -1;
      else return 0;
    });
    this.setState({ contacts: contactSortByKey });
  }

  deleteContact = (name) => {
    const { contacts } = this.state;
    const filter = contacts.filter((contact)=> contact.name !== name);
    this.setState({ contacts:  filter});
  }
  
  
  render() {
    const { contacts } = this.state;
    const contactList =  contacts.map((contact, i) =>{
      return(
      <div className="contact-item" key={i}>
       <img src={contact.pictureUrl} alt=""/>
        <p className="align">{contact.name}</p>
        <p className="align">{contact.popularity}</p>
        <button className="material-icons" onClick={()=>this.deleteContact(contact.name)}>delete</button>
      </div>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>IronContacts</h1>
        <div className="contact-header">
          <p>Picture</p>
          <p>Name</p>
          <p>Popularity</p>
        </div>
        <div className="action-bar">
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={()=>this.sortBy('name')}>Sort By Name</button>
        <button onClick={()=>this.sortBy('popularity')}>Sort By Popularity</button>
        </div>
      
        { contactList }
      </div>
    );
  }
}

export default App;
