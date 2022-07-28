import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";


function App() {
  
  
  
    contacts.map((contacts, index) => (
    <li key={index}>{element}</li>
  ))
  <td>
         <td>celebImg' src={eachContact.pictureUrl} alt='celebrity photo' />
         </td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity.toFixed(2)}</td>
          <td>
            
          </td>
        </tr>
    }

        contacts.sort(function(a, b){
          if(a.name < b.name) { return -1; }
          if(a.popularity > b.popularity) { return 1; }
          return 0;
      })
  
   
   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          IronContacts
        </a>
      </header>
    </div>
  );
}





export default App;
