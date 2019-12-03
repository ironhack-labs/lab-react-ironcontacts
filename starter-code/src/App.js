import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact";

class App extends Component {
  constructor() {
    super();

    this.actorsArr = [...contacts];
    this.state = {
      currentActors: this.actorsArr.splice(0, 5)
    };
  }

  addRandom = () => {
    const randomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    let newActor = this.actorsArr.splice(
      randomInt(0, this.actorsArr.length - 1),
      1
    )[0];
    this.state.currentActors.push(newActor);
    this.setState({ ...this.state, currentActors: this.state.currentActors });
  };
  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.currentActors.map(actor => (
              <Contact
                key={actor.id}
                name={actor.name}
                pictureUrl={actor.pictureUrl}
                popularity={actor.popularity.toFixed(2)}
              ></Contact>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
