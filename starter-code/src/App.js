import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contacts from "./Contacts";

class App extends Component {
  render() {
    console.log(contacts);
    return (
      <div className="App">
        <div>
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
