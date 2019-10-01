import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.splice(0, 5)
    };
  }
  getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  addRandomAct = () => {
    let newContacts = [...this.state.contacts];
    let randomContact = contacts.splice(
      this.getRandomArbitrary(0, contacts.length),
      1
    );
    newContacts.push(randomContact[0]);
    this.setState({ ...this.state, contacts: newContacts });
  };
  sortByName = () => {
    let newActors = [...this.state.contacts];
    let sortedActors = newActors.sort((a, b) => (a.name < b.name ? -1 : 1));
    this.setState({ ...this.state, contacts: sortedActors });
  };
  sortList = () => {
    let newList = [...this.state.contacts];
    let sortedList = newList.sort((a, b) =>
      a.popularity < b.popularity ? 1 : -1
    );
    this.setState({ ...this.state, contacts: sortedList });
  };
  deleteAct = actor => {
    let clonedActList = [...this.state.contacts];
    clonedActList.shift();
    this.setState({
      ...this.state,
      contacts: clonedActList
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <nav>
          <button onClick={() => this.addRandomAct()}>Add Random Actor</button>
          <button onClick={() => this.sortByName()}>sort by name</button>
          <button onClick={() => this.sortList()}>sort by Popularity</button>
        </nav>
        <section>
          <h2>Picture</h2>
          <h2>Name</h2>
          <h2>Popularity</h2>
          
        </section>
        <table className="tableContainer">
          <tbody>
            debugger
            {this.state.contacts.map((actor, idx) => (
              <Contact
                key={idx}
                {...actor}
                delete={() => this.deleteAct(actor)}
              ></Contact>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
