import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import contacts from "./contacts.json";
import ContactList from "./components/ContactList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList />
      </div>
    );
  }
}

export default App;
