import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contacts/Contact.js'
import contacts from "./contacts.json";
class App extends Component {
   constructor(){
       super();
       this.state ={
        contacts:contacts.splice(0,5)
       }
   }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

       <table>
            <tbody> 
            <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
            {this.state.contacts.map((contact,index)=> <Contact key={index} {...contact}></Contact>)}
            </tbody> 
       </table>
    
      </div>
    );
  }
}

export default App;
