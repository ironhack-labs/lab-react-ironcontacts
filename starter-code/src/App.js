import React, { Component } from "react";

import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    producers: contacts.splice(0, 5)
  };

  addRandomContact = () => {
    // console.log(contacts);
    console.log(this.state.producers);
    let newContacts = this.state.producers;
    newContacts.push(contacts[Math.floor(Math.random() * contacts.length + 1)]);

    this.setState({
      producers: newContacts
    });
  };

  sortByName = () => {
    let sortedContacts = this.state.producers;
    sortedContacts.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      producers: sortedContacts
    });
  };

  sortByPopularity = () => {
    let sortedContacts = this.state.producers;
    sortedContacts.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({
      producers: sortedContacts
    });
  };

  deleteContact = i => {
    console.log(i);
    let contactsCopy = this.state.producers;
    contactsCopy.splice(i, 1);
    console.log(contactsCopy);
    this.setState({
      producers: contactsCopy
    });
  };
  render() {
    // console.log(this.state.producers[0].name);
    return (
      <div className="App">
        <button onClick={this.addRandomContact}>Add random producer</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.producers.length > 0
            ? this.state.producers.map((producers, i) => {
                return (
                  <tr>
                    <td>
                      <img
                        alt="celeb"
                        width="50px"
                        src={producers.pictureUrl}
                      />
                    </td>
                    <td>{producers.name}</td>
                    <td>{producers.popularity}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.deleteContact(i);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : "no producers. click add to generate"}
        </table>
        {/* {this.state.producers[0]} */}
      </div>
    );
  }
}

export default App;
