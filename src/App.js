import React from 'react';
import Table from "./Table/Table"
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <Table/>
      </div>
    );
  }
}

export default App;