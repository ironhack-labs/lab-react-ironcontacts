import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyFriends from "./components/contact"

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to IronContact</h1>
        </header>
        <table>
          <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Accion</td>
          </tr>
          </thead>
         
          <MyFriends ></MyFriends>
      
        </table>
      </div>
    );
  }
}

export default App;
