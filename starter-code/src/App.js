import React, { Component } from "react";
import "./App.css";
import ContactList from "./Components/contacts";

class App extends Component {
  render() {
    //     const tablePicture = ''
    //     const tableName = ''
    //     const tablePopularity = ''
    return (
      <div>
        <h1>IronContacts</h1>
        <ContactList />
      </div>
    );
  }
}

export default App;
