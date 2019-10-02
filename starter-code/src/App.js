import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Actor from "./Actor";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }
  randomActor() {
    let oneActor = contacts[randomInt(0, contacts.length)];
    let oneMoreActor = [...this.state.contacts];
    if (oneMoreActor.forEach((actor)=>{
      console.log(oneActor.name)
      // actor.name === oneActor.name
    })) {
      oneActor = contacts[randomInt(0, contacts.length)];
    }
    
    oneMoreActor.unshift(oneActor);
    this.setState({
      ...this.state,
      contacts: oneMoreActor
    });
  }

  sortByName() {
    this.setState({
      ...this.state,
      contacts: this.state.contacts.sort((a, b) => {
        if (a.name > b.name) return 1;
        return -1;
      })
    });
  }

  sortByPopularity() {
    this.setState({
      ...this.state,
      contacts: this.state.contacts.sort((a, b) => {
        if (a.popularity > b.popularity) return -1;
        return 1;
      })
    });
  }

  delete(actor) {
    this.setState({
      ...this.state,
      contacts: this.state.contacts.filter(contact => contact !== actor)
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="buttons">
        <button onClick={() => this.randomActor()}>Add an actor</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
        </div>
        <div className="table-container">
        <table>
           
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
           
          <tbody>
            {this.state.contacts.map((actor, i) => (
              <Actor key={i} {...actor} delete={() => this.delete(actor)} />
            ))}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default App;
