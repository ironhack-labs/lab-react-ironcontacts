import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import ListaContactos from "./Components/ListaContactos"

class App extends Component {


  state = {
    arregloIni: []
  };

  componentDidMount() {
    let arreglo = contacts.slice(0,5);
    this.setState({arregloIni: arreglo})
  }

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
        <h1>Iron contacts</h1>
        <ListaContactos contactos={this.state.arregloIni}/>
      </div>
    );
  }
}

export default App;
