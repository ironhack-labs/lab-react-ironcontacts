import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import IronContacts from './ironContacts/ironContacts'
import ironContacts from './ironContacts/ironContacts';


class App extends Component {
  constructor() {
    super();
    this.contacts = [...contacts]
    this.fiveContacts = this.contacts.splice(0, 5);
    this.state = {
      actors: this.fiveContacts
    }
  }

  randomContacts() {
    let otherContacts = this.contacts.filter((contact) => !this.state.actors.includes(contact))
    this.state.actors.push(otherContacts[Math.floor(Math.random() * otherContacts.length)])
    this.setState({
      ...this.state.actors
    })
  }


  sortByName() {
    this.state.actors.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;

    })
    this.setState({
      ...this.state.actors
    })
  }


  sortByPopularity() {
    this.state.actors.sort(function (a, b) {
      if (a.popularity < b.popularity) { return 1; }
      if (a.popularity > b.popularity) { return -1; }
      return 0;

    })
    this.setState({
      ...this.state.actors
    })
  }





  render() {
    return (
      <div className="App">
        <button onClick={() => this.randomContacts()}>Add Random Actor</button>
        <button onClick={() => this.sortByName()}>Sort by Name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by Popularity</button>

        {this.state.actors.map((actor, idx) =>
          <IronContacts name={actor.name} img={actor.pictureUrl} popularity={actor.popularity} key={idx} ></IronContacts>
        )}

      </div>
    );
  }
}

export default App;
