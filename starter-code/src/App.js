import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import ContactsDisplayer from "./ContactsDisplayer";

class App extends Component {
  constructor() {
    super();

    this.state = { rndContacts: this.getRandomContacts(5) };
  }
  getRandomContacts(qty) {
    // Shuffle contacts

    const contactsShuffled = contacts.sort(() => 0.5 - Math.random());
    // return sub-array of first n elements after shuffled
    return contactsShuffled.slice(0, qty);
  }

  addRandomContact(qty) {
    let newContact = this.getRandomContacts(qty);
    let clonedArray = [...this.state.rndContacts];
    clonedArray.push({
      name: newContact[0].name,
      pictureUrl: newContact[0].pictureUrl,
      popularity: newContact[0].popularity
    });

    this.setState({
      ...this.state,
      rndContacts: clonedArray
    });
  }

  sortByName() {
    let clonedArray = [...this.state.rndContacts];
    let sortArray = clonedArray.sort(function(contactA, contactB) {
      var nA = contactA.name.toLowerCase();
      var nB = contactB.name.toLowerCase();

      if (nA < nB) return -1;
      else if (nA > nB) return 1;
      return 0;
    });

    this.setState({
      ...this.state,
      rndContacts: sortArray
    });
  }

  sortByPopularity() {
    let clonedArray = [...this.state.rndContacts];
    let sortArray = clonedArray.sort(function(PopuContactA, PopuContactB) {
      return PopuContactB.popularity - PopuContactA.popularity;
    });

    this.setState({
      ...this.state,
      rndContacts: sortArray
    });
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <section className="toolbar-btns">
          <button className="btn" onClick={() => this.addRandomContact(1)}>
            ADD RANDOM CONTACT
          </button>

          <button className="btn" onClick={() => this.sortByName()}>
            SORT BY NAME
          </button>

          <button className="btn" onClick={() => this.sortByPopularity()}>
            SORT BY POPULARITY
          </button>
        </section>

        <ContactsDisplayer contactsSelected={this.state.rndContacts} />
      </div>
    );
  }
}

export default App;
