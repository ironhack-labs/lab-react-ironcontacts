import React, { Component } from 'react';
import Table from "./components/Table";
import contacts from './contacts.json';
import './App.css';

class App extends Component {
  state = {
    arreglo: contacts.slice(0,5)
  }

  render() { 
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Table data={this.state.arreglo}/>
      </div>
    );
  }
}

export default App;
