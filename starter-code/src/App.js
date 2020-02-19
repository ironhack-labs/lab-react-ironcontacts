import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class Contacts extends Component {
  state = {
    display: contacts.slice(0, 5)
  };

  handleClick = () => {
    console.log("hellooo");
    const random = Math.floor(Math.random() * contacts.length);
    this.setState({ display: [...this.state.display, contacts[random]] });
  };

  sortClick = () => {
    let sortName = this.state.display.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    this.setState({
      display: sortName
    });
  };

  sortPopularity = () => {
    let sortPop = this.state.display.sort(
      (a, b) => b.popularity - a.popularity
    );

    this.setState({
      display: sortPop
    });
  };

  handleDelete = e => {
    let array = [...this.state.display]; // make a separate copy of the array
    let index = e.target.value;
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ display: array });
    }
  };

  render() {
    const data = this.state.display.map((contact, index) => {
      return (
        
        <tr key={contact.id} className="contactProfile">
          <td>
            <img height="100px" src={contact.pictureUrl} alt={contact.name} />
          </td>
          <td>
            <p>{contact.name}</p>
          </td>
          <td>
            <p>{contact.popularity.toFixed(2)}</p>
          </td>
          <td>
            <button onClick={this.handleDelete} value={index}>
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
      <h1>IronContacts</h1>
        <button onClick={this.handleClick}>Add</button>
        <button onClick={this.sortClick}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contacts />
      </div>
    );
  }
}

export default App;
