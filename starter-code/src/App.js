import React, { Component } from 'react';
import Table from "./components/Table";
import contacts from './contacts.json';
import './App.css';

class App extends Component {
  render() { 
    let arreglo = contacts.slice(0,5);
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Table data={arreglo}/>
      </div>
    );
  }
}

export default App;
