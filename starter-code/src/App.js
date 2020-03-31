import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import contacts from './contacts.json';

class App extends Component {
  state = {
    ironContacts: contacts,
    showedContacts: contacts.slice(0, 5),
  };

  randomContact = () => {
    let contactsCopy = [...this.state.showedContacts];
    contactsCopy.push(
      this.state.ironContacts[
        Math.floor(Math.random() * this.state.ironContacts.length)
      ]
    );
    this.setState({ showedContacts: contactsCopy });
  };

  sortContactName = () => {
    let sortCopy = this.state.showedContacts.sort(function(a, b){
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x < y) {return -1}
      if (x > y) {return 1}
      return 0;
    })
    this.setState({
      contacts: sortCopy
    })
  }

  sortPopularity = () => {
    let sortPopularityCopy = this.state.showedContacts.sort(function (a, b) {
      let x = a.popularity;
      let y = b.popularity;
      if (x < y) { return -1 }
      if (x > y) { return 1 }
      return 0;
    })
    this.setState({
      contacts: sortPopularityCopy
    })
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>IronContacts</h1>
        </div>
        <button onClick={this.randomContact}>Add Random Contact!</button>
        <button onClick={this.sortContactName}>Sort by Name</button>
        <button onClick={this.sortPopularity}>Sort by Popularity</button>
        <div className="App-description">
          <h2>Picture</h2>
          <h2>Name</h2>
          <h2>Popularity</h2>
        </div>
        <div className="App-cards">
          {this.state.showedContacts.map(card => (
            <Card
              name={card.name}
              pictureUrl={card.pictureUrl}
              popularity={card.popularity}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
