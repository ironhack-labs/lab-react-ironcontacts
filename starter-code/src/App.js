import React, { Component } from 'react';
import './App.css';
// import Text from './Text';
// import Nav from './Nav';
// import Button from './Button';
import Card from './components/Card';
import contacts from './contacts.json';

class App extends Component {
  state = {
    ironContacts: contacts,
    showedContacts: contacts.slice(0, 5),
    // random: contacts[Math.floor(Math.random() * contacts.length)]
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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>IronContacts</h1>
        </div>
        <button onClick={this.randomContact}>Add Random Contact!</button>
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
