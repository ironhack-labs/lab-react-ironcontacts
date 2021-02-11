import React from 'react';
import './App.css';
import contacts from "./contacts.json"
import Table from "./components/Table/Table"

class App extends React.Component {
  render() {
    return (
      <Table data={contacts} />
    );
  }
}

export default App;