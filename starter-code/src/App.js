import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  state = {
    contacts: contacts.splice(0,5),
    otherCelebs: contacts,
  }
  randomCeleb = () => {
    let celebContact = [... this.state.contacts]
    let random = this.state.otherCelebs.splice([Math.floor(Math.random()*celebContact.length+1)],1)[0]
    celebContact.push(random)
    console.log("This is a copy of contacts",celebContact)
    this.setState({
      contacts: celebContact
    })
  }

  sortByName = (e) => {
    let contacts = this.state.contacts
    console.log("this is sorted", contacts.name)
    this.setState({
      contacts: contacts.sort((a,b) => {
        return a.name > b.name ? 1: a.name < b.name ? -1: 0
      })
    })
  }

  sortByPopularity = (e) => {
    let contacts = this.state.contacts
    console.log("this is sorted", contacts.name)
    this.setState({
      contacts: contacts.sort((a,b) => {
        return a.popularity > b.popularity ? -1: a.popularity < b.popularity ? 1: 0
      })
    })
  }

  deleteCeleb = (a) => {
    let celebContact = [... this.state.contacts]
    celebContact.splice(a, 1)
    this.setState({
      contacts: celebContact
    })
  }
  render() {
    return (
      <div className="App">
      <h1> IronContacts</h1>
        <table>
          <tr>
            <th> <h2>Picture</h2></th>
            <th><h2>Name</h2></th>
            <th><h2>Popularity</h2></th>
          </tr>
            {this.state.contacts.map((name, i) => {
              return <tr>
              <th><img class="celebpic"src={name.pictureUrl}></img></th>
              <th>{name.name}</th>
              <th>{name.popularity}</th>
              <button class='del' onClick={ () => { this.deleteCeleb(i) } }>Remove<br></br>Celeb</button>
              </tr>
              }
            )}
        </table>
        <button onClick={() => {this.randomCeleb()}}>Add Celebrity</button>
        <button onClick={() => {this.sortByName()}}>Sort Celebs by Name</button>
        <button onClick={() => {this.sortByPopularity()}}>Sort Celebs by Popularity</button>
      </div>
    );
  }
  }
  


export default App;
 
