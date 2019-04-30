import React, { Component } from "react";
import "./App.css";
import Contacts from "./Contacts/Contacts";
import contacts from "./contacts.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="title">Contacts List</h2>
        <table className="contact">
          <tr className="row">
            <th className="column-head">Name</th>
            <th className="column-head">Popularity</th>
            <th className="column-head">Picture</th>
          </tr>
        </table>
        ;
        {contacts
          .map((contacts, index) => <Contacts key={index} contact={contacts} />)
          .slice(0, 5)}
      </div>
    );
  }
}

export default App;
