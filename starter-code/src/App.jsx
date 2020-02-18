import React, { Component } from "react";
import contactsArr from "./contacts.json";
import "./App.css";

class App extends Component {
  state = {
    contacts: contactsArr.filter((contact, i) => i < 5),
    sortedByName: "desc",
    sortedByPopularity: "desc"
  };
  getRandomContact = arr => {
    let count = 1;
    let randomized;
    for (let i = 0; i < count; i) {
      randomized = arr[Math.floor(Math.random() * arr.length)];
      // Check if the random already exist in the filtered array
      this.state.contacts.includes(randomized)
        ? console.log("duplicate :", randomized)
        : i++;
    }
    return randomized;
  };

  addRandom = () => {
    const copy = [...this.state.contacts];
    copy.push(this.getRandomContact(contactsArr));
    this.setState({ contacts: copy });
  };
  sortByName = () => {
    let copy = [...this.state.contacts];
    this.setState({
      contacts: copy.sort((a, b) => {
        if (this.state.sortedByName === "asc") {
          this.setState({ sortedByName: "desc" });
          return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
        } else {
          this.setState({ sortedByName: "asc" });
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        }
      })
    });
    console.log(this.state.contacts);
  };
  sortByPopularity = () => {
    let copy = [...this.state.contacts];
    if (this.state.sortedByPopularity === "desc") {
      this.setState({
        sortedByPopularity: "asc",
        contacts: copy.sort((a, b) => b.popularity - a.popularity)
      });
    } else {
      this.setState({
        sortedByPopularity: "desc",
        contacts: copy.sort((a, b) => a.popularity - b.popularity)
      });
    }
  };
  deleteContact = index => {
    let copy = [...this.state.contacts];
    this.setState({ contacts: copy.filter((contact, i) => index !== i) });
  };
  render() {
    return (
      <div className="App">
        <h1>Ironcontacts</h1>
        <button onClick={this.addRandom}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <hr />
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
            {this.state.contacts.map((contact, index) => (
              <tr className="card" key={index}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    width="20%"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button onClick={() => this.deleteContact(index)}>
                    Delete
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
