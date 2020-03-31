import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
let initialContacts = contacts.slice(0, 5);


class App extends Component {
  render() {
    return (
      <div className="App">
        <table className="Table">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {initialContacts.map(function(celebrity) {
            return (
              <tr key={celebrity.id}>
                <td>
                  <img src={celebrity.pictureUrl} alt="" />
                </td>
                <td>{celebrity.name}</td>
                <td>{celebrity.popularity}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
