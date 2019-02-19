/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table.js';
import contacts from './contacts.json';
import Button from './Button.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      actors: contacts.splice(0, 5)
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(obj) {
    this.setState({
      actors: obj
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>
        <Button actors={this.state.actors} updateState={this.updateState} isAdd name="Add Random Contact" />
        <Button actors={this.state.actors} updateState={this.updateState} isName name="Sort by Name" />
        <Button actors={this.state.actors} updateState={this.updateState} isPop name="Sort by Popularity" />
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          <Table actors={this.state.actors} updateState={this.updateState} />
        </table>
      </div>
    );
  }
}

export default App;
