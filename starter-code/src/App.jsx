import React, { Component } from "react";
// import logo from './logo.svg';
import contacts from "./contacts.json";
// import Table from "./components/Table";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
    this.addRandomContact = this.addRandomContact.bind(this);
  }

  addRandomContact() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const newContactList = [...this.state.contacts, randomContact];
    this.setState({
      contacts: newContactList
    });
    console.log("Random Contact");
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>IronContacts</h1>
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Popularity</th>
              </tr>
            </thead>

            <tbody>
              {this.state.contacts.map(contacts => {
                return (
                  <tr>
                    <td>
                      <img
                        className="celebPic"
                        src={contacts.pictureUrl}
                        alt=""
                      />
                    </td>
                    <td>{contacts.name}</td>
                    <td>{contacts.popularity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
