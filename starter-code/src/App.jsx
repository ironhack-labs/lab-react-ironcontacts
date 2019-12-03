import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();
    const firstFiveCelebs = contacts.slice(0, 5);
    this.state = { celebs: firstFiveCelebs };
    this.addRandom = this.addRandom.bind(this);
    this.sortName = this.sortName.bind(this);
    this.sortPop = this.sortPop.bind(this);
    this.deleteElement = this.deleteElement.bind(this);
  }

  addRandom() {
    const chooseRandom = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(chooseRandom);
    this.setState({
      celebs: [...this.state.celebs, chooseRandom]
    });
  }

  sortName() {
    const currentList = this.state.celebs;

    console.log(currentList);
    this.setState({
      celebs: currentList.sort((a, b) => (b.name < a.name ? 1 : -1))
    });
  }
  sortPop() {
    const currentList = this.state.celebs;

    console.log(currentList);
    this.setState({
      celebs: currentList.sort((a, b) => (b.popularity < a.popularity ? 1 : -1))
    });
  }
  deleteElement(id) {
    console.log(id);
    const deletedCelebs = this.state.celebs.filter(e => e.id !== id);
    this.setState({
      celebs: deletedCelebs
    });
  }

  render() {
    // const contacts = contacts;
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.sortPop}>Sort by Popularity</button>

        <table>
          <tr>
            <th>
              <h1>Picture</h1>
            </th>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Popularity</h1>
            </th>
          </tr>
          {this.state.celebs.map(element => {
            return (
              <tr key={element.id}>
                <td>
                  <img src={element.pictureUrl} width="30px" alt="" />
                </td>
                <td>{element.name}</td>
                <td>{element.popularity}</td>
                <td>
                  <button onClick={() => this.deleteElement(element.id)}>
                    Delete
                  </button>
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
