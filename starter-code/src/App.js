import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/Contact'


class App extends Component {
  state = {
    contacts: contacts,
    celebsList: []
  }
  

  componentDidMount() {
  let celebsList = contacts.slice(0,5)
  this.setState({celebsList})
 }

 addingOne = () => {
  let {celebsList} = this.state
  celebsList.push(this.state.contacts[Math.floor(Math.random() * this.state.contacts.length)])
  
  this.setState({celebsList})
}

sortName =() => {
  let {celebsList} = this.state
  celebsList.sort (function (a,b ){
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  })
  this.setState ({celebsList})
}

sortPop =() => {
  let {celebsList} = this.state
  celebsList.sort (function (a,b ){
    if (a.popularity < b.popularity) {
      return 1;
    }
    if (a.popularity > b.popularity) {
      return -1;
    }
    return 0;
  })
  this.setState ({celebsList})
}

 

  render() {
    let {celebsList} = this.state
    return (
      <div>
        <button onClick={this.addingOne} >Add Random Contact</button>
        <button onClick={this.sortName} >Sort by Name</button>
        <button onClick={this.sortPop}>Sort by Popularity</button>
          {celebsList.map((el, index) => <Contact key = {index} {...el} />)}
      </div>
    );
  }
}

export default App;
