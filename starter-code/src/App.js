import React, { Component } from "react";
//import logo from "./logo.svg";
import contacts from "./contacts.json";
import "./App.css";

const contactList = contacts.splice(0, 5);

class App extends Component {
  
  state = {
    contact: contactList,
  };

  render() {
    const contactItems = this.state.contact.map((contact) => (
      <tr>
        <td><img src={contact.pictureUrl} alt=""/></td>
        <td key={contact.id}>{contact.name}</td>
        <td key={contact.id}>{contact.popularity}</td>
      </tr>
    ));


    return (
      <div className="contactList">
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
            {contactItems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
