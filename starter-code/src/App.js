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

  
  
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.randomAdd}>Add random contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
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
