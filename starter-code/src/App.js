import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import contacts from './contacts.json';

class App extends Component {
constructor(){ 
  super();
    this.removeCelebrity = this.removeCelebrity.bind(this);
}

  state = {
    ironContacts: contacts,
    contactsShown: contacts.slice(0, 5),
    index: 0
  };

  removeCelebrity(celebrityIndex){
    let celebrityCopy = [...this.state.contactsShown];
    celebrityCopy.splice(celebrityIndex, 1)
    this.setState({contactsShown: celebrityCopy})
  }

  randomContact = () => {
    let contactsCopy = [...this.state.contactsShown];
    contactsCopy.push(
      this.state.ironContacts[
        Math.floor(Math.random() * this.state.ironContacts.length)
      ]
    );
    this.setState({ contactsShown: contactsCopy });
  };

  sortContactName = () => {
    let sortCopy = this.state.contactsShown.sort(function(a, b){
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
    let sortPopularityCopy = this.state.contactsShown.sort(function (a, b) {
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
          {this.state.contactsShown.map((celebrity, index) => (
            <Card
              celebrityIndex={index}
              deleteCelebrity={this.removeCelebrity}
              name={celebrity.name}
              pictureUrl={celebrity.pictureUrl}
              popularity={celebrity.popularity}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
