import React from 'react';
import './App.css';
//import contacts from './contacts.json';
import Table from './components/Table';
import Container from './components/Container';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Container>
        <Header>IronContacts</Header>
        <Table />
      </Container>
    </div>
  );
}

export default App;
