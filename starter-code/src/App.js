import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";




class App extends Component {

  state = {
    contactsList: contacts.slice(0, 5)
  };

addRandomContact = () => {
  let selectRandom = contacts.filter(contact=> {
      let availableContact = true;
     this.state.contactsList.forEach(oneContact => {
      if (contact.name === oneContact.name) {
        availableContact = false;
      }
    })
    return availableContact;
  })
console.log('selectRandom.length', selectRandom.length);
console.log('contacts.length', contacts.length)
let pickRandom = selectRandom[Math.floor(Math.random() * selectRandom.length)]
console.log(pickRandom);

let updatedList = this.state.contactsList
updatedList.push(pickRandom);
console.log('updatedList', updatedList
this.setState( { contactsList: updatedList } );
}

sortByPopularity = () => {
  let fullContactList = this.state.contactsList

  let sortedList = fullContactList.sort(  (a, b) => {
    return a.popularity - b.popularity
  })
  this.setState({
    contactList: sortedList
  })
}

sortByName = () => {
    let fullContactList = this.state.contactsList
    let sortedNameList = fullContactList.sort(function compare(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if(a.name > b.name) {
        return 1;
      }
      return 0;
    })
    this.setState({
      contactList: sortedNameList
    })
}

deleteContact = (contactId) => {
      let fullContactList = this.state.contactsList
      let updatedList = fullContactList.filter( (contactObj) => {
        return (contactObj.id !== contactId)
      })
      this.setState({
        contactList:updatedList
      })
}



  render() {
    return (
      <div className="App">
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <button onClicl={this.sortByName}>Sort By Name</button>
        <table>
          <tr>
            <th>
              <strong>Ironcontacts</strong>
            </th>
            <th>
              <strong>Name</strong>
            </th>
            <th>
              <strong>Popularity</strong>
            </th>
          </tr>
          <tbody>
            {this.state.contactsList.map((contactObj) => {
              return (
                <tr key={contactObj.id}>
                  <td>
                    <img
                      src={contactObj.pictureUrl}
                      height="200"
                      width="auto"
                      alt=""
                    />
                  </td>
                  <td>{contactObj.name}</td>
                  <td>{contactObj.popularity}</td>
                  <button onClick= { () => this.deleteContact(contactObj.id)}>Delete contact</button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
