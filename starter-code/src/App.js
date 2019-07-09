import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact";
import Button from "./Button";

class App extends Component {
  state = {
    contacts: contacts.splice(0, 5)
  };

  getRandom = () => {
    let contactsCopie = [...this.state.contacts];
    contactsCopie.push(
      contacts[Math.floor(Math.random() * Math.floor(contacts.length - 1))]
    );
    this.setState({ contacts: contactsCopie });
  };

  sortByName = () => {
    let contactsCopie = [...this.state.contacts];
    contactsCopie.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({ contacts: contactsCopie });
  };

  sortByPopularity = () => {
    let contactsCopie = [...this.state.contacts];
    contactsCopie.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });
    this.setState({ contacts: contactsCopie });
  };

  deleteOne = () => {
    let contactsCopie = [...this.state.contacts];
    const index = contactsCopie.find(element => element);
    contactsCopie.splice(index, 1);
    this.setState({ contacts: contactsCopie });
  };

  render() {
    const mainTitle = "IronContacts";
    const btnRandom = "Add Random Contact";
    const btnSortName = "Sort by name";
    const btnSortPop = "Sort by popularity";
    return (
      <div className="App">
        <h1>{mainTitle}</h1>
        <Button handleClick={this.getRandom}>{btnRandom}</Button>
        <Button handleClick={this.sortByName}>{btnSortName}</Button>
        <Button handleClick={this.sortByPopularity}>{btnSortPop}</Button>
        <table className="table-wrapper">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((oneActor, i) => (
              <Contact
                pictureUrl={oneActor.pictureUrl}
                name={oneActor.name}
                popularity={oneActor.popularity}
                deleteOne={this.deleteOne}
                key={i}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
