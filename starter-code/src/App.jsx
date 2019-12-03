import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();
    this.state = { list: contacts.slice(0, 4) };
  }

  compareNames = (a, b) => {
    return a.name.localeCompare(b.name);
  };
  comparePopularity = (a, b) => {
    return a.popularity < b.popularity ? 1 : -1;
  };

  addPerson = () => {
    const number = Math.floor(Math.random() * contacts.length);
    const item = contacts[number];
    /* console.dir(); */
    this.setState({
      list: [...this.state.list, item]
    });
  };

  sortByName = () => {
    const contacts = [...this.state.list];
    let sortedArray = contacts.sort(this.compareNames);

    console.log("here");

    this.setState({ list: sortedArray });
  };

  sortByPopularity = () => {
    const contacts = [...this.state.list];
    let sortedArray = contacts.sort(this.comparePopularity);
    console.log(sortedArray);
    this.setState({ list: sortedArray });
  };

  deletePerson(id) {
    const contacts = this.state.list;
    const newList = contacts.filter(element => {
      return element.id !== id;
    });
    /* console.log(id);
    console.log(newList); */
    this.setState({ list: newList });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>IronContacts</h2>
        {
          <section>
            <button onClick={this.addPerson}>Add random Contact</button>

            <button onClick={this.sortByName}>Sort by Name</button>
            <button onClick={this.sortByPopularity}>
              Sort by Populararity
            </button>
          </section>
        }
        <table
          style={{
            textAlign: "center"
          }}
        >
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Populararity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((person, i) => (
              <tr key={i}>
                <td>
                  <img
                    src={person.pictureUrl}
                    style={{
                      width: "25%"
                    }}
                    alt=""
                  />
                </td>
                <td>{person.name}</td>
                <td>{person.popularity}</td>
                <td>
                  <button onClick={() => this.deletePerson(person.id)}>
                    Delete actor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
