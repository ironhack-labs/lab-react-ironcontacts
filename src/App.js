import React from 'react';
import Table from './components/Table/Table';
import contacts from './contacts.json';
import './App.css';

class App extends React.Component {
  render() {
    return <Table data={contacts} />;
  }
}

export default App;
