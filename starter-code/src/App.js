import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Contacts from './components/Contacts'

class App extends Component {

  state = {
    contacts: [ contacts[0], contacts[1], contacts[2], contacts[3], contacts[4] ]
  }

  addRandomContact = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        contacts: [...prevState.contacts, contacts[this.state.contacts.length]]
      }
    })
  }

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        contacts: prevState.contacts.filter((e) => e.popularity !== id)
      }
    })
  }

  sortByName = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        contacts: prevState.contacts.sort( (a,b) => (a.name < b.name ? -1 : 1))
      }
    })
  }

  sortByPopularity = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        contacts: prevState.contacts.sort( (a,b) => (a.popularity < b.popularity ? -1 : 1))
      }
    })
  }


  render() {
    const { contacts } = this.state 
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="image App-logo is-128x128" alt="logo" />
        
        <logo />
        </header>
        <div className="buttons is-right">
        <button className="button is-primary" onClick={ this.addRandomContact }>Add RNDM</button>
        <button className="button is-info" onClick={ this.sortByName }>Sort by Name</button>
        <button className="button is-info" onClick={ this.sortByPopularity }>Sort by Popularity</button>
        </div>
        <div className="columns is-centered">
          <div className="column">
          <table className="table is-fullwidth">
            <thead>
              <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th></th>
              </tr>
            </thead>
            <tbody>
              { contacts.map( (contact) => <Contacts data={contact} key={ contact.popularity } borrar={ this.deleteContact } />) }
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
