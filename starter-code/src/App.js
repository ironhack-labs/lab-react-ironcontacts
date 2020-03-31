import React, { Component } from 'react'
import { Contacts } from './components/Contacts';
import contacts from './contacts.json';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
    contactsArray: contacts.slice(0,5),
    }
  }

clickToRandom = () => {
  let arrayCopy = [...this.state.contactsArray];
  let array = true
  while (array) {
    let arr = contacts[Math.floor(Math.random() * contacts.length)];
    if (this.state.contactsArray.indexOf(arr) === -1) {
      arrayCopy.push(arr);
      this.setState({contactsArray: arrayCopy})
      array = false;
    }
  }
}

sortName = () => {
  let arrayCopy = this.state.contactsArray.sort((a, b) => 
    {return a['name'].localeCompare(b['name'])})
  this.setState({contactsArray: arrayCopy})
}

sortPopularity = () => {
  let arrayCopy = this.state.contactsArray.sort((a, b) => a.popularity - b.popularity)
  this.setState({contactsArray: arrayCopy})
}

clickToDelete = (index) => {
  let arrayCopy = [...this.state.contactsArray];
  arrayCopy.splice(index, 1)
  this.setState({contactsArray: arrayCopy})
}

  render() {
    return(
      <div>
        <div>
        <h1>IronContacts</h1>
        </div>
        <button onClick={this.clickToRandom}><h2>Add Random Contact</h2></button>
        <button onClick={this.sortName}><h2>Sort by Name</h2></button>
        <button onClick={this.sortPopularity}><h2>Sort bt Popularity</h2></button>
        <div>
        <table>
          <thead>
            <tr>
              <th><h1>Picture</h1></th>
              <th><h1>Name</h1></th>
              <th><h1>Popularity</h1></th>
              <th><h1>Action</h1></th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsArray.map((celebrity, index) => {
              return <Contacts clickToDelete={() => this.clickToDelete(index)} key={index} props={celebrity}/>
            })}
          </tbody>
        </table>
        </div>
      </div>
    )}
}    

export default App;