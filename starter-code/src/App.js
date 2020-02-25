import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    contactList: contacts.slice(0,5)
  };

  addRandomContact = () => {
    let selectRandom = contacts.filter(contact => {
      let availableContact = true;
      this.state.contactList.forEach(oneContact => {
       if (contact.name === oneContact.name){
         availableContact = false;
       }
     })
     return availableContact;
    })

    let pickRandom = selectRandom[Math.floor(Math.random() * selectRandom.length)]
    let updatedList = this.state.contactList
    updatedList.push(pickRandom)
    this.setState({
      contactList: updatedList
    })
  }

  sortByPopularity = () => {
    let fullContactList = this.state.contactList
    //let rating = this.state.contactList.id.popularity

    let sortedList = fullContactList.sort( (a, b) => {
      return a.popularity - b.popularity
    })   
    this.setState({
      contactList: sortedList
    })
  }
  
  sortByName = () => {
    let fullContactList = this.state.contactList
    let sortedNameList = fullContactList.sort( function compare(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      // a must be equal to b
      return 0;
    })
    this.setState({
      contactList: sortedNameList
    })
}

  deleteContact = (contactId) => {
    let listToUpdate = this.state.contactList;
    let updatedList = listToUpdate.filter( (contactObj) => {
      return (contactObj.id !== contactId)
    })
    this.setState({
      contactList: updatedList
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <button onClick={this.sortByName}>Sort by name</button>

        <table>
          <tr>
          <th><strong>Ironcontacts</strong></th>
          <th><strong>Name</strong></th>
          <th><strong>Popularity</strong></th>
          </tr>
          <tbody>
          {this.state.contactList.map((contactObj) => {
            return (
            <tr key={contactObj.id}>
              
            <td>
              <img src={contactObj.pictureUrl} height="200" width="auto" alt=""/>
              </td>
            <td>{contactObj.name}</td>
            <td>{contactObj.popularity}</td>
            <button onClick={() => this.deleteContact(contactObj.id)}>Delete contact</button>
            </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
