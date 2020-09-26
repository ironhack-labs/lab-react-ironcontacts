import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';

class App extends Component {

  state = {
    contacts: [
      {
        "name": "Idris Elba",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
        "popularity": 11.622713,
        "id": "11731993-0604-4bee-80d5-67ad845d0a38"
      },
      {
        "name": "Johnny Depp",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
        "popularity": 15.656534,
        "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06"
      },
      {
        "name": "Monica Bellucci",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
        "popularity": 16.096436,
        "id": "0ad5e441-3084-47a1-9e9b-b917539bba71"
      },
      {
        "name": "Gal Gadot",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
        "popularity": 10.049256,
        "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2"
      },
      {
        "name": "Ian McKellen",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
        "popularity": 10.070132,
        "id": "0067ae32-97b6-4431-898e-eb1c10150abb"
      },
    ]
  }

  addRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const newContacts = [...this.state.contacts];
    newContacts.push(randomContact);
    this.setState({
      contacts: newContacts
    })
  }

  sortByName = () => {
    const copiedContacts = [...this.state.contacts];
    copiedContacts.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.setState({
      contacts: copiedContacts
    })
  }

  sortByPopularity = () => {
    const copiedContacts = [...this.state.contacts];
    copiedContacts.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      contacts: copiedContacts
    })
  }

  deleteContact = (index) => {
    const copiedContacts = [...this.state.contacts];
    copiedContacts.splice(index, 1);
    this.setState({
      contacts: copiedContacts
    })
  }
  
  
  render() {
    const tableContacts = this.state.contacts.map((contact, index) => {
      return (
        <tr key={contact.id}>
          <td>
            <img src={contact.pictureUrl} style={{height: '100px'}} alt="" />
          </td>
          <td>
            <h4>{contact.name}</h4>
          </td>
          <td>
            <h4>{contact.popularity}</h4>
          </td>
          <td>
          <button onClick={() => this.deleteContact(index)}>Delete</button>
          </td>
        </tr>
      );
    })


    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table style={{margin:'auto'}}>
          <thead>
            <tr>
              <th>
                <h3>Picture</h3>
              </th>
              <th>
                <h3>Name</h3>
              </th>
              <th>
                <h3>Popularity</h3>
              </th>
              <th>
                <h3>Action</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableContacts}
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default App;
