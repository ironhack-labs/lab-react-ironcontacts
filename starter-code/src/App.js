import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import contactList from './components/producerList'
import DinamicList from './components/dinamicList'
class App extends Component {
  render() {
    return (
    
      // <ul className="movies">
      //     <div className="row">
      //       {contactList}
      //     </div>
      //   </ul>
      <ul>< DinamicList/></ul>
    );
  }
}

export default App;
