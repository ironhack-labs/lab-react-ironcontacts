import React from 'react';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <Table contacts='5' />
    </div>
  );
}

export default App;
