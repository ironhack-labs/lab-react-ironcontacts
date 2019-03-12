import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import ListaContactos from './components/ListaContactos';


class App extends Component {


  render() {
    return (
      <div className="App">
      
        
        <h1>Iron contacts</h1>
        <ListaContactos contactos={contacts}/>


      </div>
    );
  }
}

export default App;