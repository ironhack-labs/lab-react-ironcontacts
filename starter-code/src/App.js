import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './contacts.json'

class App extends Component {

  addRandom = () => {
    console.log('hello')
    let newContact = Contacts[Math.floor(Math.random()*Contacts.length-4)+4];
    this.setState((prevState) => ({contacts: prevState.contacts.concat(newContact)}));
  }

  state = {
    contacts: Contacts.slice(0,5)
  };

  render() {
    const {contacts} = this.state;

    return (
      <div className="App">
          <button onClick={this.addRandom}>Add Random Contact</button>
          <button onClick={this.sortName}>Sort by Name</button>
          <button onClick={this.sortPop}>Sort by Pop </button>
          <h1>IronContacts</h1>
          {contacts.map(({pictureUrl,name, popularity}, key) => (
            <div key={key} className='row-container'>
              <img src={pictureUrl}/>
              <h3>{name}</h3>
              <h3>{popularity}</h3>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
