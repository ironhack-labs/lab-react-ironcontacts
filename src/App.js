import React from "react";
import "./App.css";
// import logo from "./logo.svg";

import contacts from "./contacts.json";

class App extends React.Component {
  state = {
    firstFive: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    let contactsCopy = [...this.state.firstFive];
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    if (!contactsCopy.includes(randomContact)) {
      contactsCopy.push(randomContact);
    }
    this.setState({ firstFive: contactsCopy });
  };

  sortByName = () => {
    let sortedCopy = [...this.state.firstFive];
    sortedCopy.sort((a, b) => a.name.localeCompare(b.name));
    console.log(sortedCopy);
    this.setState({ firstFive: sortedCopy });
  };

  sortByPopularity = () => {
    let sortedCopy = [...this.state.firstFive];
    sortedCopy.sort((a, b) => b.popularity - a.popularity);
    console.log(sortedCopy);
    this.setState({ firstFive: sortedCopy });
  };

  deleteContact = (i) => {
    let contactsCopy = [...this.state.firstFive];
    contactsCopy.splice(i, 1);
    this.setState({
      firstFive: contactsCopy,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.firstFive.map((contact, i) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} width="100px" alt="" />{" "}
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button onClick={() => this.deleteContact(i)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
