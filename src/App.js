import React from 'react';
import './App.css';
import ContactList from "./components/contacts/ContactList"
import './components/contacts/Contact.css'


function App() {
  return (
    <div className="App">
      <div className="title">IRON CINEMA</div>
      <div className="add">
        <button></button>
      </div>
     <ContactList/>
    </div>
  );
}

export default App;
