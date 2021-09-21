import React from 'react';
import './App.css';

import ContactsList from './components/ContactsList/ContactsList';


function App() {
  return (
    <div className="App">
      <ContactsList listClass="contacts-list" mainBtnClass="main-btn" />
    </div>
  );
}


export default App;
