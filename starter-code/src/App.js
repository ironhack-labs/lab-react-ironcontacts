import React, {useState, useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'


function App() {
  
  const [contactList, setContact] = useContext(contacts);
  console.log(contactList)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}
  
  

 

  
    
  

export default App;
