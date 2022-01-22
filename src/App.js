import React, { Component} from 'react';
import contacts from './contacts.json';
import Table from './components/Table';
import './App.css';

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
  }
  render() {
    return (
      <div className="App">
        <h1>Ironcontacts</h1>
        <Table headers={['Picture', 'Name', 'Popularity']} data={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
