import React, { Component } from "react";
import "./App.css";
import Contacts from "./contacts.json";
import Contact from "./contact/Contact";

class App extends Component {
  constructor() {
    super();
    this.actors = [...Contacts];
    this.actorsIni = this.actors.splice(0, 5)
    this.actorsRest = this.actors.splice(5)
    
    this.state = {
      contacts: this.actorsIni
    };
  }

  addRandom(){
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);  
   
    let contactsCopy = [...this.state.contacts]
    contactsCopy.push(this.actorsRest[randomInt(0, this.actorsRest.length -1)])
    
    this.setState({
      contacts : contactsCopy
    });
  }

  render() {
    console.log(this.state.contacts);
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <button onClick={() => this.addRandom()}>Add Random Contact</button>
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
