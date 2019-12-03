import React, { Component } from "react";
import "./App.css";
import Contacts from "./contacts.json";
import Contact from "./contact/Contact";

class App extends Component {
  constructor() {
    super();
    this.randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    
    this.actors = [...Contacts]
    this.actorsInit = this.actors.splice(0, 5)
    
    this.state = {
      contacts: this.actorsInit,
    }
  }

  addRandom() {
    let randomNumber = this.randomInt(0,this.actors.length-1)
    this.actorsInit.push(this.actors[randomNumber])
    
    this.actors = this.actors.filter(contact => !this.actorsInit.includes(contact));
    
    this.setState({
      ...this.state,
      contacts: this.actorsInit,
    })
  }


  sortByName() {
    this.actorsInit.sort((a,b) => {
      return a.name.localeCompare(b.name);
    })

    console.log(this.actorsInit)
    this.setState({
      ...this.state,
      contacts: this.actorsInit,
    })
  }


  sortByPopularity() {
    this.actorsInit.sort((a,b) => {
      return a.popularity - b.popularity;
    })

    this.setState({
      ...this.state,
      contacts: this.actorsInit,
    })
  }

  render() {
    console.log(this.state.contacts);
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <button onClick={() => this.addRandom()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {this.state.contacts.map(contact => (
              <Contact key={contact.id} name={contact.name} picture={contact.pictureUrl} popularity={contact.popularity}></Contact>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
