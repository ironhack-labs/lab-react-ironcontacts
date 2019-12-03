import React, { Component } from "react";
import contacts from "./contacts.json";
import Celebrity from "./celebrity/Celebrity";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.displayedCelebrities = contacts.slice(0, 5);

    this.state = {
      selectedCelebrities: this.displayedCelebrities
    };
  }

  addRandom() {
    let contactsWithFilter = contacts.filter(
      element => !this.displayedCelebrities.includes(element)
    );
    let randomNumber = Math.floor(
      Math.random() * (contactsWithFilter.length - 1)
    );
    let chosenCelebrity = contactsWithFilter[randomNumber];
    this.displayedCelebrities.push(chosenCelebrity);

    this.setState({
      ...this.state,

      selectedCelebrities: this.displayedCelebrities
    });
  }

  sortByName() {
    this.displayedCelebrities.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    this.setState({
      ...this.state,

      selectedCelebrities: this.displayedCelebrities
    });
  }

  sortByPopularity() {
    this.displayedCelebrities.sort(function(a, b) {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      return 0;
    });

    this.setState({
      ...this.state,

      selectedCelebrities: this.displayedCelebrities.reverse()
    });
  }

  delete(name) {
    this.displayedCelebrities = this.displayedCelebrities.filter(
      element => element.name !== name
    );

    this.setState({
      ...this.state,

      selectedCelebrities: this.displayedCelebrities
    });
  }

  render() {
    return (
      <div className="App">
        <table>
          <caption>IronContacts</caption>
          <thead>
            <tr className="buttonPlace">
              <th>
                <button onClick={() => this.addRandom()} type="button">
                  Add new celebrity
                </button>
              </th>
              <th>
                <button onClick={() => this.sortByName()} type="button">
                  Sort by name
                </button>
              </th>
              <th>
                <button onClick={() => this.sortByPopularity()} type="button">
                  Sort by popularity
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.selectedCelebrities.map((element, idx) => {
              return (
                <Celebrity
                  key={idx}
                  image={element.pictureUrl}
                  name={element.name}
                  popularity={element.popularity.toFixed(2)}
                  delete = {()=> this.delete(element.name)}
                ></Celebrity>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
