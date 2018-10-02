import React, { Component } from 'react';
import logo from './logo.svg';
import contacts from './contacts.json'
import DynamicList from './dinamic/dinamicList'
import './App.css';
// console.log(DynamicList);



/* function ListContacts(params) {
  return params.conts.map((e) =>
    <tr>
      <td><img src={e.pictureUrl} width='100' /></td>
      <td>{e.name}</td>
      <td>{e.popularity}</td>
    </tr>
  )
}

const TableOfCelebrities = () => (
  <div>
    <table>
      <tr>
        <th>pictureUrl</th>
        <th>name</th>
        <th>popularity</th>
      </tr>
      <ListContacts conts={contacts.splice(0,5)} />
    </table>
  </div>
) */

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <DynamicList />
        </p>
      </div>
    );
  }
}

export default App;
