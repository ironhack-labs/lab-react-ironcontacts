import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";

class App extends Component {
  state = {
    name: "Mir",
    firstFive: contacts.slice(0, 5),
  };

  clickHandler = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      name: "Potato",
      firstFive: [...this.state.firstFive, randomContact],
    });
  };

  render() {
    //console.log("contatcts", contacts);
    //let firstFive = contacts.slice(0, 5);
    //console.log(firstFive);

    return (
      <div className="container">
        <h1>{this.state.name}</h1>
        {this.state.firstFive.map((contact) => {
          return (
            <div className="card">
              <p>{contact.name}</p>
              <img src={contact.pictureUrl} alt={contact.name}></img>
              <p>{contact.popularity}</p>
              <p>{contact.wonOscar ? <span alt="won Oscar">🏆</span> : ""}</p>
            </div>
          );
        })}

        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default App;
