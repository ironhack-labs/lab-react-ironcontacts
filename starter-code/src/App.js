import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./contacts.json";
import MyContacts from "./MyContacts.js";
import ButtonRandom from "./addRandomActor.js";

class App extends Component {
  state = {
    Contacts: Contacts || [],
    chosenContacts: Contacts.slice(0, 5)
  };

  addContact = () => {
    this.setState({
      chosenContacts: [
        ...this.state.chosenContacts,
        Contacts[Math.floor(Math.random() * Contacts.length)]
      ]
    });
  };

  sortByName = () => {
    this.setState({
      chosenContacts: this.state.chosenContacts.sort((a,b)=> a.name.localeCompare(b.name))
    });
  };

  sortByPopularity = () => {
    this.setState({
      chosenContacts: this.state.chosenContacts.sort((a,b)=> b.popularity-a.popularity)
    });
  };
  deleteActor = (contact) => {
  console.log(contact.name)
    this.setState({
      chosenContacts: this.state.chosenContacts.filter(deleteActor => deleteActor.name !== contact.name)
    });
  };
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Iron Contacts</h1>
        <p className="App-intro">
          <ButtonRandom action={this.addContact} text="Add random actor" />
          <ButtonRandom action={this.sortByName} text="Sort by name" />
          <ButtonRandom
            action={this.sortByPopularity}
            text="Sort by popularity"
          />
          <MyContacts chosenContacts={this.state.chosenContacts} deleteActor={this.deleteActor} />
        </p>
      </div>
    );
  }
}

export default App;
