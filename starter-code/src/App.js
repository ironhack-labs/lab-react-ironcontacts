import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Stars from './components/Stars';

class App extends Component {

state = { 
  famousPeople : []
}

componentDidMount(){
  //aux
  let fp = contacts.slice(0,5)
  this.setState({famousPeople:fp})
}

handleOnClick = () => {
  let numberOfStars =  Math.floor(Math.random() * contacts.length)
  let currentStar = contacts[numberOfStars]
  console.log(currentStar)
  let {famousPeople} = this.state
  famousPeople.push(currentStar)
  this.setState({famousPeople})
 }

 sortByName = () => {
  let {famousPeople} = this.state
  famousPeople.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })
  console.log(famousPeople)
  this.setState({famousPeople})
 }

 sortByPopularity = () => {
  let {famousPeople} = this.state
  famousPeople.sort((a, b) => {
    if (a.popularity < b.popularity) return -1
    if (a.popularity > b.popularity) return 1
  })
  console.log(famousPeople)
  this.setState({famousPeople})
}

deleteContact = (name) => {
  let {famousPeople} = this.state
  famousPeople = famousPeople.filter((e, i, a) => e.name !== name)
  this.setState({famousPeople})
}


  render() {
    let {famousPeople} = this.state
    return (
      <div>
      <h1>IronContacts</h1>
      <button onClick={this.handleOnClick}> Add Random Contact</button>
      <button onClick={this.sortByName}> Sort by name</button>
      <button onClick={this.sortByPopularity} > Sort by popularity</button>

      <div>
        <h3>Picture</h3>
        <h3>Name</h3>
        <h3>Popularity</h3>
      </div>

      {famousPeople.map((e, index) => {
        return <Stars onClick={this.deleteContact} key={index} {...e} />})}
      </div>
    );
  }
}

export default App;
