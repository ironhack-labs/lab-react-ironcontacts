import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import ContactList from "./ContactList/ContactList";

// class ContactList {
//   constructor(picture, name, popularity) {
//     this.picture = picture;
//     this.name = name;
//     this.popularity = popularity;
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.contacts = [...contacts];
    this.newContacts = this.contacts.splice(0, 5);

    this.state = {
      actors: this.newContacts
    };
  }
  render() {
    // return <div className="App"></div>;
    return (
      <div>
        {this.state.actors.map((actor, idx) => (
          <ContactList
            key={idx}
            picture={actor.pictureUrl}
            name={actor.name}
            popularity={actor.popularity}
          ></ContactList>
        ))}
      </div>
    );
  }
}

export default App;
