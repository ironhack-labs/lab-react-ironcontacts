import React, { Component } from 'react';
import './App.css';

import Contacts from './components/Contacts';
import contacts from './contacts.json';

class App extends Component {
  constructor(props){
    super(props);
    let contactList = [...contacts];
    let displayedList = contactList.splice(0, 5);
    this.state = {
      displayedList: displayedList
    };
  }

  addContactBtn = () => {
    let displayedListCopy = [...this.state.displayedList];
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    displayedListCopy.push(randomContact);
    this.setState({
      displayedList: displayedListCopy
    })
  }

  sortByNameBtn = () => {
    let displayedListCopy = [...this.state.displayedList];
    function compare (a, b) {
      let nameA = a.name;
      let nameB = b.name;
      let comparaison = 0;
      nameA > nameB ? comparaison = 1 : comparaison = -1;
      return comparaison;
    }
    displayedListCopy.sort(compare);
    this.setState({
      displayedList: displayedListCopy
    })
  }

  sortByNameBtn = () => {
    let displayedListCopy = [...this.state.displayedList];
    function compare (a, b) {
      let nameA = a.name;
      let nameB = b.name;
      let comparaison = 0;
      nameA > nameB ? comparaison = 1 : comparaison = -1;
      return comparaison;
    }
    displayedListCopy.sort(compare);
    this.setState({
      displayedList: displayedListCopy
    })
  }

  sortByPopularityBtn = () => {
    let displayedListCopy = [...this.state.displayedList];
    function compare (a, b) {
      let popularityA = a.popularity;
      let popularityB = b.popularity;
      let comparaison = 0;
      popularityA > popularityB ? comparaison = 1 : comparaison = -1;
      return comparaison;
    }
    displayedListCopy.sort(compare);
    this.setState({
      displayedList: displayedListCopy
    })
  }
    
  render() {
      return (
          <div className="App">
            <h1>IronContacts</h1>
            <div className="buttons">
              <button onClick = {this.addContactBtn}>Add Random Contact</button>
              <button onClick = {this.sortByNameBtn}>Sort by name</button>
              <button onClick = {this.sortByPopularityBtn}>Sort by popularity</button>
            </div>
            <Contacts 
              contacts = {this.state.displayedList}/>
          </div>
      );
  }
}

export default App;
