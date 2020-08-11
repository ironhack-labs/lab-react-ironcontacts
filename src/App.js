import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import contacts from './contacts.json';

function App() {
  return (
    <div className="App">
      <ContactList />
    </div>
  );
}

export default App;
