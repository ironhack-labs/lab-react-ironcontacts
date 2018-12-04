import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
//import Table from '../src/components/Table/Table'


class App extends Component {

    constructor(){
      super()
    
      this.state = {
        contacts : contacts.splice(0,5)
      }
    
    }

    

  render() {
    const someContact = this.state.contacts.map((oneContact,index) => <div key={index}> <img src={oneContact.pictureUrl}/> {oneContact.name} <br></br> {oneContact.popularity}</div>); 
    return (
      <div className="App">
        {someContact}
      </div>
    );
  }
}

export default App;
