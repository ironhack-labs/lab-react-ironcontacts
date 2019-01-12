import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

import {ListaContactos} from './components/ListaContactos'

class App extends Component {

  constructor(){
    super();
    this.state = {
      contacts : contacts.slice(0,5)
    }
  }
  
  render() {
    
    return (
      <div className="App content">
       <h1>IronContacts</h1>
       <ListaContactos contactData={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
