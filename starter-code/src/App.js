import React, { Component } from "react";
import "./App.css";
import Contacts from "./contacts.json";
import IronContacts from "./components/ironContacts/IronContacts.js";
import AddRandom from "./components/addRandom/AddRandom.js";

class App extends Component {
  state = {
    addContacts: Contacts.slice(0, 5),
  };

  addRandom = () => {
    this.setState({
      addContacts: this.state.addContacts.concat(
        Contacts[Math.floor(Math.random() * Contacts.length)]
      ),
    });
  };

  getByName = () => {
    this.setState({
      addContacts: this.state.addContacts.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (b.name > a.name) {
          return -1;
        } else {
          return 0;
        }
      }),
    });
  };

  getByPopularity = () => {
    this.setState({
      addContacts: this.state.addContacts.sort((a, b) => {
        if (a.popularity > b.popularity) {
          return 1;
        } else if (b.popularity > a.popularity) {
          return -1;
        } else {
          return 0;
        }
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button className="Add-button" onClick={this.addRandom}>
          Add Random Contact
        </button>
        <button className="Add-button" onClick={this.getByName}>
          sort by Name
        </button>
        <button className="Add-button" onClick={this.getByPopularity}>
          sort by Popularity
        </button>

        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.addContacts.map((el) => (
            <IronContacts
              pictureUrl={el.pictureUrl}
              name={el.name}
              popularity={el.popularity}
              delete={el.id}
            />
          ))}
          ;
        </table>
        {/* </div> */}
      </div>
    );
  }
}

export default App;
