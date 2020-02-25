import React, { Component } from 'react'
import './App.css'
import contacts from './contacts.json'
import Card from './components/Movie'
import 'bootstrap/dist/css/bootstrap.min.css'




class App extends Component {
  constructor() {
    super()
    this.state = { contacts: contacts.splice(0, 5) }
    this.contacts = contacts


  }

  addRandom = () => {
    let addRandom = [...this.state.contacts]
    addRandom.push(contacts[Math.floor(Math.random() * (this.contacts.length - 5) + 5)])
    this.setState({ contacts: addRandom })
  }

  sortByName = () => {
    let sortByName = [...this.state.contacts]
    sortByName.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
    this.setState({ contacts: sortByName })
  }

  sortByPopularity = () => {
    let sortByPopularity = [...this.state.contacts]
    sortByPopularity.sort((a, b) => a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 : 0)

    this.setState({ contacts: sortByPopularity })
  }

  deleteMovie = idx => {
    const moviesCopy = [...this.state.contacts]
    moviesCopy.splice(idx, 1)
    this.setState({ contacts: moviesCopy })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Movies</h1>
        </header>
        <div className="buttons">
          <button className="btn btn-info shadow m-2 p-2" onClick={this.addRandom}>Add Random Contact</button>
          <button className="btn btn-info shadow m-2 p-2" onClick={this.sortByName}>Sort by name</button>
          <button className="btn btn-info shadow m-2 p-2" onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {this.state.contacts.map((elm, idx) => <Card key={idx} {...elm} deleteOneMovie={() => this.deleteMovie(idx)} />)}

          </tbody>
        </table>



      </div>
    );
  }
}

export default App;
