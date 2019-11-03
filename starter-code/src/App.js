import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import initial_conditions from "./utils/contactsLogic.js"
import Table from "../src/components/Table.js"

class App extends Component {
  state = {
    initial_conditions
  }

  render() {
    console.log(this.state.initial_conditions)
    let stateCopy = { ...this.state }
    return (
      <div className="App">
        <div className="main-container">
          <h1>Iron Contacts</h1>
          <Table contacts={stateCopy.initial_conditions} />
        </div>

      </div>
    );
  }
}

export default App;
