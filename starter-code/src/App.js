import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contactos from './Componentes/contact/Contactos';
import Contactis from './Componentes/contact/Contactis';
import Table from './Componentes/contact/table'


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
        <Table contacts={contacts}></Table>
      </div>
    );
  }
}

export default App;
