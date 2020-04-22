import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    newContacts: contacts.slice(0, 5),
    randomContacts: [...contacts].splice(6, contacts.length),
  };

  showContacts = () => {
    let actor = this.state.newContacts.map((celeb, i) => {
      return (
        <tr key={i}>
          <td>
            <img
              src={celeb.pictureUrl}
              alt="celeb face"
              width="160px"
              height="240px"
            />
          </td>
          <td>{celeb.name}</td>
          <td>{parseFloat(celeb.popularity).toFixed(2)}</td>
          <td>
            <button onClick={this.removeButton}>Remove Contact</button>
          </td>
        </tr>
      );
    });
    return actor;
  };

  removeButton = () => {
    console.log('hahaha')

    let contactShowing = [...this.place.newContacts]
    
  }

  clickMethod = () => {
    let randomContact = this.state.randomContacts[
      Math.floor(Math.random() * this.state.randomContacts.length)
    ]; // 0-193
    //console.log('add rando',this.state.randomContacts.length)
    let copyNewContacts = [...this.state.newContacts];
    copyNewContacts.push(randomContact);

    let randomContactsCopy = [...this.state.randomContacts];
    randomContactsCopy.splice(randomContact, 1);
    console.log("add rando", randomContactsCopy.length);

    this.setState({
      newContacts: copyNewContacts,
      remainingContacts: randomContactsCopy,
    });
  }

  render() {
    console.log(this.state.newContacts);
    console.log(contacts);
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Iron Contacts</h1>
        </header>
        <button onClick={this.clickMethod}> Add Random Contact</button>
        <button onClick={this.sortByName}> SortByName</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>{this.showContacts()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
