import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Card from './components/Card.js'
 var newArray = contacts.slice(0,5);

class App extends Component {
  render() {
    return (
      <div className="App">
       <table>
       { newArray.map((contact,index) => 
        <Card key={index} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity} />) 
      }
       </table>
      </div>
    );
  }
}

export default App;
