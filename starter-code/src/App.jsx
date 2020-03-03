import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

const fiveContacts = contacts.slice(0, 5);

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: fiveContacts
    };
    this.addrandomButton = this.addrandomButton.bind(this);
    this.addsortNameButton = this.addsortNameButton.bind(this);
    this.addsortPopularityButton = this.addsortPopularityButton.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  addrandomButton() {
    const randomButton = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(randomButton);
    this.setState(previousState => ({
      list: [...previousState.list, randomButton]
    }));
  }

  addsortNameButton() {
    const sortNameButton = this.state.list.sort(function(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    console.log(sortNameButton);

    this.setState(previousState => ({
      list: sortNameButton
    }));
  }

  addsortPopularityButton() {
    const sortPopularityButton = this.state.list.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
    console.log(sortPopularityButton);

    this.setState(previousState => ({
      list: sortPopularityButton
    }));
  }

  removeItem(id) {
    this.setState(previousState => ({
      list: previousState.list.filter(item => item.id !== id)
    }));
  }

  render() {
    const list = this.state.list;
    return (
      <div className="App">
        <button onClick={this.addrandomButton}>Random Button</button>
        <button onClick={this.addsortNameButton}>Sort Name Button</button>
        <button onClick={this.addsortPopularityButton}>Sort Popularity Button</button>

        {list.map(contact => (
          <div key={contact.id}>
            <h1>{contact.name}</h1>
            <img src={contact.pictureUrl} alt="ProfilePic"></img>
            <h1>{contact.popularity}</h1>
            <button onClick={() => this.removeItem(contact.id)}>Remove</button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
