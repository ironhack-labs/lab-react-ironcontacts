import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./components/contacts";
// import addRando from "./components/randos";

class App extends Component {
  state = {
    contactos: contacts.slice(0, 5)
  };
  addRando = () => {
    let indexRandom = Math.floor(
      Math.random() * Object.keys(contacts).length + 4
    );
    const contactsArr = this.state.contactos;
    contactsArr.unshift({ ...contacts[indexRandom] });
    this.setState({ contactos: contactsArr });
  };
  sortByName = () => {
    let sortedByName = this.state.contactos.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({ contactos: sortedByName });
  };
  sortByPopularity = () => {
    let sortedByPopularity = this.state.contactos.sort(
      (a, b) => b.popularity - a.popularity
    );
    this.setState({ contactos: sortedByPopularity });
  };
  deleteRow = index => {
    const contactsArr = this.state.contactos;
    contactsArr.splice(index, 1);
    this.setState({ contactos: contactsArr });
  };

  render() {
    return (
      <div className="App">
        <h1>Actors</h1>
        <button onClick={this.addRando}>Add Rando</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <button onClick={this.deleteRow}>Delete Row</button>

        {Object.keys(this.state.contactos).map((contactos, i) => (
          <Contact key={i} info={this.state.contactos[i]} />
        ))}
        <table />
      </div>
    );
  }
}
export default App;
