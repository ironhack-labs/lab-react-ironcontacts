import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'


class App extends Component {

  state = {
    contacts: contacts.splice(0,5),
    allContacts: contacts,
  }

  deleteContact = (index) => {
    let temp = [... this.state.contacts]
    temp.splice(index, 1)
    this.setState({
      contacts: temp
    })
  }

  sortByPopularity = (a) => {
    let contacts = this.state.contacts
    this.setState({
      contacts: contacts.sort((a,b) => {
        return a.popularity > b.popularity ? 1: a.popularity < b.popularity ? -1: 0
      })
    })
  }

  randomContact = () => {
    let temp = [... this.state.contacts]
    let random = this.state.allContacts[Math.round(Math.random()*this.state.allContacts.length)]
    temp.push(random)
    this.setState({
      contacts: temp
    })
  }

  sortByName = (a) => {
    let contacts = this.state.contacts
    console.log("this is sorted", contacts.name)
    this.setState({
        contacts: contacts.sort((a,b) => {
        return a.name > b.name ? 1: a.name < b.name ? -1: 0
      })
    })
  }

  
  
  
  render() {

  return (

    <div className="App">
    <button onClick={ () => { this.randomContact() } }>Add Random Contact</button>
    <button onClick={ () => { this.sortByName() } }>Sort by Name</button>
    <button onClick={ () => { this.sortByPopularity() } }>Sort by Popularity</button>

    <div>
    <table>
      <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Action</th>
      </tr>

      {this.state.contacts.map((item, index) => {
         return <tr key={index}>
         <td><img width="100" height="100" src={item.pictureUrl}></img></td>
         <td>{item.name}</td>
         <td>{item.popularity}</td>
         <td><button onClick={ () => { this.deleteContact(index) } }>Delete</button></td>
         </tr>
      })}

        </table>
      </div>
      </div>
    );
  }
}

export default App;
