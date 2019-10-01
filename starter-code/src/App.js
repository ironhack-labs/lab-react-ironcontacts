import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact/Contact";

class App extends Component {
  constructor(props) {
    super(props);

    this.firstFive = contacts.slice(0, 5);
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table className="contacts">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.firstFive.map((contact, i) => (
            <Contact
              key={i}
              pictureUrl={contact.pictureUrl}
              name={contact.name}
              popularity={contact.popularity}
            ></Contact>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
