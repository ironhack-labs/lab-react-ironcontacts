import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React, { Component } from "react";

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  randomUser = () => {
    this.state.contacts.push(
      contacts[Math.floor(Math.random() * contacts.length)]
    );
    this.setState(this.state.contacts);
    // {Math.floor(Math.random() * (this.props.max - this.props.min) + this.props.min)}
  };

  sortByName = () => {
    this.state.contacts.sort((first, next) => {
      if (first.name < next.name) {
        return -1;
      } else if (first.name > next.name) {
        return 0;
      }
    });

    this.setState(this.state.contacts);
  };

  sortByPopularity = () => {
    this.state.contacts.sort((first, next) => {
      if (first.popularity > next.popularity) {
        return -1;
      } else if (first.popularity < next.popularity) {
        return 0;
      }
    });

    this.setState(this.state.contacts);
  };

  removeContact(contactToRemoveIndex) {
    const copyContacts = [...this.state.contacts];

    copyContacts.splice(contactToRemoveIndex, 1);

    this.setState({ contacts: copyContacts });
  }

  render() {
    return (
      <div>
      <nav>
        <button class= "top-button" onClick={this.randomUser}>Click To Add</button>
        <button class= "top-button" onClick={this.sortByName}>By Name</button>
        <button class= "top-button" onClick={this.sortByPopularity}>By Popularity</button>
        </nav>
        <body>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.contacts.map((person, index) => {
            return (
              <tr key={person.id}>
                <td>
                  <img className="picture" src={person.pictureUrl} alt="" />
                </td>
                <td class="name">{person.name}</td>
                <td class="name">{person.popularity}</td>
                <td>
                  <button class= "delete-button" onClick={() => this.removeContact(index)}>
                    delete
                  </button>
                </td>
             
              </tr>
            );
          })}
        </table>
        </body>
      </div>
    );
  }
}

export default App;
