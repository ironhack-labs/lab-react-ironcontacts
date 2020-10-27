import React from 'react';
import logo from './logo.svg';
import contacts from './contacts.json';
import './App.css';
import Header from './components/header/Header'
import Table from './components/table/Table'


function App() {
  return (
    <div className="App">
      <Header />
      <Table />
    </div>
  );
}

export default App;
