import React, { Component } from 'react';
import './App.scss';

import contacts from './contacts.json'
const displayedActors = contacts.slice(0, 5);

class App extends Component {

  constructor() {
    super();
    this.state = {
      actors: [...displayedActors] 
    };
    //gives access to the (this) property inside the method
    this.randomContact = this.randomContact.bind(this);
  }

  randomContact() {
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      actors: [...this.state.actors, random]
    });
  }

  render() {
    const actors = this.state.actors;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Iron Hack Contacts</h1>
          <button onClick={this.randomContact}>Add Random Contact</button>
          <button onClick='#'>Sort by name</button>
          <button onClick='#'>Sort by popularity</button>
        </header>

        <div className='table-content'>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>#</th>
          </tr>
          {actors.map(value => {
            return (
              <tr>
                <td><img src={value.pictureUrl} width="100" height="100" alt="" /></td>
                <td>{value.name}</td>
                <td>{value.popularity}</td>
                <td><button onClick='#'>Delete</button></td>
              </tr>
            )
          })}
        </table>
        </div>
      </div>
    );
  }
}

export default App;
