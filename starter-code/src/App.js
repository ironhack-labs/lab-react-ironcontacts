import React, { Component } from 'react';
import './App.css';
import Lista from './contactos/Lista'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Contactos</h1>
      <table>
  <tr>
    <th>Picture</th>
    <th>Nombre</th> 
    <th>Popularidad</th>
  </tr>
  <Lista/>
</table>
      </div>
    );
  }
}

export default App;
