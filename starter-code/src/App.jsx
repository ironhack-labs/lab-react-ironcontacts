import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Celebs from './components/celebs';
import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
    };
    this.indexPosition = 0;
    this.addName = this.addName.bind(this);
    this.addRandom = this.addRandom.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.addName}> add name</button>
          <button onClick={this.addRandom}>add random</button>
          <button onClick={this.sortByName}>sort by naim</button>
          <button onClick={this.sortByPopularity}>sort by popularity</button>
        </header>
        <div className="whole">
          {this.state.names.map(each => {
            return <Celebs contacts={each} delete={this.deleteOne} />;
          })}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  addName() {
    let index = this.indexPosition;
    if (!this.state.names.includes(contacts[index])) {
      let names = [...this.state.names, contacts[index]];
      this.setState({
        names
      });
      this.indexPosition = this.indexPosition + 1;
    } else {
      this.indexPosition = this.indexPosition + 1;
      this.addName();
    }
  }

  addRandom() {
    let randomNumber = Math.floor(Math.random() * 199);
    if (!this.state.names.includes(contacts[randomNumber])) {
      let names = [...this.state.names, contacts[randomNumber]];

      this.setState({
        names
      });
    } else {
      this.addRandom();
    }
  }

  sortByName() {
    let sortName = [...this.state.names];
    sortName = sortName.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({
      names: sortName
    });
  }

  sortByPopularity() {
    let sortPop = [...this.state.names];
    sortPop = sortPop.sort((a, b) => (a.popularity > b.popularity ? -1 : 1));
    this.setState({
      names: sortPop
    });
  }

  deleteOne(index) {
    console.log(index);
    let toDelete = this.state.names;
    let indexToDelete = toDelete.indexOf(index);
    console.log(indexToDelete);
    toDelete.splice(indexToDelete, 1);
    this.setState({
      names: toDelete
    });
  }
}

export default App;
