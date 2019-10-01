import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact/Contact";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }
  addRandomContact() {
    let randomNumber = Math.floor(Math.random() * contacts.length);
    let randomContact = contacts[randomNumber];

    this.setState({
      ...this.state,
      contacts: [...this.state.contacts, randomContact]
    });

    console.log(this.setState.contacts)
  }
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>
          Add random contact
        </button>
        <table className="contacts">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, i) => (
              <Contact
                key={i}
                pictureUrl={contact.pictureUrl}
                name={contact.name}
                popularity={contact.popularity}
              ></Contact>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
