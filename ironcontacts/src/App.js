import React, { Component } from "react";
import logo from "./logo.svg";
import contacts from "./contacts.json";
import List from "./components/list";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: contacts.slice(0, 5)
    }
  }
  handleClick() {
    let newStateContacts = this.state.contacts.slice()
    newStateContacts.push(contacts[Math.floor(Math.random() * contacts.length)])
    console.log(newStateContacts)
    this.setState({
      contacts: newStateContacts
    })


  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Iron contacts</h1>
          <table>
            <thead>
              <button className="button is-success"
                onClick={e => this.handleClick(e, 1)}>Add a random Celebrity</button>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody />
            {this.state.contacts.map(contact => {
              return (
                <tr>
                  <td>
                    {" "}
                    <img className="celebrityPic" src={contact.pictureUrl} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              );
            })}
          </table>
        </header>
      </div>
    );
  }
}

export default App;