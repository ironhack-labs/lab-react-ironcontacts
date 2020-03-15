import React, { Component } from "react";
// eslint-disable-next-line
import actors from "./contacts.json";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";

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
    const copyActors = [...actors];
    copyActors.push(randomActor);
    this.setState({
      actors: copyActors
    })
  }

  render() {
    const { actors } = this.state;
    return (
      <div className="App">
        <Contacts actors={actors} addRandomContact={this.addRandomContact}/>
      </div>
    );
  }
}

export default App;
