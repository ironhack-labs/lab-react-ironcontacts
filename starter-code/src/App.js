import React, { Component } from "react";
import "./App.css";
import Contacts from "./contacts.json";
import Contact from "./contact/Contact";

class App extends Component {
  constructor() {
    super();

    this.actors = [...Contacts];
    this.state = {
      actors: this.actors.splice(0, 5)
    };
  }

  render() {
    console.log(this.state.actors);
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {this.state.actors.map(actor => (
              <Contact key={actor.id} name={actor.name} picture={actor.pictureUrl} popularity={actor.popularity}></Contact>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
