import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  state = {
    contacts:contacts.splice(0,5) //all the contacts we are messing with 
  }

  showCelebs = () => {
    let list = this.state.contacts.map((contact, i)=>{ //loo[ps throught contacts and returns an html list
      return (
        <tr>
          <td><img src={contact.pictureUrl}/></td> 
          <td>{contact.name}</td>
          <td> {contact.popularity}</td>
        </tr>
      )
    })
    return list;
  }

  addContact = () => {
    let newContacts = [...this.state.contacts] //makes a copy of the contact state
    newContacts.push({ //adds to the copy
      name:"Henry"
    })
    this.setState({ //and resets the state to be this newlist with another henry
      contacts:newContacts
    })
  }

  render() {
    return (
      <div class="contactTable">
        <h1>IronContacts</h1>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.showCelebs()} {/* Calls function once */}
        </table>
        
          
        <button onClick={this.addContact}>Add Contact</button>
      </div>
    );
  }
}

export default App;
