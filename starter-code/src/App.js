import React, { Component } from "react";
import "./App.css";
import ContactTable from "./components/ContactTable/ContactTable";
import contacts from './contacts.json'
import FunctionButton from "./components/FunctionButton/FunctionButton";


class App extends Component {
  state = {
    list: contacts.slice(0, 5)
  }
  addRandomContact = () => {
    let newState = {
      ...this.state
    }
    newState.list.push(contacts[Math.floor(Math.random()* contacts.length)])
    this.setState(newState)
  }

  sortByName = () => {
    let newState = {
      ...this.state
    }
    newState.list.sort((a, b)=>{
      if(a.name < b.name){return -1;}
      if(a.name > b.name){return 1;}
      return 0;
    })
    this.setState(newState)
  }

  sortByPopularity = () => {
    let newState = {
      ...this.state
    }
    newState.list.sort((a, b) => b.popularity - a.popularity)
    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="controller"></div>
        <FunctionButton functionProp={this.addRandomContact}>Add Random Contact</FunctionButton>
        <FunctionButton functionProp={this.sortByName}>Sort by name</FunctionButton>
        <FunctionButton functionProp={this.sortByPopularity}>Sort by popularity</FunctionButton>
        <ContactTable contactsProp={this.state.list}/> 
      </div>
    );
  }
}

export default App;

 // constructor() {
  //   super(); //este es el padre
  //   this.state = {
  //     contacts: contacts.slice(0, 5)
  //   };
  // }

  // <ContactTable contacts={this.state.contacts}/> Entre llaves es la forma de pasar las propiedades. Le pasamos el objeto state que ahora es un array de 5.