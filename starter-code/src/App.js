import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactList from './components/ContactList';
import RandomButton from './components/RandomButton';
import SortNameButton from './components/SortNameButton';
import SortPopButton from './components/SortPopButton';
import ContactContextProvider from './contexts/ContactContext';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">IronContacts</h1>
    </header>
    <div>
      <ContactContextProvider>
        <RandomButton/>
        <SortNameButton/>
        <SortPopButton/>
        <ContactList/>
      </ContactContextProvider>
    </div>
  </div>
);

export default App;
