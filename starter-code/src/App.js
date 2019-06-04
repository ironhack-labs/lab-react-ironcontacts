import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"
import Table from "./components/Table"

class App extends Component {
  render() {

    let firstContacts = []

    for(let i = 0;i < 6; i++){
      firstContacts.push(contacts[i])
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <table className="container">
          <thead>
            <tr className="title-table">
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>
          <tbody>
            {firstContacts.map((elm, idx) => (
              <Table
                key={idx}
                name={elm.name}
                picture={elm.pictureUrl}
                popularity={elm.popularity}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
