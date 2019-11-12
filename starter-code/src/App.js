import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/table-component/table';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Table/>
      </div>
    );
  }
}

export default App;
