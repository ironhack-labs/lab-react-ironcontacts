import React, { Component } from "react";
import contactsB from "./contacts.json";
import Card from "./Card.js";
import Buttons from "./Buttons.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    const contacts = contactsB.slice(0,5);
    this.state = {
      contacts
    }
  }

  AddRandomContact = () => {
    const contactsCopy = [...this.state.contacts]; 
    let randomContact = Math.floor(Math.random() * 194) + 6;
    contactsCopy.push(contactsB[randomContact]);
    this.setState({
      contacts: contactsCopy
    })
  }

  deleteContactHandler = (contactsIndex) => {
    const contactsCopy = [...this.state.contacts]; 
    contactsCopy.splice(contactsIndex, 1);
    this.setState({
      contacts: contactsCopy
    })
  }

  SortContactPHandler = () => {
    const contactsCopy = [...this.state.contacts]; 
    contactsCopy.sort((a, b) => (a.name > b.name) ? 1 : -1);
    this.setState({
      contacts: contactsCopy
    })
  }

  SortContactNameHandler = () => {
    const contactsCopy = [...this.state.contacts]; 
    contactsCopy.sort((a, b) => (a.name > b.name) ? 1 : -1);
    this.setState({
      contacts: contactsCopy
    })
  }



  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div className="flex-container">
          <h1>IronContacts</h1>
          <Buttons clickToSortName={() => this.SortContactNameHandler()}
          clickToAdd={() => this.AddRandomContact()} 
          clickToSortP={() =>this.SortContactPHandler}>
          
          </Buttons>
          <table>
            <thead>
              <tr>
                <th><h1>Picture</h1></th>
                <th><h1>Name</h1></th>
                <th><h1>Popularity</h1></th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((oneContact, index) => (
                <Card
                  key={index}
                  name={oneContact.name}
                  pictureUrl={oneContact.pictureUrl}
                  popularity={oneContact.popularity}
                  clickToDelete={() => this.deleteContactHandler(index)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
