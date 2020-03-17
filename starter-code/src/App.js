import React, { Component } from "react";
// eslint-disable-next-line
import actors from "./contacts.json";
import "./App.css";
import Contacts from "./components/contacts";

const constActors = [...actors];

class App extends Component {
  state = {
    constActors,
    actors: [...constActors].slice(0, 5)
  };

  addRandomContact = (e) => {
    const { actors, constActors } = this.state;
    const currentActorsIds = [...actors].map(actor => actor.id);
    const restActors = [...constActors].filter(actor => !currentActorsIds.includes(actor.id));
    let randomActor = restActors[Math.floor(Math.random() * restActors.length)];
    console.log(randomActor);
    const copyActors = [...actors, randomActor];
    this.setState({
      actors: copyActors
    })
  }

  sortByName = (e) => {
    const { actors } = this.state;
    const sortedActors = [...actors].sort((a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
    this.setState({
      actors: sortedActors
    })
  }

  sortByPopularity = (e) => {
    const { actors } = this.state;
    const sortedActors = [...actors].sort((a,b) => a.popularity > b.popularity ? 1 : a.popularity < b.popularity ? -1 : 0);
    this.setState({
      actors: sortedActors
    })
  }

  deleteContact = (e) => {
    const { actors } = this.state;
    const filteredActors = [...actors].filter(actor => actor.id !== e.target.id);
    this.setState({
      actors: filteredActors
    })
  }

  render() {
    const { actors } = this.state;
    return (
      <div className="App">
        <Contacts actors={actors} addRandomContact={this.addRandomContact} sortByName={this.sortByName} sortByPopularity={this.sortByPopularity} deleteContact={this.deleteContact}/>
      </div>
    );
  }
}

export default App;