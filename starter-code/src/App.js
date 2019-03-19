import React, { Component } from 'react';
import './App.css';
import ActorsTable from "./components/ActorsTable"

class App extends Component {


  render() {
    return (
      <main>
          <h1>IronContacts</h1>
        <ActorsTable />
      </main>
    )
  }
}

export default App;
