import React, { Component } from 'react'; //por defecto (export default)import './App.css';
import contacts from "./contacts.json";
import './App.css';

// import React from 'react'; //por defecto (export default)
// import {Component} from 'react' //nominal (export const Component)
// import contacts from './contacts.json'  //de archivo, que puede ser nominal


class App extends Component {
  constructor() {
    super()

    this.state = {
      fiveContacts: contacts.slice(0, 5),
      restContacts: contacts,
    }
  }


  addRandom() {

    const contactRandom = Math.floor(Math.random() * contacts.length)
    const restContactsCopy = [...this.state.fiveContacts]

    restContactsCopy.push(contacts[contactRandom])

    this.setState({
      fiveContacts: restContactsCopy
    })
  }


  sortName() {
    const newSort = [...this.state.fiveContacts]
    newSort.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))

    this.setState({
      fiveContacts: newSort
    })
  }


  sortPopularity() {
    const newPopular = [...this.state.fiveContacts]
    newPopular.sort((a, b) => a.popularity < b.popularity ? -1 : (a.popularity > b.popularity ? 1 : 0))

    this.setState({
      fiveContacts: newPopular
    })
  }


  deleteContact(contactId) {
    this.setState({
      fiveContacts: this.state.fiveContacts.filter(elm => elm.id !== contactId)
    })
  }


  render() {

    const theContacts = this.state.fiveContacts

    return (
      <>
        <div className='table-design'>
          <table>
            <thead>
              <h1> IRON CONTACTS </h1>
              <div className="button">
                <button onClick={() => this.addRandom()}> Add Random Contact</button>
                <button onClick={() => this.sortName()}> Sort by name</button>
                <button onClick={() => this.sortPopularity()}> Sort by popularity</button>
              </div>
              <hr />
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>

            <tbody>
              {theContacts.map(elm => {
                return (
                  <tr key={elm._id}>
                    <td> <img src={elm.pictureUrl} ></img> </td>
                    <td>{elm.name}</td>
                    <td>{elm.popularity}</td>
                    <button onClick={() => this.deleteContact(elm.id)}> Delete</button>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default App;
