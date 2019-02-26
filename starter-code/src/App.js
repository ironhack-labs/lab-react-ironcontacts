import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Personaje from './components/Personaje';
import { Table, Button } from 'antd'

class App extends Component {
  state = {
    contacts: [],
    limit: 5
  }
  componentWillMount() {
    this.setState({contacts:contacts.slice(0,5)})
  }

  addRandom = () => {
    let random = Math.floor(Math.random() * contacts.length)
    let arr = this.state.contacts
    arr.unshift(contacts[random])
    this.setState({contacts: arr})
  }

  sortByName = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
    }) })
  }

  sortByPopularity = () => {
    this.setState({ contacts: this.state.contacts.sort((a, b) => {
      if (a.popularity < b.popularity) return 1
      if (a.popularity > b.popularity) return -1
      return 0
  }) })
  }

  handleClick = (id) => {
    this.state.contacts.splice(id, 1)
    this.setState({ contacts: this.state.contacts })
  }

  render() {
    let { contacts } = this.state
    return (<div>
      <h1>IronContacts</h1>
      <Button type="primary" onClick={this.addRandom}>Add Random Contact</Button>
      <Button type="primary" onClick={this.sortByName}>Sort By Name</Button>
      <Button type="primary" onClick={this.sortByPopularity}>Sort By Popularity</Button>
      <Personaje onClick={this.handleClick} dataSource={this.state.contacts} />
      </div>
    );
  }
}

export default App;
