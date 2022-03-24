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

    const sortContactsbyPopularity = this.state.contacts.sort((a,b) => b.popularity - (a.popularity))
    this.setState({
      contacts: sortContactsbyPopularity
    })
  }



  deleteContact = (id) => {
    const nonDeletedContacts = this.state.contacts.filter((contact) => contact.id !== id)
    this.setState({
      contacts: nonDeletedContacts
    })
  }


  render() {

    return (
      <div className="App">
        <h1 className='Title'>IronContacts</h1>
        <div  className='Filters'>
          <button className='Headerbuttons' onClick={() => this.addRandomContact()}>Add random contact</button>
          <button className='Headerbuttons' onClick={() => this.sortByName()}>Sort by name</button>
          <button className='Headerbuttons' onClick={() => this.sortByPopularity()}>Sort by popularity</button>
        </div>
        <table className='Table'>
            <thead>
              <tr>
                <th className='Headers'>Picture</th>
                <th className='Headers'>Name</th>
                <th className='Headers'>Popularity</th>
                <th className='Headers'>Won Oscar</th>
                <th className='Headers'>Won Emmy</th>
                <th className='Headers'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.contacts.map(contact => {
                  return (
                    <tr key={contact.id} >
                      <th><img src={contact.pictureUrl} style={{width:'100px'}}alt="Celebrity" /></th>
                      <th>{contact.name}</th>
                      <th>{contact.popularity.toFixed(2)}</th>
                      <th>{contact.wonOscar && '🏆'}</th>
                      <th>{contact.wonEmmy && '🏆'}</th>
                      <th><button className='btn btn-3 btn-sep icon-send' onClick={() => this.deleteContact(contact.id)} >Delete</button></th>
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