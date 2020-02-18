import React, { Component } from 'react';
import './App.css';
// import contacts from './contacts.json';
import IronContacts from './IronContacts';

class App extends Component {
  render() {
    return (
      <div className="Iron-contact">
         <IronContacts />
         
      </div>
    );

   
  }
}

export default App;
