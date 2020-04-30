import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import IronContacts from './IronContacts.jsx';

class App extends Component {

  state = {
    contacts: contacts.slice(0,4)
  }

  // sliceContactsToFive = () => {
  //   const fiveContacts = this.state.contacts.slice(0,4)
  //   this.setState({contacts: fiveContacts})
  // }

  addRandomContact = () => {
    const randomNum = Math.floor(Math.random() * contacts.length - 1)
    const randomContact = this.state.contacts.concat(contacts[randomNum] )
    this.setState({contacts: randomContact})
  }

  sortByName = () => {

    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
    
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }

    this.setState({contacts: this.state.contacts.sort(compare)})
  }

  sortByPopularity = () => {
    this.setState({contacts: this.state.contacts.sort(function (a, b) {return b.popularity - a.popularity})})
  }

  deleteContact = (index) => {
    const state = this.state.contacts
    state.splice(index, 1)
    this.setState({contacts: state})
    // this.setState({contacts: this.state.contacts.splice(index, 1)})
    console.log(index)
  }

  render() {
    
    return (
      <div className="App">
        <h1>IronContacts</h1>
        {/* <button onClick={this.sliceContactsToFive}>Cut to five contacts</button> */}
        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {this.state.contacts.map((contact, index) => (
              <IronContacts key={index}
              name={contact.name}
              pictureUrl={contact.pictureUrl}
              popularity={contact.popularity.toFixed(2)}
              delete={()=> this.deleteContact(index)}
              // delete={this.deleteContact}
              />
            ))}
            </tbody>
        </table>
        
      </div>
    );
  }
}

export default App;
