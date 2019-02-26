import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table'


class App extends Component {
  render() {
    return (
      <div>
        <h1> IronContacts</h1>
        <Table />
      </div>
    );
  }
}

export default App;
