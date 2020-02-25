import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contacts from './Contact/Contacts';

class App extends Component {

  state = {
    contacts: [{
      "name": "Idris Elba",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
      "popularity": 11.622713,
      "id": "11731993-0604-4bee-80d5-67ad845d0a38"
    },
    {
      "name": "Jessica Chastain",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
      "popularity": 8.324357,
      "id": "17980511-75ca-48b0-bea8-462fec2ee43d"
    },
    {
      "name": "Johnny Depp",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
      "popularity": 15.656534,
      "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06"
    },
    {
      "name": "Emilia Clarke",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
      "popularity": 16.211837,
      "id": "e14aa81d-b812-412d-bc4d-4a0d2c9c66f4"
    },
    {
      "name": "Leonardo DiCaprio",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
      "popularity": 11.245333,
      "id": "b4d2c7b8-fdd5-426a-85bd-011c3f50a6c6"
    }]
  }


  addRandom(){
    let newState = {
      ...this.state
    };

    let newContact = contacts[Math.floor(Math.random() * (100 + 1))]

    newState.contacts.push(newContact)

    this.setState(newState)

  }


  sortByname(){
    let newState = {
      ...this.state
    }

    newState.contacts.sort((a, b) => a.name.localeCompare(b.name));

    this.setState(newState)
  }


  sortBypopularity(){
    let newState = {
      ...this.state
    }

    newState.contacts.sort((a, b) => b.popularity - a.popularity)

    this.setState(newState)
  }

  deleteContact(productID) {
    
    let newState = {...this.state}
    let filteredProducts = newState.contacts.filter((contact) => contact.id !== productID)

    newState.contacts = filteredProducts

    this.setState(newState)
  }


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <nav>
          <button className="action-btn" onClick={() => this.addRandom()}>Add Random Contact</button>
          <button className="action-btn" onClick={() => this.sortByname()}>Sort by Name</button>
          <button className="action-btn" onClick={() => this.sortBypopularity()}>Sort by Popularity</button>
        </nav>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.state.contacts.map(contact => (
            <Contacts clickToDelete={() => this.deleteContact(contact.id)} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity}></Contacts>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
