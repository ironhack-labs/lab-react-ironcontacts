// src/App.js

import React, { Component } from 'react';
import contacts from "./contacts.json"; 
import "./App.css";


class App extends Component {

  state = {
    contacts: contacts.filter((e,index) => index < 5)
  }

  render() {

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.contacts.map(contact => {
                  return (
                    <tr key={contact.id}>
                      <th><img src={contact.pictureUrl} style={{width:'100px'}}alt="Celebrity" /></th>
                      <th>{contact.name}</th>
                      <th>{contact.popularity.toFixed(2)}</th>
                      <th>{contact.wonOscar && '🏆'}</th>
                      <th>{contact.wonEmmy && '🏆'}</th>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
      </div>
    );
  }
}

export default App;