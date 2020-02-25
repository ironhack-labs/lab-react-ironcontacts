import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Card from './components/card/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super()
    this.state = { contacts: contacts.splice(0, 5) }
  }

  addRandomContact = () => {
    const stateCopy = [...this.state.contacts]
    stateCopy.push(contacts[Math.floor(Math.random() * (contacts.length - 4) + 4)])
    this.setState({
      contacts: stateCopy
    })
  }

  sortByName = () => {
    const stateCopy = [...this.state.contacts]
    let orderArr = stateCopy.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
    this.setState({
      contacts: orderArr
    })
  }

  sortByPopularity = () => {
    const stateCopy = [...this.state.contacts]
    let orderArr = stateCopy.sort((a, b) => a.popularity < b.popularity ? 1 : a.popularity > b.popularity ? -1 : 0)
    this.setState({
      contacts: orderArr
    })
  }

  deleteOne = idx => {
    const stateCopy = [...this.state.contacts]
    stateCopy.splice(idx, 1)
    this.setState({
      contacts: stateCopy
    })
  }

  render() {

    return (
      <main className="main">
        <h1>Iron Contacts</h1>
        <div className="buttons">
          <button className="btn btn-dark" onClick={this.addRandomContact}>Add Random Contact</button>
          <button className="btn btn-dark" onClick={this.sortByName}>Sort by Name</button>
          <button className="btn btn-dark" onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((elem, idx) => <Card key={idx} {...elem} deleteOne={() => this.deleteOne(idx)} />)}
          </tbody>
        </table>
      </main>
    )
  }
}

export default App;
