import React, { Component } from 'react';
import Table from "./components/Table";
import contacts from './contacts.json';
import './App.css';

class App extends Component {
  state = {
    arreglo: contacts.slice(0,5)
  }

  addContactHandler = () => {
    let x0 = 5;
    let xf = contacts.length;
    let idx = x0 + Math.floor(Math.random() * (xf - x0));
    let newContact = contacts[idx];
    this.setState({
      arreglo: this.state.arreglo.concat([newContact])
    });
  };

  sortByNameHandler = () => {
    let newArray = this.state.arreglo.slice().sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    })

    this.setState({
      arreglo: newArray
    })
  };

  render() { 
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addContactHandler} >Add Random Contact</button>
        <button onClick={this.sortByNameHandler} >Sort by name</button>
        <Table data={this.state.arreglo}/>
      </div>
    );
  }
}

export default App;
