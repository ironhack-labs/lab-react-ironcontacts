import React, { Component } from "react";
import "./App.css";
import ContactTable from "./components/ContactTable/ContactTable";
import contacts from './contacts.json'

class App extends Component {
  state = {
    list: contacts.slice(0, 5)
  }
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <ContactTable contactsProp={this.state.list}/> 
      </div>
    );
  }
}

export default App;

 // constructor() {
  //   super(); //este es el padre
  //   this.state = {
  //     contacts: contacts.slice(0, 5)
  //   };
  // }

  // <ContactTable contacts={this.state.contacts}/> Entre llaves es la forma de pasar las propiedades. Le pasamos el objeto state que ahora es un array de 5.