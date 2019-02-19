import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Contactos from './contactos/contactos'
import Button from './button/button'

class App extends Component {

  state = {
    contacts: [...contacts.splice(0, 5)]
  }

  addRandom = () => {
    let newState = {
      ...this.state
    }
    let num = parseInt(Math.random() * contacts.length)
    newState.contacts.push(contacts[num])
    this.setState(newState)
  }

  ordenar = () => {
    let newState = {
      ...this.state
    }
    let ordenado = newState.contacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
    })
    this.setState(ordenado)
  }

  ordenarPopularidad = () => {
    let newState = {
      ...this.state
    }

    let ordenado = newState.contacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1
      }
    })
    this.setState(ordenado)
  }


  borrar = (idx) => {

    let newState = {
      ...this.state
    }

    newState.contacts.splice(idx, 1)

    this.setState(newState)

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Button eventClick={this.addRandom} text="Add Random Character" />
          <Button eventClick={this.ordenar} text="Ordenar" />
          <Button eventClick={this.ordenarPopularidad} text="Ordenar por popularidad" />

          {this.state.contacts.map((contacto, idx) =>
            <Contactos image={contacto.pictureUrl} name={contacto.name} popularity={contacto.popularity} id={idx} borrar={() => this.borrar(idx)} />
          )
          }


        </p>
      </div>
    );
  }
}

export default App;
