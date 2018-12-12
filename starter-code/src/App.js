import React, { Component } from 'react';
import logo from './logo.svg';
import contacts from './contacts.json'
import Table from './components/Table'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

export default App;
