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
    this.getFirstFive = this.getFirstFive.bind(this);
  }
  getFirstFive() {
    let result = [];
    console.log(contacts);
    for (let idx = 0; idx < 5; idx += 1) {
      result.push(contacts[idx]);
    }
    // this.setState({list:result});
    return result;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">IronContacts</h1>
        </header>
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
              {this.state.list.map(item => (
                <tr>
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
