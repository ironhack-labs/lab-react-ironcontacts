import React from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contacts from "./components/Contacts";
import "./components/Contacts.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Contacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
