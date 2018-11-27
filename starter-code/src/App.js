import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import ContactList from "./ContactList";

class App extends Component {
  render() {
    return (
      <main className="App">
        <ContactList />
        <footer>
          <p>Made with at Ironhack</p>
        </footer>
      </main>
    );
  }
}

export default App;
