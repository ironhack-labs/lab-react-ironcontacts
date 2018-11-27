import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Table from './Components/Table.js';

class App extends Component {
  
  constructor(props) {
    
    super(props);

    this.state = {
      contacts : contacts.slice(0,5)
    };

    this.addRandomContact = this.addRandomContact.bind(this);
    this.orderByName = this.orderByName.bind(this);
    this.orderByPopularity = this.orderByPopularity.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addRandomContact () {
    let a = this.state.contacts.slice();
    let b = contacts[Math.floor(Math.random() * contacts.length)]
    a.push(b);
    this.setState({ contacts : a});
  }

  orderByName () {
    let order = this.state.contacts.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    this.setState({ contacts : order });
  }

  orderByPopularity () {
    let order = this.state.contacts.sort((a, b) => {
      return a.popularity > b.popularity ? 1 : -1;
    });
    this.setState({ contacts : order });
  }

  deleteContact (i) {
    // const contactsCopy = [...this.state.contacts];
    const contactsCopy = this.state.contacts.slice();
    contactsCopy.splice(i, 1);
    this.setState({
        contacts : contactsCopy
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Iron Content</h1>
        <Table
          addContact={this.addRandomContact}
          orderName={this.orderByName}
          orderPop={this.orderByPopularity}
          deleteContact={this.deleteContact}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
