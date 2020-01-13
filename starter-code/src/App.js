import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/ContactList'
import ContactList from './components/ContactList';

import Header from './components/misc/Header';

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <ContactList contacts={contacts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
