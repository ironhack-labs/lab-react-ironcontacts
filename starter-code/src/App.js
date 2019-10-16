import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      fiveContacts: contacts.splice(0,5),
    };
  }

  AddRandomContact = () => {
    let copyFiveContacts = this.state.fiveContacts;
    let random = contacts[Math.round(Math.random()*contacts.length)]
    copyFiveContacts.push(random)
    this.setState({
      contacts: copyFiveContacts
    })
  }

  RemoveContact = (indexFiveContacts) => {
    let copyFiveContacts = this.state.fiveContacts;
    copyFiveContacts.splice(indexFiveContacts, 1)
    this.setState({
      contacts: copyFiveContacts
    })
  }

  SortByName = () => {
    let contacts = this.state.fiveContacts
    this.setState({
      contacts: contacts.sort((a, b) => {
        if(a.name > b.name) {
          return 1
        } else if(a.name < b.name) {
          return -1
        } else {
          return 0
        }
      })
    })
  }

  SortByPopularity = () => {
    let contacts = this.state.fiveContacts
    this.setState({
      contacts: contacts.sort((a,b) => {
        if(a.popularity < b.popularity) {
          return 1
        } else if(a.popularity > b.popularity) {
          return -1
        } else {
          return 0
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={ () => { this.AddRandomContact() } }>Add Random Contact</button>
        <button onClick={ () => { this.SortByName() } }>Sort by name</button>
        <button onClick={ () => { this.SortByPopularity() } }>Sort by popularity</button> 
          <table>
            <tbody>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
              {this.state.fiveContacts.map((item, index) => {
                let twoPlacedFloat = parseFloat((item.popularity).toFixed(2));
                return <tr key={index}>
                <td><img width="80" height="100" alt="actors" src={item.pictureUrl}></img></td>
                <td>{item.name}</td>
                <td>{twoPlacedFloat}</td>
                <button onClick={ () => { this.RemoveContact() } }>Delete</button>
                </tr>
              })}
            </tbody>
          </table>

      </div>
    );
  }
}

export default App;
