import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import ActorRow from "./components/ActorRow.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  render() {
    return (
      <div>
        <h1> IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {/* ...contact prend toutes les clés valeurs de contact[index] et les envoie en props au children */}
            {this.state.contacts.map((contact, index) => {
              return <ActorRow key={index} {...contact} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
