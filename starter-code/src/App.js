import React, { Component } from 'react';
import ContactComponent from './components/ContactComponent'
import './App.css';
import contacts from './contacts.json';


class App extends Component {

  state = {
    contacts: []
  }
 
  updateContacts = () => {
    for(let i=0; i<5; i++) {
      this.setState(
        this.state.contacts.push(contacts[i])
      )
    }
  }  

  render() {
    this.updateContacts();
    return (
      // <div className="App">
      //    {this.state.contacts.map( (contact, index) =>  
      //    <ContactComponent key={index}
      //    name = {contact.name}
      //    picture = {contact.pictureUrl}
      //    popularity = {contact.popularity}/> )
      //    }
      //    </div>
        <div className="App">
            <ContactComponent contacts = {this.state.contacts}/> )
            }
        </div>

    );
  }
}

export default App;
