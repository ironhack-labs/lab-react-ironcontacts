import React, { Component } from "react";
import "./App.css";
import TabContacts from "./components/TabContacts.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">
          <h1>IRON CONTACTS</h1>
        </div>
        <TabContacts />
      </div>
    );
  }
}


export default App;
