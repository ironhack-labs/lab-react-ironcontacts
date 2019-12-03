import React, { Component } from "react";
import "./App.css";
import Contacts from "./contacts.json";
import People from "./Components/People";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayedContacts: Contacts.slice(0, 5)
    };
    this.addRandomArtist = this.addRandomArtist.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.delete = this.delete.bind(this);
  }

  addRandomArtist() {
    //select someone random for the Contacts
    //still need to check if the artist is already displayed;
    let randomPosition = parseInt(Math.random() * Contacts.length);
    // console.log(randomPosition);
    const displayedContacts = [
      ...this.state.displayedContacts,
      Contacts[randomPosition]
    ];
    // console.log(displayedContacts);
    this.setState({
      displayedContacts
    });
  }

  sortByName() {
    //Va por orden alfabetico
    let displayedContacts = [...this.state.displayedContacts];
    displayedContacts.sort((a, b) => {
      let first = a.name.toLowerCase();
      let second = b.name.toLowerCase();
      if (first > second) {
        return 1;
      } else if (first < second) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({
      displayedContacts
    });
  }

  sortByPopularity() {
    //Va de mayor a menor
    let displayedContacts = [...this.state.displayedContacts];
    displayedContacts.sort((a, b) => {
      let first = a.popularity;
      let second = b.popularity;
      if (first > second) {
        return -1;
      } else if (first < second) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({
      displayedContacts
    });
  }

  delete(id) {
    let ind = 0;
    this.state.displayedContacts.map((contact, index) => {
      if (contact.id === id) {
        return (ind = index);
      }
    });

    // console.log(ind);

    let displayedContacts = [...this.state.displayedContacts];
    displayedContacts.splice(ind, 1);

    this.setState({
      displayedContacts
    });
  }

  render() {
    // console.log(this.state.displayedContacts);
    return (
      <div>
        <div className="buttons">
          <button onClick={this.addRandomArtist}>Add Random Artist</button>
          <button onClick={this.sortByPopularity}>Sort by Popularity</button>
          <button onClick={this.sortByName}>Sort by Name</button>
        </div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.displayedContacts.map(contact => {
              return (
                <People key={contact.id} delete={this.delete}>
                  {contact}
                </People>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
