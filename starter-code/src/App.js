import React, { Component } from 'react';
import './App.css';
import Contactsjson from './contacts.json';
import Contacts from './components/Contacts';

class App extends Component {
  constructor() {
    super()

    this.state = {
      contact: Contactsjson.slice(0, 5),

    }
  }
  random = () => {
    let array2 = [...this.state.contact]
    let random = Math.floor(Math.random() * Contactsjson.length)
    for (let i = 0; i < array2.length; i++) {
      if (array2[i] === Contactsjson[random]) {
        random = Math.floor(Math.random() * Contactsjson.length)
        i=0
      }
    }
    array2.push(Contactsjson[random])
    this.setState({ contact: array2 })
  }
  sortByName = () => {
    let array2 = [...this.state.contact]
    array2.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({ contact: array2 })

  }
  SortByPopularity = () => {
    let array2 = [...this.state.contact]
    console.log(array2)
    array2.sort((a, b) => {
      return b.popularity-a.popularity
      
    })
    this.setState({ contact: array2 })

  }
  delete = (e) => {
    let array2 = [...this.state.contact]
    array2.splice(e,1)
    this.setState({ contact: array2 })
  }
  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.random}>Add Random Contact</button>
        <button onClick={this.sortByName}>Srot by name</button>
        <button onClick={this.SortByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contact.map((e,i) => <Contacts deleteContact={() => this.delete(i)} key={i}>{e}</Contacts>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
