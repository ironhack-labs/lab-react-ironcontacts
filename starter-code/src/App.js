import React, { Component } from 'react';
import Table from "./components/Table";
import contacts from './contacts.json';
import './App.css';

class App extends Component {
  state = {
    arreglo: contacts.slice(0,5)
  }

  AddContactHandler = () => {
    let x0 = 5;
    let xf = contacts.length;
    let idx = x0 + Math.floor(Math.random() * (xf - x0));
    let newContact = contacts[idx];
    this.setState({
      arreglo: this.state.arreglo.concat([newContact])
    });
  };

  render() { 
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.AddContactHandler} >Add Random Contact</button>
        <Table data={this.state.arreglo}/>
      </div>
    );
  }
}

export default App;
