import React, { Component } from "react";
import contacts from "./contacts.json";
import logo from "./logo.svg";
import "./App.css";
import Celebrity from "./Celebrity.js";

class App extends React.Component {
  state = {
    celebrities: contacts.slice(0, 5)
  };

  addRandomContact() {
    let aleatorio = Math.floor(Math.random() * (contacts.length + 1));
    let newCelebrities = [...this.state.celebrities];
    newCelebrities.push(contacts[aleatorio]);

    this.setState({
      ...this.state,
      celebrities: newCelebrities
    });
  }

  sortByName() {
    let newState = {
      ...this.state
    };

    newState.celebrities.sort((a, b) => a.name.localeCompare(b.name));

    this.setState(newState);
  }

  sortByPopularity() {
    let newState = {
      ...this.state
    };

    newState.celebrities.sort((a, b) => {
      if (a.popularity > b.popularity) return a ? -1 : 1;
      else return a ? 1 : -1;
    });

    this.setState(newState);
  }

  deleteCelebrity(celebrityID) {

    let newState = { ...this.state };
    let filteredCelebrities = newState.celebrities.filter(
      celebrity => celebrity.id !== celebrityID
    );

    newState.celebrities = filteredCelebrities;

    this.setState(newState);
  }

  render() {
    return (
      <section className="main">
        <h1>ironContacts</h1>
        <nav>
          <button className="tlacidlo" onClick={() => this.addRandomContact()}>
            Add Random Contact
          </button>
          <button className="tlacidlo" onClick={() => this.sortByName()}>Sort by name</button>
          <button className="tlacidlo" onClick={() => this.sortByPopularity()}>
            Sort by popularity
          </button>
        </nav>
        <table className="flat-table flat-table-1">
          <thead>
            <tr>
              <th>People</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.celebrities.map((celebrity, index) => (
              <Celebrity
                clickToDelete={() => this.deleteCelebrity(celebrity.id)}
                key={celebrity.id}
                pictureUrl={celebrity.pictureUrl}
                name={celebrity.name}
                popularity={celebrity.popularity}
              ></Celebrity>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

export default App;

/*

*/
