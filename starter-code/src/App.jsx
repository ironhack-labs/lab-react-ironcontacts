import React, { Component } from "react";
// import logo from './logo.svg';
import Headings from "./components/Heading";
import Celebrities from "./components/Celebrities";
import "./App.css";

// import contacts from "./contacts.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headings />
        <Celebrities />
      </div>
    );
  }
}

export default App;
