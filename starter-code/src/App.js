import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Table from './components/table/Table.js'
import Button from './components/button/Button.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    }
    this.updateState = this.updateState.bind(this);
  }
  
  updateState(obj) {
    this.setState({
      contacts: obj
    })
  }
  
  
  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <Button name='Add Random Contact' updateState={this.updateState} actors={this.state.contacts} isAdd />
        <Button name='Sort by Name' updateState={this.updateState} actors={this.state.contacts} isName />
        <Button name='Sort by Popularity' updateState={this.updateState} actors={this.state.contacts} isPop />
        <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <Table contacts={this.state.contacts} updateState={this.updateState}/>
        </table>
      </div>
    );
  }
}

export default App;
