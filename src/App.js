import React, { Component } from 'react'
import './App.css';
import data from './contacts.json'
import Table from './components/Table'

const axios = require('axios');


let initial = []

for (let i=0; i<5; i++) {
  initial.push(data[i])
}

class App extends Component {
  state = {
    contacts: initial,
    sortedName: 'down',
    sortedPopularity: 'down'
  }

  unShift = (contact) => {
    let data = {
      id: '',
      name: '',
      pictureUrl: '',
      popularity: 0
      }

    axios.get('https://randomuser.me/api/')
    .then((res) => {
      data.name = `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
      data.pictureUrl = res.data.results[0].picture.large
      data.id = Math.random().toString(36).substring(2, 15)
      data.popularity = parseFloat((Math.random() * (20 - 10) + 10).toFixed(2))
    })
    .then(() => {
      this.setState({contacts: [data, ...this.state.contacts]})
    })
    .catch((error) => {
      console.log(error)
    })   
  }

  sortByName = () => {
    if (this.state.sortedName === 'up') {
      let sortedContacts = [...this.state.contacts.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))];
      this.setState({contacts: sortedContacts, sortedName: 'down'})
    } else {
      let sortedContacts = [...this.state.contacts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))]
      this.setState({contacts: sortedContacts, sortedName: 'up'})
    }
  }

  sortByPopularity = () => {
    if (this.state.sortedPopularity === 'up') {
      let sortedContacts = [...this.state.contacts.sort((a,b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0))];
      this.setState({contacts: sortedContacts, sortedPopularity: 'down'})
    } else {
      let sortedContacts = [...this.state.contacts.sort((a,b) => (a.popularity > b.popularity) ? 1 : ((b.popularity > a.popularity) ? -1 : 0))]
      this.setState({contacts: sortedContacts, sortedPopularity: 'up'})
    }
  }

  remove = (e) => {
    let newContacts = this.state.contacts.filter(contact => contact.id !== e.target.id)
    this.setState({contacts: newContacts})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="mt-4">IronContacts</h1>
          <div>
            <button type="button" className="btn btn-light mt-3 mx-2" onClick={this.unShift}>Add random contact</button>
            <button type="button" className="btn btn-light mt-3 mx-2" onClick={this.sortByName}>Sort by name</button>
            <button type="button" className="btn btn-light mt-3 mx-2" onClick={this.sortByPopularity}>Sort by popularity</button>
          </div>
          <Table contacts={this.state.contacts} onClick={this.remove}/>
        </header>
      </div>
    );

  }
}

export default App;
