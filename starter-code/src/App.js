import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

/* constructor(){
        super();
        this.state = {
            movies:*/

class App extends Component {
  constructor(){
    super();
    this.state = {
      displayContacts: contacts.slice(0,5)
    }
  }

  addRandomContact = () => {
    this.setState({
      displayContacts:this.state.displayContacts.concat(contacts[Math.floor(Math.random() * contacts.length)])
    });
  }

  sortByName = () => {
    this.setState({
      displayContacts: this.state.displayContacts.sort(function(a,b) { var name1 = a.name, name2 = b.name
        if(name1 < name2) return -1
        if(name1 > name2) return 1
        return 0
      })
    })
  }

  sortByPopularity = () => {
    this.setState({
      displayContacts: this.state.displayContacts.sort(function(a,b) { return b.popularity - a.popularity })
    })
  }

  render() {
    return (
      <div className="App">
      <button onClick = {this.addRandomContact}> Add Random Contact </button>
      <button onClick = {this.sortByName}> Sort By Name </button>
      <button onClick = {this.sortByPopularity}> Sort By Popularity </button>
      {this.state.displayContacts.map((contacts, index) => {
        return (
          <table className="contacts-table" key={index}>
            <tr className="contacts-info">
             <th><h1>Picture</h1></th>
             <td><img src={contacts.pictureUrl} alt=""/></td>
            </tr>

            <tr className="contacts-info">
             <th><h1>Name</h1></th>
             <td>{contacts.name}</td>
            </tr>

            <tr className="contacts-info">
             <th><h1>Popularity</h1></th>
             <td>{contacts.popularity}</td>
            </tr>
          </table>
        );

      })}
      </div>
    )
  }
}

export default App;
