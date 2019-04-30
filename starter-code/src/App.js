import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Row from "./Row";

class App extends Component {
  state = contacts.slice(0, 5);

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.state.map(contact => {
            return (
              <Row
                name={contact.name}
                picture={contact.pictureUrl}
                popularity={contact.popularity}
              />
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
