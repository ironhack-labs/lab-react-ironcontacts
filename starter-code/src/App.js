import React, { Component } from "react";
import "./App.css";
import Contacts from "./Contacts/Contacts";
import JSONContacts from "./contacts.json";
import CoolButton from "./CoolButton/CoolButton";

class App extends Component {

  constructor() {
    super();
    this.state = {
      //El estado inicial es directamente el slice del array completo
      contacts: JSONContacts.slice(0, 5)
    }
  }


  //es una funcion que primero almacena en randomContact un elemento aleatorio de todo el array de contactos
  handleClick = () => {
    const randomContact = this.getRandom();
    //en undatedTmpContacts almacena el estado actual, inicialmente 5.
    const updatedTmpContacts = this.state.contacts;
    //subimos al array actual el elemento aleatorio
    updatedTmpContacts.push(randomContact);
    console.log("clicked", randomContact, JSONContacts);
    //actualizamos el estado. Cada vez que actualizamos el estado, el componente se vuelve a refrescar
    this.setState({ contacts: updatedTmpContacts })
  };


  //Toma un elemento aleatorio del array completo JSONContacts
  getRandom = () => {
    const randomItem = JSONContacts[Math.floor(Math.random() * JSONContacts.length)];
    console.log(randomItem);
    return randomItem;
  };

  render() {
    return (
      <div className="App">
        <h2 className="title">Contacts List</h2>
        <CoolButton
          //ponemos onClick como metodo directo del boton para ver que se click, pasamos al componente del boton el handleClick
          onClick={this.handleClick}
          className="button is-success"
          button="Add a Random Contact"
        />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
