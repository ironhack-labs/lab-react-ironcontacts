import React, { Component } from "react";

//Components
import Contacts from "./Contacts/Contacts";
import CoolButton from "./CoolButton/CoolButton";

//Asets
import "./App.css";
import JSONContacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      //El estado inicial es directamente el slice del array completo
      contacts: JSONContacts.slice(0, 5)
    };
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
    this.setState({ contacts: updatedTmpContacts });
  };

  //Toma un elemento aleatorio del array completo JSONContacts
  getRandom = () => {
    const randomItem =
      JSONContacts[Math.floor(Math.random() * JSONContacts.length)];
    console.log(randomItem);
    return randomItem;
  };

  //Sort by name de la lista al hacer click
  handleClickSortName = () => {
    const sortByName = this.state.contacts;
    sortByName.sort(function(contact1, contact2) {
      if (contact1.name < contact2.name) return -1;
      if (contact1.name > contact2.name) return 1;
      else return 0;
    });
    this.setState({ contacts: sortByName });
  };

  //Sort by popularity de la lista al hacer click
  handleClickSortPopularity = () => {
    const sortByPopu = this.state.contacts;
    sortByPopu.sort(function(contact1, contact2) {
      if (contact1.popularity < contact2.popularity) return -1;
      if (contact1.popularity > contact2.popularity) return 1;
      else return 0;
    });
    this.setState({ contacts: sortByPopu });
  };

  //Delete contact de la lista al hacer click
  deletePeople = index => {
    console.log("click delete");
    const deleteContact = this.state.contacts;
    deleteContact.splice(index, 1);
    this.setState({ contacts: deleteContact });
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
        <CoolButton
          //ponemos onClick como metodo directo del boton para ver que se click, pasamos al componente del boton el handleClick
          onClick={this.handleClickSortName}
          className="button is-success"
          button="Sort by Name"
        />
        <CoolButton
          //ponemos onClick como metodo directo del boton para ver que se click, pasamos al componente del boton el handleClick
          onClick={this.handleClickSortPopularity}
          className="button is-success"
          button="Sort by Popularity"
        />
        <Contacts clbk={this.deletePeople} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
