import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json'



class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    }

  }

  getRandomActor() {

    const randomActor = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(randomActor)

    const copiedArr = [randomActor].concat(this.state.contacts)
    this.setState({
      contacts: copiedArr
    })
  }
  sortByName() {
    const sortedName = this.state.contacts.sort(function (a, b) {
      var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
      if (nameA < nameB) //sort string ascending
        return -1
      if (nameA > nameB)
        return 1
      return 0 //default return value (no sorting)
    })

    this.setState({
      contacts: sortedName
    })

  }

  sortByPopularity() {
    const sortedPopularity = this.state.contacts.sort(function(a, b){return a.popularity-b.popularity})


    this.setState({
      contacts: sortedPopularity
    })
  }

  deleteActor(index){
  
      this.state.contacts.splice(index,1)
      const newActorArr=this.state.contacts
    
      this.setState({
        movies:newActorArr
      })
  }

  render() {

    const tableRows = this.state.contacts.map((contact, index) => {
      return (

        <tr key={index}>
          {/* <div key={index}> </div>*/}
          <td><img src={contact.pictureUrl} alt="contact" width="120" height="200" /></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <button onClick={() => this.deleteActor()}>Delete</button>
        </tr>
      );
    })


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.getRandomActor()}> Add Random Contact</button>
        <button onClick={() => this.sortByName()}> Sort By Name</button>
        <button onClick={() => this.sortByPopularity()}> Sort By Popularity</button>

        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {tableRows}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
