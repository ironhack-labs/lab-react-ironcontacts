import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Datos from './components/Datos';
import Selection from './components/Selection';

class App extends Component {
  state = {
    contactsArr: contacts.slice(0, 5)
  }
  
  handleClick = (e) => {
    const { contactsArr } = this.state
    let random = Math.floor((Math.random() * (contacts.length - 5) + 5));

    if (e.target.name === 'rand') {
      if(!contactsArr.includes(contacts[random])){
        contactsArr.push(contacts[random])
      } 
    }
    else if (e.target.name === 'sortname') {
      contactsArr.sort((a, b) => {
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1
        }
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1

        }
        return 0
      })
    }
    else if (e.target.name === 'sortpopularity') {
      contactsArr.sort((a, b) => {
        if (a.popularity < b.popularity) {
          return -1
        } else {
          return 1
        }
      })
    }
    else if (e.target.name === 'delete') {
      const i = e.target.value
      const { contactsArr } = this.state
      contactsArr.splice(i, 1);
    }
    this.setState({ contactsArr })
  }

  render() {
    return (
      <div className="App">
        <Selection handleClick={this.handleClick} />
        <table >
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          <Datos deleteContact={this.deleteContact} contactsArr={this.state.contactsArr} handleClick={this.handleClick} />
        </table >
      </div>

    );
  }
}
export default App;

/* deleteContact = i => {
    const { contactsArr } = this.state
    const arr = ['juan', 'isma']
    contactsArr.splice(i, 1);
  } */