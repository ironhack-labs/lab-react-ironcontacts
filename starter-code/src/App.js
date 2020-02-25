import React, { Component } from "react";

import "./App.css";
import contacts from "./contacts.json";
import IronContact from "./IronContact";

class App extends Component {
  state = {
    contacts: contacts,
    displayFive: contacts.splice(0, 5)
  };

  addNewRandomContact() {
    let newState = {
      ...this.state
    };

    let randomState = contacts[Math.floor(Math.random() * (contacts.length))];

    newState.displayFive.push(randomState);
    this.setState(randomState);
  };


  sortDisplayFive() {
    let newState = {
      ...this.state
    };

    newState.displayFive.sort((a, b) => a.name.localeCompare(b.name));

    this.setState(newState);
  }

  sortDisplayFiveByPopularity(method) {
    let newState = {
      ...this.state
    };

    newState.displayFive.sort((a, b) => {
      if (a.popularity > b.popularity) return method === "asc" ? 1 : -1;
      else return method === "asc" ? -1 : 1;
    });

    this.setState(newState);
  }


  deleteContact(contactID) {
    (console.log(contactID))
    let newState = {...this.state}
    let filteredDisplayFive = newState.displayFive.filter((contact) => contact.id !== contactID)

    newState.displayFive = filteredDisplayFive

    this.setState(newState)
  }



  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <nav>
          <button onClick={() => this.addNewRandomContact()}>
            Add Random Contact
          </button>
          <button onClick={() => this.sortDisplayFive()}>
            Sort by Name
          </button>
          <button onClick={() => this.sortDisplayFiveByPopularity()}>
            Sort by Popularity
          </button>
        </nav>
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.displayFive.map((contact) => (
              <IronContact
                clickToDelete={() => this.deleteContact(contact.id)}
                key={contact.id}
                pictureUrl={contact.pictureUrl}
                name={contact.name}
                popularity={contact.popularity}
              ></IronContact>

            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
