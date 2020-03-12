import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactList from './components/ContactList';
import ContactContextProvider from './contexts/ContactContext';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">IronContacts</h1>
    </header>
    <div>
      <ContactContextProvider>
        <ContactList/>
      </ContactContextProvider>
    </div>
  </div>
);

export default App;
