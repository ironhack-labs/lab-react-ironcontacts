import React, { Component } from "react";
import "./App.css";
import DynamicContactsList from "./components/list/list";
// import Contacts from "./contacts.json";
class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <h4>IronContacts</h4>

          <DynamicContactsList />
        </section>
      </div>
    );
  }
}

export default App;
