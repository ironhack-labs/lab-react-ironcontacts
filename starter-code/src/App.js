import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/Contacts';
import THeader from './components/THeader';

class App extends Component {
  firstContacts = contacts.slice(0, 6);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <table>
          <THeader />
         {this.firstContacts.map((el, i) => (
           <Contact name={el.name} pictureUrl={el.pictureUrl} popularity={el.popularity}/>
         ))}
       </table>
      </div>
    )
  }
}

export default App;
