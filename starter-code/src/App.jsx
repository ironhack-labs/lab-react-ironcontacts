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
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
  }

  randomContact() {
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      actors: [random, ...this.state.actors]
    });
  }

  sortByName() {
    const newActors = this.state.actors.sort((a, b) => a.name > b.name ? 1 : -1);
    this.setState({
      actors: [...newActors]
    });
  }

  sortByPopularity() {
    const newActors = this.state.actors.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
    this.setState({
      actors: [...newActors]
    });
  }

  delete(item){
    const deleted = this.state.actors.filter(i => i.id !== item.id)
    this.setState({
     actors: [...deleted]
    })
  }

  render() {
    const actors = this.state.actors;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Iron Hack Contacts</h1>
          <button onClick={this.randomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
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
                <td key={value.id}><button onClick={this.delete.bind(this, value)}>Delete</button></td>
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
