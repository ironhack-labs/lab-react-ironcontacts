import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Contact from './components/Contact';

class App extends Component {
  state = {
    contacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
  };

  addRandomContact = () => {
    this.setState((prevState) => {
      return{
        ...prevState,
        contacts: [ ...prevState.contacts, contacts[this.state.contacts.length]]
      }
    })
  }

  deleteContact = (popularity) => {
    this.setState((prevState) => {
      return{
        ...prevState,
        contacts: prevState.contacts.filter((e) => e.popularity !== popularity)
      }
    })

  }

sortByName = () => {
  this.setState((prevState) => {
    return{
      ...prevState,
      contacts: prevState.contacts.sort((a,b) => (a.name < b.name ? -1 : 1))
    }
  })
}

sortByPopularity = () => {
  this.setState((prevState) => {
    return{
      ...prevState,
      contacts: prevState.contacts.sort((a,b) => (a.popularity < b.popularity ? -1 : 1))
    }
  })
}

  render() {
    const {contacts} = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="columns is-centered">
          <div className="column">
          <div className="buttons is-right">
            <button className="button is-primary" onClick={this.addRandomContact}>Add Random Actor</button>
            <button className="button is-info" onClick={this.sortByName}>Sort by name</button>
            <button className="button is-info" onClick={this.sortByPopularity}>Sort by popularity</button>
          </div>
            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((x) => <Contact key={x.popularity} data={x} deletee={this.deleteContact} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
