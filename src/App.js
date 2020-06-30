import React, { Component } from 'react';
import contacts from './contacts.json';


class App extends Component {

  state = {
    showingContacts: contacts.splice(0,5), //This will have the first 5 
    restOfContacts: contacts  //This will have everyone else excpet the first 5 
  }

  showContacts = () => {
    let contactList = this.state.showingContacts.map((eachContact,i) => {
      return <li key={i}>{eachContact.name} {eachContact.popularity}</li>
    })    
    return contactList
  }

  render() {
    return (
      <div>

        {/* { this.state.contacts } */}
        { this.showContacts() }        
      </div>
    );
  }
}

export default App;