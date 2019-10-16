import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.getFirstFive()
    };
    this.addRandom = this.addRandom.bind(this);
  }
  getFirstFive() {
    let result = contacts.slice(0, 5);
    return result;
  }
  addRandom() {
    console.log("clicked");
    const randomIdx = Math.floor(Math.random() * (contacts.length - 5) + 5);
    const newList = [...this.state.list];
    newList.push(contacts[randomIdx]);
    this.setState({ list: newList });
    console.log(newList);
    console.log(this.state.list);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">IronContacts</h1>
        </header>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <div className="Table-container">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <img src={item.pictureUrl} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{Math.round(item.popularity * 100) / 100}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
