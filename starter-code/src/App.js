import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Table from "./components/Table";
//console.log(contacts.slice(0,5));

class App extends Component {
  render() { 
    let arreglo = contacts.slice(0,5);
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Table data={arreglo}>
        </Table>
      </div>
    );
  }
}

export default App;
