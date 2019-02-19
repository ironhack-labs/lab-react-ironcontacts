import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Table from './components/table/Table';
import Button from './components/button/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      actors: contacts.slice(0, 5)
    };
    this.updateState = this.updateState.bind(this);
  }
  
  updateState(obj){
    this.setState({
      actors: obj
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Button 
        actors={this.state.actors} updateState={this.updateState} isAdd name="Add Random Contact" 
        />
        <Button 
        actors={this.state.actors} updateState={this.updateState} isName name="Sort by Name" 
        />
        <Button 
        actors={this.state.actors} updateState={this.updateState} isPop name="Sort by Popularity" 
        />
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        <Table
          actors={this.state.actors} updateState={this.updateState}
        />
        </table>
      </div>
    );
  }
}

export default App;
