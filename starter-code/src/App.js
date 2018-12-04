import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Table from './components/table';

class App extends Component {
  constructor(){
    super()

    this.state = contacts.slice(0,5)
    

  }

  render() {
    return (
      <div className="App">
        <Table {...this.state}/>
      </div>
    );
  }
}

export default App;
