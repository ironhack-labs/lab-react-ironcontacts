import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import ContactTable from './components/contactTable/ContactTable';
import FunctionButton from './components/FunctionButton/FunctionButton'

class App extends Component {

  state = {
    list: contacts.slice(0, 5)
  }
  addRandomContact = () => {
    let newState = {
      ...this.state
    }
    newState.list.push(contacts[Math.floor(Math.random() * contacts.length)])
    this.setState(newState)
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Iron Contacts</h1>
        <div className="controller">
          <FunctionButton functionProp={this.addRandomContact}>Add Random Contacts</FunctionButton>
        </div>
        <ContactTable contactsProp={this.state.list} />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
