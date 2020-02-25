import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  state= {
    contactsList: contacts.slice(0, 5)
  };


  render() {
    return (
      <div className="App">
      <table>
        {this.state.contactsList.map((contactObj) => {
          return <tr> { contactObj.name } </tr>
        })}
      </table>
    
      </div>
    );
  }
}

export default App;
