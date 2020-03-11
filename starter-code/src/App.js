import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import styled from "styled-components";

const Tabla = styled.div`
display:flex;
justify-content:center;
img{
  width:60px;
}
th {
  word-spacing:100vw; /*forces linebreak*/
  width:5vw;
}
 `;

const Contact = ({pic,name,pop}) => {
  return(
  <tr>
    <th><img src={pic} alt={name}/></th>
    <th>{name}</th>
    <th>{pop}</th>
  </tr>)
}
console.log(contacts)
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <h1>IronContacts</h1>

      <Tabla>
        <table>
          <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {contacts.map((e, i) => (
            <Contact pic={e.pictureUrl} name={e.name} pop={e.popularity} key={i} />
          ))}
          </tbody>
        </table>
      </Tabla>

    </div>
  );
};


export default App;

/* object oriented

import React, { Component } from 'react';
class App extends Component {
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
      </div>
    );
  }
}*/
