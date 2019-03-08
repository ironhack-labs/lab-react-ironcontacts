import React, { Component } from 'react';
import contacts from './contacts.json'
import './App.css';

let showContacts = contacts.splice(0, 5)
console.log(showContacts)


class App extends Component {

  state = {
    contacts: contacts.splice(0,5),
    otherContacts: contacts
  }

  showCelebrities = () => {
    // let list = [...this.state.contacts]
    let list = this.state.contacts.map((eachCelebrity, i) => {
      return (
        <div key={i}>{eachCelebrity.name} {eachCelebrity.popularity.toFixed(2)}
          <img width="100px" src={eachCelebrity.pictureUrl} alt=""/>
          <button onClick={()=>{this.deleteCeleb(i)}}>Delete</button>
        </div>
      )
    })
    console.log(this)
    return list
  }

  deleteCeleb = (i) => {
    console.log('delete', i)
    let listOfCelebsCopy = [ ...this.state.contacts]
    listOfCelebsCopy.splice(i, 1)
    this.setState({
      contacts:listOfCelebsCopy
    })

  }

  addAContact = () => {
    let newContacts = [...this.state.contacts]
    let otherContacts = [ ...this.state.otherContacts ]
    let randomContact = otherContacts[Math.floor(Math.random()*(otherContacts.length - 1))]
    console.log('what is this', randomContact)

    newContacts.push(randomContact)
    this.setState({
      contacts: newContacts
    })
  }

  sortBySomething = (something) => {

    let sortedContacts = [ ...this.state.contacts]
    sortedContacts.sort(function(a, b) {
      if(a[something] < b[something]) { return -1;}
      if(a[something] > b[something]) { return 1;}
      return 0
    })

    this.setState({
      contacts: sortedContacts
    })
  }

  render() {

    console.log(contacts)

    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={this.addAContact}>Add a Contact</button>
        <button onClick={()=>{this.sortBySomething('name')}}>Sort By Name</button>
        <button onClick={()=>{this.sortBySomething('popularity')}}>Sort By Popularity</button>
        {this.showCelebrities()}
      </div>
    );
  }
}

export default App;
