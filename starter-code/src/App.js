import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Datos from './components/Datos';
import Selection from './components/Selection';

class App extends Component {
  state = {
    contactsArr: contacts
  }

  handleContacts = e => {
    console.log('')
  }

  handleClick = e => {
    const  contacts  = this.state.contactsArr.slice(0,5)
    const {contactsArr} = this.state

    //Math.random() * (max - min) + min; slice(1, 3);
    let random = Math.floor((Math.random() * (contacts.length-5)+5));
    
    if (e.target.name === 'rand') 
    contacts.push(contactsArr[random])
    console.log(contacts)
    //console.log(contacts[random])
    //return contacts[random]
  }

  render() {
    return (
      <div className="App">
        <Selection handleClick={this.handleClick}/>
        <table >
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          <Datos contactsArr={this.state.contactsArr} />
        </table >
      </div>

    );
  }
}

export default App;
