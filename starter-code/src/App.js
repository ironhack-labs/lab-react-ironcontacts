import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'

class App extends Component {

  state = {
    contactsArr: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
  }

  addCelebrity = (e) => {
    e.preventDefault()

    const random = Math.floor(Math.random() * contacts.length)
    const newCelebrity = contacts[random]

    this.setState({
      contactsArr: [...this.state.contactsArr, newCelebrity]
    })

  }

  sortByName = (e) => {

    e.preventDefault()

    const arrSorted = this.state.contactsArr.sort(((a, b) => {
      return a.name.localeCompare(b.name)
    }))

    this.setState({
      contactsArr: [...arrSorted]
    })

  }

  sortByPopularity = (e) => {

    e.preventDefault()

    const arrSorted = this.state.contactsArr.sort(((a, b) => {
      return a.popularity - b.popularity
    }))

    this.setState({
      contactsArr: [...arrSorted]
    })

  }

  deleteCelebrity = index => {
      const celebrityCopy = [...this.state.contactsArr]
      celebrityCopy.splice(index, 1)
      this.setState({
        contactsArr: celebrityCopy
      })
  }

  render() {
  
    return (
      <div className="App">

        <div className="buttons">
        <button onClick={this.addCelebrity}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>

        </div>

        <table>
          <thead>
            <tr>
              <th colSpan='3'><h1>IronContacts</h1></th>
            </tr>
            <tr>
              <td><h2>Picture</h2></td>
              <td><h2>Name</h2></td>
              <td><h2>Popularity</h2></td>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsArr.map((celebrity, i) => {
              return (
                <tr key={i}>
                  <td><img src={celebrity.pictureUrl} alt={celebrity.name}/></td>
                  <td>{celebrity.name}</td>
                  <td>{Math.floor(celebrity.popularity * 100) / 100}</td>
                  <td><button onClick={() => this.deleteCelebrity(i)}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
