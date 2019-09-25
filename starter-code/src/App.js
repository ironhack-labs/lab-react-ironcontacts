import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//importaciòn del archivo donde està la base de datos 
import contacts from './contacts.json'
//importacion del componente de contactos
import Contacts from './components/Contacts'

class App extends Component {
  state = {
    //arreglo que obtiene de la base de datos solo 5 elementos
    arreglo: contacts.slice(0, 5)
  }

  randomContact = () => {
    const index = Math.floor(Math.random(contacts.length) * 100)
    this.state.arreglo.push(contacts[index])
    let nuevoElemento = this.state.arreglo

    this.setState({
      arreglo: nuevoElemento
    })
  }

  sortByName = () => {
    let nuevoElemento = this.state.arreglo.sort((a, b) => {
      let nom1 = a.name.toUpperCase();
      let nom2 = b.name.toUpperCase();
      if (nom1 < nom2) {
        return -1;
      }
      else if (nom1 > nom2) {
        return 1;
      }
      return 0
    });
    this.setState({ arreglo: nuevoElemento })
  }

  sortByPopularity = () => {
    let nuevoElemento = this.state.arreglo.sort((a, b) => {

      if (a.popularity < b.popularity) {
        return 1
      }
      else if (a.popularity > b.popularity) {
        return -1
      }
      return 0
    })
    this.setState({ arreglo: nuevoElemento })
  }

  deleteContact = (i) => {
    this.state.arreglo.splice(i, 1)
    let nuevoElemento = this.state.arreglo
    this.setState({ arreglo: nuevoElemento })
  }

  render(){
    const contactElements = this.state.arreglo.map((element, i) => {
      return (
        <tr key={i}>
          < Contacts deleteContact={() => this.deleteContact(i)} data={element} key={i} ></Contacts >
        </tr>
      )
    })
    return (
        <div className="contenedor">
          <div className="botones">
          <button onClick={() => this.randomContact()}> Add Random Contact</button>
          <button onClick={() => this.sortByName()}> Sort By Name</button>
          <button onClick={() => this.sortByPopularity()}> Sort by Popularity</button>
          </div>
          <table className="tabla">
            <tbody>
              <tr>
                <th colSpan='3'> <h1>IronContacts</h1></th>
              </tr>
              <tr>
                <th>
                  Picture
                  </th>
                <th >
                  Name
                </th>
                <th>
                  Popularity
                </th>
              </tr>
              {contactElements}
            </tbody>
          </table>

        </div>
      )
  }
}

export default App;
