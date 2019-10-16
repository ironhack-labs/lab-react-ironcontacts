import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import User from "../src/components/User.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: this.getFiveContacts()
    };
    this.addRandomContact = this.addRandomContact.bind(this);
    this.getFiveContacts = this.getFiveContacts.bind(this);
  }
  getFiveContacts() {
    const result=[]
    for (let i = 0; i < 5; i += 1) {
      const { name, pictureUrl, popularity } = contacts[i];
      console.log({ name, pictureUrl, popularity });
      result.push({ name, pictureUrl, popularity });
    }
    return result;
  }

  addRandomContact() {
    let random = Math.floor(Math.random() * (contacts.length - 5) + 5);
    const listCopy = [...this.state.list];
  //  { name, pictureUrl, popularity } = this.state.contacts[random]
    listCopy.push(contacts[random]);
    this.setState({ 
      list: listCopy })
    console.log(listCopy)
  }

  render() {
    // console.log(this.state.contacts[0].popularity)
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>
          Add Random Contact
        </button>

        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.state.list.map((item, idx) => {
            return (
              <tr>
                <User
                  key={idx}
                  name={item.name}
                  pictureUrl={item.pictureUrl}
                  popularity={item.popularity}
                />
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
