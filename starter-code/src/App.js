import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

let showContacts = contacts.splice(0,5)
//console.log(showContacts)

class App extends Component {

  state = {
    contacts: contacts.splice(0,5),
    otherContacts: contacts,
  }

  randomcontact = () => {
    let contactcopy = [... this.state.contacts]
    let random = this.state.otherContacts[Math.round(Math.random()*189)]
    contactcopy.push(random)
    console.log("This is a copy of contacts",contactcopy)
    this.setState({
      contacts: contactcopy
    })
  }

  sortbyname = (a) => {
    let contacts = this.state.contacts
    //let sorted = contactcopy.sort(a.name)
    console.log("this is sorted", contacts.name)
    this.setState({
      contacts: contacts.sort((a,b) => {
        return a.name > b.name ? 1: a.name < b.name ? -1: 0
      })
    })
  }

  sortbypop = (a) => {
    let contacts = this.state.contacts
    //let sorted = contactcopy.sort(a.name)
    console.log("this is sorted", contacts.name)
    this.setState({
      contacts: contacts.sort((a,b) => {
        return a.popularity > b.popularity ? 1: a.popularity < b.popularity ? -1: 0
      })
    })
  }

  deletecontact = (a) => {
    let contactcopy = [... this.state.contacts]
    contactcopy.splice(a, 1)
    this.setState({
      contacts: contactcopy
    })
  }


  render() {

    console.log("other contacts", this.state.otherContacts)

    console.log(this.state.contacts)



    return (
      <div className="App">
      <button onClick={ () => { this.randomcontact() } }>Add Random Contact</button>
      <button onClick={ () => { this.sortbyname() } }>Sort by Name</button>
      <button onClick={ () => { this.sortbypop() } }>Sort by Popularity</button>
      <div class="content">
        <table>
          <tr>
            <th>Name</th>
            <th>Popularity</th>
            <th>Picture</th>
          </tr>
            {this.state.contacts.map((name, i) => {
              return <tr><th>{name.name}</th>
              <th>{name.popularity}</th>
              <th><img class="headshot"src={name.pictureUrl}></img></th>
              <button onClick={ () => { this.deletecontact(i) } }>Delete</button>

              </tr>
              
              
            })}
        </table>
        </div>
      </div>
    );
  }
}

export default App;
