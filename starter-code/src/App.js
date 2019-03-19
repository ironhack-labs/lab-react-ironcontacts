import React, { Component } from 'react';
import logo from './logo.svg';
import contacts from './contacts.json'
import './App.css';
import Listcontacts from './components/Listcontacts';
import Table from "./components/Table"

class App extends Component {
  


    
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
        <div>{contacts[0].name}</div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Table />
        
       
         
      </div>
    );


  
    //  return actors Math.floor(Math.random() * 16777215
  
  
  
  }
 

   
 

}
export default App;
