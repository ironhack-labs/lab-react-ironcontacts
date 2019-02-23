import React, { Component } from 'react';
import './App.css';
import Contactos from './components/Contactos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>
        <div>
          <div className="col-1">Pictures</div>
           <div className="col-1">Name</div>
           <div className="col-1">Popularity</div>
        </div>
        <hr/>
        <Contactos/>
      </div>
    );
  }
}

export default App;
