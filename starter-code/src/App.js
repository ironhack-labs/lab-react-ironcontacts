import React, { Component } from "react";
// eslint-disable-next-line
import actors from "./contacts.json";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";

const copyActors = [...actors];

class App extends Component {
  state = {
    actors: [...copyActors].slice(0, 5)
  };

  addRandomContact = (e) => {
    console.log(e);
  }

  render() {
    const { actors } = this.state;
    return (
      <div className="App">
        <Contacts actors={actors} addRandomContact={this.addRandomContact}/>
      </div>
    );
  }
}

export default App;
