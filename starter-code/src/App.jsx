// --- module ---
import React, { Component } from "react";

// --- path ---
import StarTable from "./components/StarTable";

// --- style ---
import "./App.css";

//

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> IronContacts </h1>

        <StarTable />
      </div>
    );
  }
}

export default App;
