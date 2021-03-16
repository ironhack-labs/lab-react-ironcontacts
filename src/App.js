import logo from "./logo.svg";
import contactsJSON from "./contacts.json";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  state = {
    contact: contactsJSON.slice(0, 5),
  };

  randomIndex() {
    return Math.floor(Math.random() * contactsJSON.length);
  }

  handleRandomActor = () => {
    const newRandomActor = contactsJSON[this.randomIndex()];
    const newList = [newRandomActor, ...this.state.contact];
    this.setState({ contact: newList }, () => console.log(newList));
  };
  handleSortByName = () => {
    const sortedArr = [...this.state.contact].sort((a, b) =>
      b.name < a.name ? 1 : -1
    );
    this.setState({ contact: sortedArr });
  };

  handleSortByPopularity = () => {
    const sortedArr = [...this.state.contact].sort(
      (a, b) => b.popularity - a.popularity
    );
    this.setState({ contact: sortedArr });
  };

  handeDeleteActor = (id) => {
    const copyActors = this.state.contact.filter((actor) => actor.id !== id);
    this.setState({ contact: copyActors });
  };

  render() {
    return (
      <div className="Container">
        <button onClick={this.handleRandomActor}>Random Actor</button>
        <button onClick={this.handleSortByName}>Sort by name</button>
        <button onClick={this.handleSortByPopularity}>
          Sort by popularity
        </button>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {this.state.contact.map((actor) => (
              <tr key={actor.id}>
                <td>
                  {" "}
                  <img src={actor.pictureUrl} alt="portraits" />{" "}
                </td>
                <td>{actor.name}</td>
                <td>{actor.popularity.toFixed(2)}</td>
                <td>
                  <button onClick={() => this.handeDeleteActor(actor.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
