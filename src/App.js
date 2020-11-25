import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Table></Table>
    </div>
  );
}

export default App;
