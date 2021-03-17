import './App.css';
import React, { Component } from 'react'
import contactsJSON from "./contacts.json";



export default class App extends Component {
  state = {
    contactsFive: contactsJSON.slice(0, 5),
    contactsAll: contactsJSON
  };

  getRandomContact = () => {
    const newContact = this.state.contactsAll[Math.floor(Math.random() * this.state.contactsAll.length)];
    return newContact
  }
  handleAddContact = () => {
  
      
      this.setState({ contactsFive: [this.getRandomContact(this.contactsAll), ...this.state.contactsFive] });
  
      
    };
    sortName = () => {
      const copyContacts = [...this.state.contactsFive];
      copyContacts.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      this.setState({ contactsFive: copyContacts });
    };

  render() {
      return ( <div >
     <button onClick={this.handleAddContact}>Add a contact</button>
     <button onClick={this.sortName}>Sort</button>
      <div >
        {this.state.contactsFive.map((contact, index) => (

          <div key={index} >
            <div >
              <img
                alt=""
                src={contact.pictureUrl}
              />
            </div>
            <div >
              <h5>{contact.name}</h5>
              
                <p >{contact.popularity} </p>
              
              
            </div>
           
          </div>
        ))}
      </div>
    </div>
      );
  }
}
