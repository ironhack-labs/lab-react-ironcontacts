import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import arrContacts from './contacts.json'


class App extends Component {
  constructor () {
    super();
    this.state = {
      contacts: arrContacts.slice(0, 5)
    }
  }
  
  selectRandom = () =>{
    let randomContact = this.state.contacts;
    randomContact.push(arrContacts[Math.floor(Math.random()*arrContacts.length)])

    this.setState({contacts: randomContact }) 
  }

  sortName = () => {
   let newOrder =  this.state.contacts.sort((a,b) => a.name > b.name ? 1: -1)
   this.setState({contacts : newOrder})
  }

  sortPopularity = () => {
    let newOrder =  this.state.contacts.sort((a,b) => a.popularity < b.popularity ? 1: -1)
    this.setState({contacts : newOrder})
   }

   deleteActor = (i) => {
    let newRemove = this.state.contacts.splice(i, 1)
    let newArray = this.state.contacts
    this.setState({contacts: newArray})
   }

  
  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <div>
          <button onClick={this.selectRandom}>Add random contact</button>
          <button onClick={this.sortName}>Sort by Name</button>
          <button onClick={this.sortPopularity}>Sort by Popularity</button>
        </div>
        <table className="App">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((e, i) => {
            return (
              <tr key={e.name}>
                <td><img src={e.pictureUrl} width={50}/></td>
                <td>{e.name}</td>
                <td>{e.popularity.toFixed(2)}</td>
                <td><button onClick={ () => this.deleteActor(i)}>Delete</button></td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
