import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/Contacts';
import THeader from './components/THeader';

const firstContacts = contacts.splice(0, 5);

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayContacts : firstContacts
    };
  }

  addRandomContact() {
    let index = Math.floor(Math.random() * contacts.length);
    this.state.displayContacts.push(contacts.splice(index, 1)[0]);
    this.setState({displayContacts : this.state.displayContacts});
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact.bind(this)}>Add Random Contact</button>
        <table>
          <tbody>
          <THeader />
            {this.state.displayContacts.map((el, i) => (
              <Contact key={i} name={el.name} pictureUrl={el.pictureUrl} popularity={el.popularity} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
