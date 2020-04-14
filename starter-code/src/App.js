import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showContacts: contacts.slice(0, 5)
    }
  }

// Random element 
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// Add Contact
  addRandomContact = () => {
    this.setState({
      showContacts: [
        ...this.state.showContacts,
        contacts[this.getRandomIntInclusive(0, contacts.length -1)]
      ]
    })

  }

  render() {
    return (
      <div className="App">
      <button onClick = {this.addRandomContact}>Add random contact</button>
        {this.state.showContacts.map((contact, index) => {
          return (
            <ul className='contacts-container' key={index}>
              <div className='contact-info-container'>
                <h2>Picture</h2>
                <li><img src={contact.pictureUrl} alt="actor" /></li>
              </div>
              <div className='contact-info-container'>
                <h2>Name</h2>
                <li>{contact.name}</li>
              </div>
              <div className='contact-info-container'>
                <h2>Popularity</h2>
                <li>{contact.popularity}</li>
              </div>
            </ul>);
        })}
      </div>
    )
  }
}

export default App;
