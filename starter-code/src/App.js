import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";
import Contact from "./Contact.js";


class App extends Component {
  constructor(){
    super();
    this.state = {
      contacts: contacts
    };
  }

  render() {
    return (
      <section className="main">
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
          {this.state.contacts.map(function(contact,idx) {
            if (idx < 5) {
              return <Contact key={contact.id} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity}></Contact>
            }
          })
          }
          </tbody>
        </table>
      </section>
    );
  }
}

export default App;
