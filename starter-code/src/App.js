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
          <Button clase="menu" eventClick={this.addRandom} text="Add Random Character" />
          <Button clase="menu" eventClick={this.ordenar} text="Ordenar" />
          <Button clase="menu" eventClick={this.ordenarPopularidad} text="Ordenar por popularidad" />
      <table className="tabla">
      <tr>
    <th>Picture</th>
    <th>Name</th> 
    <th>Popularity</th>
    <th>Delete</th>
  </tr>
          {this.state.contacts.map((contacto, idx) =>
            <Contactos image={contacto.pictureUrl} name={contacto.name} popularity={Math.trunc(contacto.popularity * 100)/100} id={idx} borrar={() => this.borrar(idx)} />
          )
          }
</table>

        </p>
      </div>
    );
  }
}

export default App;
