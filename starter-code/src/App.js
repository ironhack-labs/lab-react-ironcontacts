import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

let contactsArray = contacts.splice(0,5)

const Table = ({array}) => {
  return (
    <div>
    <table>
      <caption>IronContacts</caption>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
    <tbody>
      {array.map((e) => 
        <Row key={e.name} oneRow={e} />
      )}
    </tbody>
    </table>
    </div>
  )
}

const Row = ({oneRow}) => {
  return (
    <tr>
      <td><img width="70px" src={oneRow.pictureUrl}/></td>
      <td>{oneRow.name}</td>
      <td>{oneRow.popularity}</td>
    </tr>
  )
}


class App extends Component {
  state = {
    array: contactsArray}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>test</h1>
        <Table array={this.state.array}/>
      </div>
    );
  }
}

export default App;
