import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./contact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.splice(0, 5),
      classRow: "active"
    };
  }
  random(max) {
    return Math.floor(Math.random() * max);
  }

  addRandomContact() {
    let randomContact = contacts.filter(contact=> {
      if(this.state.contacts.includes(contact)) {
          return false
      }
      else {
        return true
      }
    })[this.random(contacts.length-1)];
    if(!randomContact) return; 

    let contactPlusRandom = [randomContact, ...this.state.contacts];
    this.setState({
      ...this.state,
      contacts: contactPlusRandom
    });
  }

  sortName() {
    this.state.contacts.sort((a,b)=> 
     a.name > b.name? 1: -1
    )
    this.setState({
      ...this.state,
    });
  }
  sortPopularity() {
    this.state.contacts.sort((a,b) => 
      a.popularity > b.popularity? 1 : -1
    )
    this.setState({
      ...this.state,
    });
  }

  deleteMe (btn) {
    let newContacts = [...this.state.contacts.slice(0, btn), ...this.state.contacts.slice(btn+1, this.state.contacts.length)];
    setTimeout(() => {
      this.setState({
        ...this.state,
        classRow : "active deleted",
        contacts : newContacts
      });
    }, 1000);
    
  }

  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <div className="buttons-container">
        <button onClick={() => this.addRandomContact()}>
          ADD RANDOM CONTACT
        </button>
        <button onClick={() => this.sortName()}>SORT BY NAME</button>
        <button onClick={() => this.sortPopularity()}>SORT BY POPULARITY</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((actor, idx) => (
              <Contact key={idx} className={this.state.classRow} {...actor} delete={()=> this.deleteMe(idx)}></Contact>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
