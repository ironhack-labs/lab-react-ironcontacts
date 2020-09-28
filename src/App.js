import React, { Component } from 'react';
import contactsDB from './contacts.json';
import './App.css';

console.log(contactsDB.length);
const shuffle = (array) => {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

const shuffledContacts = shuffle(contactsDB);
const startingContacts = shuffledContacts.splice(0, 5);
// console.log(shuffledContacts.length);

class App extends Component {

  state = {
    contacts: startingContacts,
    sortAlpha: true,
    sortPop: true
  }

  addRandomContact = () => {
    if (shuffledContacts.length) {
      const copiedContacts = [...this.state.contacts].concat(shuffledContacts.shift());
      console.log(shuffledContacts.length);
      this.setState({
        contacts: copiedContacts
      });      
    } else {
      return
    }
  }

  sortByName = () => {
    const copiedContacts = [...this.state.contacts];
    this.state.sortAlpha 
      ? copiedContacts.sort((a, b) => a.name.localeCompare(b.name)) 
      : copiedContacts.sort((a, b) => b.name.localeCompare(a.name));
    this.setState({
      contacts: copiedContacts,
      sortAlpha: !this.state.sortAlpha,
      sortPop: true
    })
  }

  sortByPopularity = () => {
    const copiedContacts = [...this.state.contacts];
    this.state.sortPop 
      ? copiedContacts.sort((a, b) => b.popularity - a.popularity) 
      : copiedContacts.sort((a, b) => a.popularity - b.popularity);
    this.setState({
      contacts: copiedContacts,
      sortPop: !this.state.sortPop,
      sortAlpha: true
    })
  }

  deleteContact = (index) => {
    const copiedContacts = [...this.state.contacts];
    shuffledContacts.push(copiedContacts.splice(index, 1));
    this.setState({
      contacts: copiedContacts
    });
    console.log('delete', shuffledContacts.length)
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
