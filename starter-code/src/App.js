import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TableRow from "./TableRow";
import contacts from "./contacts.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.getFirstFive()
    };
    this.addRandom = this.addRandom.bind(this);
    this.sortListByName = this.sortListByName.bind(this);
    this.sortListByPopularity = this.sortListByPopularity.bind(this);
  }
  getFirstFive() {
    let result = contacts.slice(0, 5);
    return result;
  }
  addRandom() {
    const randomIdx = Math.floor(Math.random() * (contacts.length - 5) + 5);
    const newList = [...this.state.list];
    newList.push(contacts[randomIdx]);
    this.setState({ list: newList });
  }
  sortListByName() {
    const sortedList = [...this.state.list];
    sortedList.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ list: sortedList });
  }
  sortListByPopularity() {
    const sortedList = [...this.state.list];
    sortedList.sort((a, b) => b.popularity - a.popularity);
    this.setState({ list: sortedList });
  }
  deleteRow(idx) {
    const newList = [...this.state.list];
    newList.splice(idx, 1);
    this.setState({ list: newList });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">IronContacts</h1>
        </header>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortListByName}>Sort by Name</button>
        <button onClick={this.sortListByPopularity}>Sort by Popularity</button>
        <div className="Table-container">
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
              {this.state.list.map((item, idx) => (
                <TableRow
                  key={idx}
                  pictureUrl={item.pictureUrl}
                  name={item.name}
                  popularity={item.popularity}
                  deleteRow={() => this.deleteRow(idx)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
