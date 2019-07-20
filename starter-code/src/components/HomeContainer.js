import React, { Component } from 'react'
import data from '../contacts.json'
import HomeContacts from './HomeContacts.js'
import { Button } from 'antd'

export default class HomeContainter extends Component {
  state = {
    contacts: data.slice(0, 5)
  }

  addElement = () => {
    let randomContact = Math.floor(Math.random() * data.length) + 1
    let newArray = this.state.contacts
    newArray.push(data.slice(randomContact, randomContact + 1)[0])
    this.setState({
      ...this.state,
      contacts: newArray
    })
  }
  sortName = () => {
    const { contacts } = this.state
    contacts.sort(function(a, b) {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
    this.setState({ contacts })
  }
  sortPopularity = () => {
    const { contacts } = this.state
    contacts.sort(function(a, b) {
      if (a.popularity > b.popularity) {
        return 1
      }
      if (a.popularity < b.popularity) {
        return -1
      }
      return 0
    })
    this.setState({ contacts })
  }
  deleteContact = index => {
    let allcontacts = [...this.state.contacts]

    allcontacts.splice(index, 1)

    this.setState({
      ...this.state,
      contacts: allcontacts
    })
  }
  render() {
    const { contacts } = this.state
    return (
      <div>
        <h1>IronContacts</h1>
        <Button onClick={this.addElement}>Add Random Contact</Button>
        <Button onClick={this.sortName}>Sort by Name</Button>
        <Button onClick={this.sortPopularity}>Sort by Popularity</Button>
        <HomeContacts deleteFn={this.deleteContact} contacts={contacts} />
      </div>
    )
  }
}