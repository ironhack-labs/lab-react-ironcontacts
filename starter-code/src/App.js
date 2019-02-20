import React, { Component } from "react";
import "./App.css";
// import contacts from "./contacts.json";
import FiveList from "./component/FiveList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Coucou</h1>

        <FiveList />
      </div>
    );
  }
}

export default App;
