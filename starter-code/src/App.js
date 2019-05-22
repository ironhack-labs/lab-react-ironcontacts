import React, { Component } from 'react';
import './App.css';
import List from './components/List'
import contactsArr from './contacts.json'

class App extends Component {
  state = {
    contacts : contactsArr.slice(0,8),
    totalElem : contactsArr.length
  }
  addRandomContact = (index) => {
    const i = Math.round(index)
    this.setState({
      contacts: [...this.state.contacts, contactsArr[i]], 
      totalElem: this.state.totalElem - 1
    })
  }
  sortByName = () => {
    this.setState({
      contacts: [...this.state.contacts].sort((a,b)=> a.name.localeCompare(b.name))

    })
  }
  delete = (i) => {
    this.setState({
      contacts: this.state.contacts.slice(0, i).concat(this.state.contacts.slice(i + 1, this.state.contacts.length))
    })
  }
  sortByPopularity = () => {
    this.setState({
      contacts: this.state.contacts.sort((a,b)=>a.popularity-b.popularity)
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Iron Contact</h1>
        <List 
          delete = {this.delete}
          contacts={this.state.contacts} 
          addRandomContact = {this.addRandomContact}
          sortByName = {this.sortByName}
          sortByPopularity = {this.sortByPopularity}
          total = {this.state.totalElem}/>
      </div>
    );
  }
}

export default App;
