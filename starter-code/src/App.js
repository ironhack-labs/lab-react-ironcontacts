import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contact from './components/Contact'


// Primero se crea el elemento<table>.
// Posteriormente, creamos el elemento < tbody > , que es el hijo del elemento<table> .
// Después, utilizamos ciclos para crear los elementos < tr >, que son hijos del elemento<tbody>.
// Para cada elemento < tr >, utilizamos nuevamente ciclos para generar los elementos < td > que son hijos de los elementos<tr>.
// Para cada elemento < td >, creamos nodos de texto con el contenido de cada celda.

class App extends Component {
  constructor() {
    super()
    this.copiaDeContacts = [...contacts] //Me copio la array para el Random!!!!!
    this.contactsIniciales = contacts.splice(0, 5) //Saco los 5 primeros del json
    //Lista de los 5 primeros
    this.state = {
      celebrities: this.contactsIniciales
    }
  }

  //Añade de forma aleatória, con mucha ayuda y sufrimiento. (Repasar)
  //Tienes que utilizar la copia de la array y sacar las que no se encuentren entre las celebrities
  //Utilizas el filter y sacas otra celebritie que no este incluida! entre las que tienes.
  //Haces el push y actualizas el estado de las celebrities.
  random() {
    const restOfContacts = this.copiaDeContacts.filter((contact) => !this.state.celebrities.includes(contact));
    this.state.celebrities.push(restOfContacts[Math.floor(Math.random() * restOfContacts.length)])
    this.setState({
      ...this.state.celebrities
    })
  }


  //Ordenar por nombre utilizando el metodo Sort.
  ordName() {
    this.state.celebrities.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({
      ...this.state.celebrities
    })
  }
  //Lo mismo para la popularidad pero al ser un numero no necesito los condicionales.
  ordRate() {
    this.state.celebrities.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      ...this.state.celebrities
    })

  }



  //Para eliminar lo metemos en el componente y lo metemos como una propiedad mas del componente.
  //Crea copia antes de utilizar el splice o te cargas el estado.
  //Mete el indice tambien si quieres eliminar el que pinchas y no en orden.
  delete = idx => {
    let allCelebrities = [...this.state.celebrities]
    allCelebrities.splice(idx, 1)
    this.setState({
      celebrities: allCelebrities
    })
  }


  render() {
    return (
      <div>
        <div className="App">
          <h1>IronContacts</h1>
          <button onClick={() => this.random()}> Añadir contacto aleatorio </button>
          <button onClick={() => this.ordName()}>Ordenar por nombre</button>
          <button onClick={() => this.ordRate()}>Ordenar por popularidad</button>
          <table className="table">
            <tbody>
              <tr>
                <td>Foto</td>
                <td>Nombre</td>
                <td>Popularidad</td>
              </tr>
              {this.state.celebrities.map((contact, idx) =>
                <Contact picture={contact.pictureUrl} name={contact.name} popularity={contact.popularity} idx={idx} buttonDelete={this.delete}></Contact>
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

export default App;

