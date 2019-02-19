import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"
import Contact from "./components/Contact"


class App extends Component {

  state = { contacts: [...contacts].slice(0, 5) }

  addRandomContact = () => {
    let newState = { ...this.state }

    let ranNum = Math.floor(Math.random() * contacts.length)

    newState.contacts.push(contacts[ranNum])

    this.setState(newState)
  }

  sortByName = () => {
    let newState = { ...this.state }

    newState.contacts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })

    this.setState(newState)
  }

  sortByPopularity = () => {
    let newState = { ...this.state }

    newState.contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    })

    this.setState(newState)

  }

  deleteContact = (index) => {
    let newState = { ...this.state }

    newState.contacts.splice(index, 1)

    this.setState(newState)
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>IronContacts</h1>
          <div className="columns is-centered">
            <button className="button is-link" onClick={this.addRandomContact}>Add Random Contact</button>
            <button className="button is-link" onClick={this.sortByName}>Sort by name</button>
            <button className="button is-link" onClick={this.sortByPopularity}>Sort by popularity</button>
          </div>


          <table className="table">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((contact, index) =>
                <Contact deleteContactProp={() => this.deleteContact(index)} key={index} id={index} name={contact.name} pictureUrl={contact.pictureUrl} popularity={Math.trunc(contact.popularity * 100) / 100} />
              )}
            </tbody>

          </table>
        </div>


      </div>
    );
  }
}

export default App;
