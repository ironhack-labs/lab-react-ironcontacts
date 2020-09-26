import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';


function App() {
  return (
    
    <div className="App">
    <h1>Iron Contacts</h1>
    <div class="divTable">

    <div class="divTableRow tableHeader">
      <div class="divTableCell">Picture</div>      
      <div class="divTableCell">Name</div>
      <div class="divTableCell">Popularity</div>
      </div>

    {contacts.slice(0,5).map(contact => {
      return (
      <div class="divTableRow">
      <div class="divTableCell"><img src={contact.pictureUrl} style={{width:'100px'}}/></div>      
      <div class="divTableCell">{contact.name}</div>
      <div class="divTableCell">{contact.popularity}</div>
      </div>

      )}
    )}
    </div>
    </div>
  );
}

export default App;
