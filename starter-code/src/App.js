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

  render() {
    return (
      <div className="App">
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
