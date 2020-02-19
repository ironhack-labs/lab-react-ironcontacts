import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import CelebDetails from './components/CelebDetails';

export default class App extends Component {

  state = {
    allContacts: contacts,
    displayedContacts: contacts.splice(0,5),
    remainingContacts: contacts
  }

  // ===== ADD RANDOM CONTACT =====

  randomAdd = () => {
    let randomNum = Math.floor(Math.random() * Math.floor(this.state.remainingContacts.length));
    let randomContact = this.state.remainingContacts[randomNum];

    this.setState({
      displayedContacts: [...this.state.displayedContacts, randomContact],
      remainingContacts: [...this.state.remainingContacts].filter((element,index)=> index !== randomNum)
    });
  }

  // ===== SORT CONTACT =====

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


  // ===== REMOVE CONTACT =====


  
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        {/* <div className="buttons">
          <button onClick={this.randomAdd}>Add random contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div> */}
        
        <table>
          <thead>
            <tr className="buttons">
              <th><button onClick={this.randomAdd}>Add random contact</button></th>
              <th><button onClick={this.sortByName}>Sort by name</button></th>
              <th><button onClick={this.sortByPopularity}>Sort by popularity</button></th>
            </tr>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.displayedContacts.length ?
              (this.state.displayedContacts.map((contact, i) => (
                <CelebDetails 
                  celeb={contact}
                  i={i}
                  key={i}
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
