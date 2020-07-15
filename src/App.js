import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';


class App extends Component {
  constructor() {
    super()
    this.state = {
      contacts: contacts.slice(0, 5)
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          {this.state.contacts.map(e => 
            <tr>
              <th><img src={e.pictureUrl} alt='Face' /></th>
              <th>{e.name}</th>
              <th>{e.popularity}</th>
            </tr>
          )}

        </table>
      </div>
    );
  }

}

export default App;
