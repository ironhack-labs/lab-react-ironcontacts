import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact.js";

const ContactIterator = props => {
  let clients = props.actors.map(client => {
    return <Contact data={client} key={client.id} action={props.action} />;
  });
  return <React.Fragment>{clients}</React.Fragment>;
};

class App extends Component {
  state = {
    actors: contacts.slice(0, 5)
  };

  selectRandom = () => {
    let random = Math.floor(Math.random() * (contacts.length - 5) + 5);
    let client = contacts[random];
    this.setState({
      actors: [...this.state.actors, client]
    });
  };

  sortByName = () => {
    let sorted = [...this.state.actors].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      actors: sorted
    });
  };

  sortByPopularity = () => {
    let sorted = [...this.state.actors].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      actors: sorted
    });
  };

  removeRow = e => {
    let newContacts = [...this.state.actors].filter(actor => {
      return actor.id !== e.target.id;
    });
    this.setState({
      actors: newContacts
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"></p>

        <h1>IronContacts</h1>

        <button onClick={this.selectRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <ContactIterator
              actors={this.state.actors}
              action={this.removeRow}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
