import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ActorsTable from './components/ActorsTable';


class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>IronContacts</h1>
       <ActorsTable></ActorsTable>
      </div>
    );
  }
}

export default App;
