import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      famous: contacts.slice(0, 5)
    };
    this.addRandom = this.addRandom.bind(this);
  }

  addRandom() {
    const choosed = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState(previousState => ({
      famous: [...previousState.famous, choosed]
    }));
  }
  sort() {
    function dynamicSort(property) {
      var sortOrder = 1;
      if (property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
      }
      return function(a, b) {
        var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
        return result * sortOrder;
      };
    }

    console.log(this.state.famous);
    this.setState(previousState => ({
      famous: [...previousState.famous].sort(dynamicSort('name'))
    }));
  }

  sortPopularity() {
    function dynamicSort(property) {
      var sortOrder = 1;
      if (property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
      }
      return function(a, b) {
        var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
        return result * sortOrder;
      };
    }
    this.setState(previousState => ({
      famous: [...previousState.famous].sort(dynamicSort('popularity'))
    }));
  }

  removeItem(id) {
    this.setState(previousState => ({
      famous: previousState.famous.filter(item => item.id !== id)
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>
        <button onClick={() => this.addRandom()}>Add Random</button>
        <button onClick={() => this.sort()}>Sort by Name</button>
        <button onClick={() => this.sortPopularity()}>Sort by Popularity</button>
        <section className="col">
          <div className="row">
            <h3>Picture</h3>
            <h3>Name</h3>
            <h3>Popularity</h3>
          </div>
          {this.state.famous.map(item => {
            return (
              <div key={item.id} className="row celebrity">
                <img src={item.pictureUrl} />
                <div className="row text">
                  <h4>{item.name}</h4>
                  <h4>{Number(Math.round(item.popularity * 100) / 100)}</h4>
                </div>
                <button key={item.id} className="erase" onClick={() => this.removeItem(item.id)}>
                  x
                </button>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;
