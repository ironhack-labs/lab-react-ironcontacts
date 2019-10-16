import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import User from "../src/components/User.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts
    };
  }
  getFiveContacts() {
    let five = [];
    for (let i = 0; i < 5; i += 1) {
      const { name, pictureUrl, popularity } = this.state.contacts[i];
      console.log({ name, pictureUrl, popularity });
      five.push({ name, pictureUrl, popularity });
    }
    return five;
  }

  render() {
    // console.log(this.state.contacts[0].popularity)
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.getFiveContacts().map((item, idx) => {
            return (
              <tr>
              <User
                key={idx}
                name={item.name}
                pictureUrl={item.pictureUrl}
                popularity={item.popularity}
              />
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
