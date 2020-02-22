import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import CelebDetails from './components/CelebDetails';

export default class App extends Component {

  state = {
    // allContacts: contacts,
    displayedContacts: contacts.slice(0,5),
    remainingContacts: contacts
  }

  // ===== ADD RANDOM CONTACT =====

  randomAdd = () => {
    let randomNum = Math.floor(Math.random() * Math.floor(this.state.remainingContacts.length - 5)) + 5;
    let randomContact = this.state.remainingContacts[randomNum];

    this.setState({
      displayedContacts: [...this.state.displayedContacts, randomContact],
      remainingContacts: [...this.state.remainingContacts].filter((element,index)=> index !== randomNum)
    });
  }

  // ===== SORT CONTACTS =====

  sortByName = () => {
    this.setState({
      displayedContacts: [...this.state.displayedContacts].sort((a,b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      })
    })
  }


  sortByPopularity = () => {
    this.setState({
      displayedContacts: [...this.state.displayedContacts].sort((a,b) => {
        if (a.popularity > b.popularity) return -1;
        if (a.popularity < b.popularity) return 1;
        return 0;
      })
    })
  }

  // ===== DELETE CONTACT =====

  deleteContact = index => {
    this.setState({
      displayedContacts: this.state.displayedContacts.filter((el,i) => i !== index) 
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr className="buttons">
              <th><button class="btn btn-add" onClick={this.randomAdd}>Add random contact</button></th>
              <th><button class="btn btn-sort" onClick={this.sortByName}>Sort by name</button></th>
              <th><button class="btn btn-sort" onClick={this.sortByPopularity}>Sort by popularity</button></th>
            </tr>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.displayedContacts.length ?
              (this.state.displayedContacts.map((contact, i) => (
                <CelebDetails 
                  celeb={contact}
                  i={i}
                  key={i}
                  handleDelete = {this.deleteContact}
                />
              ))) : (
                <tr> No contacts yet</tr>
              )   
            }
          </tbody>
        </table>
      </div>
    );
  }
}
