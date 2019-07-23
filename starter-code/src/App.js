import React, { Component } from 'react';
import './App.css';

import MainButton from './components/MainButton';
import Table from './components/Table';

import data from './contacts.json';

class App extends Component {
  state = {
    contacts: [
      ...data
    ],
    myContacts: []
  }

  componentWillMount() {
    const getFirstContacts = this.state.contacts.splice(0, 5);
    this.setState({
      myContacts: getFirstContacts
    })
  }

  addRandomContact = () => {
    const random = Math.floor(Math.random() * this.state.contacts.length);
    const randomContact = this.state.contacts[random]
    this.state.contacts.splice(random, 1);
    this.setState({
      myContacts: [...this.state.myContacts, randomContact]
    })
  }

  sortByName = () => {
    const sortedContacts = this.state.myContacts.sort( (a, b) => {
      if(a.name > b.name) {
        return 1
      }

      if(a.name < b.name) {
        return -1
      }

      return 0
    })

    this.setState({
      myContacts: sortedContacts
    })
  }

  sortByPopularity = () => {
    const sortedContacts = this.state.myContacts.sort( (a, b) => {
      if(a.popularity > b.popularity) {
        return -1
      }

      if(a.popularity < b.popularity) {
        return 1
      }

      return 0
    })

    this.setState({
      myContacts: sortedContacts
    })
  }

  removeContact = (ev) => {
    const index = ev.target.id;
    this.state.myContacts.splice(index, 1);

    this.setState({
      myContacts: [...this.state.myContacts]
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
              <h1>IronContacts</h1>
          </div>
        </div>
        <div className="row">
          <MainButton onClick={this.addRandomContact} text="Add Random Contact"/>
          <MainButton onClick={this.sortByName} text="Sort by name" />
          <MainButton onClick={this.sortByPopularity} text="Sort by popularity" />
        </div>

        <Table myContacts={this.state.myContacts} onClick={this.removeContact}/>
        
      </div>
    );
  }
}

export default App;
