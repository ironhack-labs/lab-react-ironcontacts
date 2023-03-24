import './App.css';
import contacts from './contacts.json'
import React, { useState } from 'react'
import Table from './components/Table';

function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5))
  return (
    <div className="App">
        <Table />
    </div>
  );
}

export default App;
