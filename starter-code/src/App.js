import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [...contacts].slice(0, 5)
      // visible: true
    };
  }

  addRandomContact() {
    let updateActors = [...contacts].filter(
      actor => !this.state.list.includes(actor)
    );
    this.state.list.push(
      updateActors[Math.floor(Math.random() * updateActors.length)]
    );
    this.setState({
      ...this.state.list
    });
  }

 
  sortByName() {
    this.state.list.sort((a,b) =>  (a.name > b.name) ? 1:-1)
    
    this.setState({
      ...this.state.list
    });
  }

  sortByPop(){
    this.state.list.sort((a,b) =>  (a.popularity < b.popularity) ? 1:-1)
    
    this.setState({
      ...this.state.list
    });
  }

  deleteACtor(){
    console.log("prueba")
    
  }
  render() {
    return (
      <div>
        <button onClick={() => this.addRandomContact()}>
          Add Random Contact
        </button>
        <button onClick={() => this.sortByName()}>Sort By Name</button>
        <button onClick={() => this.sortByPop()}>Sort By Popularity</button>
        <Contacts listado={this.state.list} delete={this.deleteActor}/>
      </div>
    );
  }
}

export default App;
