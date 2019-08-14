import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Card from "./components/Card";
import Button from "./components/Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.splice(0, 5)
    };
  }

  // const random = contacts[Math.floor(Math.random() * contacts.length)];
  addRandomContact = () => {
    // console.log("entro");
    const newContacts = [...this.state.contacts];
    newContacts.push(contacts[Math.floor(Math.random() * contacts.length)]);
    this.setState({
      ...this.state,
      contacts: newContacts
    });
  };

  sortByName = () => {
    const newContacts = [...this.state.contacts].sort((a, b) =>
      b.name < a.name ? 1 : -1
    );
    this.setState({
      ...this.state,
      contacts: newContacts
    });
  };

  sortByPopularity = () => {
    const newContacts = [...this.state.contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    this.setState({
      ...this.state,
      contacts: newContacts
    });
  };

  removeContact = idx => {
    console.log("entro");
    const newContacts = [...this.state.contacts];
    newContacts.splice(idx, 1);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    console.log(this.state.contacts);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Ironcontacts</h1>
        <hr />

        <Button class="button" onClick={() => this.addRandomContact()}>
          Add Random Contact
        </Button>
        <Button class="button" onClick={() => this.sortByName()}>
          Sort By Name
        </Button>
        <Button class="button" onClick={() => this.sortByPopularity()}>
          Sort By Popularity
        </Button>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((elm, idx) => {
              return (
                <Card
                  key={idx}
                  pictureUrl={elm.pictureUrl}
                  name={elm.name}
                  popularity={elm.popularity}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
