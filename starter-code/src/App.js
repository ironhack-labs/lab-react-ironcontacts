import React, { Component } from 'react';
import './App.css';
import Table from './components/table/table';

class App extends Component {
  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <hr></hr>
        <section>
          <Table></Table>
        </section>
      </div>
    );
  }
}

export default App;