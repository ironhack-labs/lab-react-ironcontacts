import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Actors from "./Actors"

const allContacts = contacts
class App extends Component {
  
  state = {
    actors: [allContacts[0],allContacts[1],allContacts[2],allContacts[3],allContacts[4]] // allContacts works by itself
  }

  randomRow = () => {
    let newActorsList = [...this.state.actors]
    let random = Math.floor(Math.random()*199)
    newActorsList.push(allContacts[random])
    this.setState({
      actors: newActorsList
    })
  }

  sortByName = () => {
    let newActorsList = [...this.state.actors].sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
    this.setState({
      actors: newActorsList
    })

  }

  sortByPopularity = () => {
    let newActorsList = [...this.state.actors].sort(function(a, b){
      if(a.popularity < b.popularity) { return 1; }
      if(a.popularity > b.popularity) { return -1; }
      return 0;
    })
    this.setState({
      actors: newActorsList
    })

  }

  render() {
    return (
      <div className="App">

        <Actors
          
          actorProps    = { this.state.actors } 
          randomProp    = {this.randomRow}
          sortNameProp  = {this.sortByName}
          sortPopProp   = {this.sortByPopularity}
        
        />

      </div>
    );
  }
}

export default App;

