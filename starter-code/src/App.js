import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import Row from "./rowcontact.js"


class App extends Component {
  render() {
    let contactsToShow = [];
    for(let i = 0; i < 5; i++){
      contactsToShow.push( <Row{...contacts[i]}></Row>)
    }
    return (
      <div className="App">

      <h1>IronContacts</h1>
      <table>
          {contactsToShow}
      </table>
      </div>
    );
  }
}





export default App;
