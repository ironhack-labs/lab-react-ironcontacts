import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Table from './Components/Table.js';

class App extends Component {
  
  state = {
    contacts : contacts.slice(0,5)
  };

  addRandomContact = () => {
    let a = this.state.contacts.slice();
    let b = contacts[Math.floor(Math.random() * contacts.length + 1)]
    a.push(b);
    this.setState({ contacts : a});
  }

  orderByName = () => {
    let order = this.state.contacts.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    this.setState({ contacts : order });
  }

  orderByPopularity = () => {
    let order = this.state.contacts.sort((a, b) => {
      return a.popularity > b.popularity ? 1 : -1;
    });
    this.setState({ contacts : order });
  }

  deleteContact = (i) => {
    console.log(i, this.state);
    let a = this.state.contacts.slice().slice(i);
    this.setState({ contacts : a });
  }

  render() {
    return (
      <div className="App">
        <h1>Iron Content</h1>
        <Table
          addContact={() => { this.addRandomContact()} }
          orderName={() => { this.orderByName()} }
          orderPop={() => { this.orderByPopularity()} }
          deleteContact={this.deleteContact}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
