// src/App.js

import React, { Component } from 'react';
import contacts from "./contacts.json"; 
import "./App.css";


class App extends Component {

  state = {
    contacts: contacts.filter((e,index) => index < 5),
    sort: ''
  }

  
  addRandomContact = () => {

    const randomContact = contacts[Math.floor(Math.random() * (contacts.length - 5 + 1) + 5)];

    this.setState(prevState => {

      if (!prevState.contacts.includes(randomContact)){

        return {

          contacts: prevState.contacts.concat(randomContact)
        };
      };
    });
  }

   sortByName = () => {
      const sortContactsByName = this.state.contacts.sort((a,b) => a.name.localeCompare(b.name))

      this.setState({
        contacts: sortContactsByName
      })
  }

  sortByPopularity = () => {

    let sortContactsbyPopularity = this.state.contacts.sort((a,b) => b.popularity - (a.popularity))
    this.setState({
      contacts: sortContactsbyPopularity
    })
  }


  render() {

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div>
          <button onClick={() => this.addRandomContact()}>Add random contact</button>
          <button onClick={() => this.sortByName()}>Sort by name</button>
          <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
        </div>
        <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
                <th>Actions</th>
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
                      <th><button>Delete</button></th>
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