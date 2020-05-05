import React, { Component } from 'react';
import contacts from './contacts.json'
import './App.css';
import Contact from './contacts/Contact'


class App extends Component {

  constructor() {
    super()
    this.contactsArr = [...contacts]
    this.state = {
      contactsCopy: contacts.splice(0, 5)
    }

  }


  addRandom = () => {
    console.log('HOLA PERRA')
    let randomNumber = Math.floor(Math.random() * (contacts.length + 1))
    console.log(randomNumber)
    this.state.contactsCopy.push(contacts[randomNumber])
    this.setState({})
  }

  sortByName = () => {
    this.state.contactsCopy.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({})
  }

  sortByPopularity = () => {
    this.state.contactsCopy.sort((a, b) => b.popularity - a.popularity)
    this.setState({})
  }

  deleteContact = (idx) => {
    const contactsSecondCopy = this.state.contactsCopy
    contactsSecondCopy.splice(idx, 1)
    this.setState({})
  }

  render() {
    console.log(this.state.contactsCopy)
    return (
      <>
        <section className="container">
          <h2 className="title">IronContacts</h2>
          <div className="buttons">
            <button className="unboton" onClick={this.addRandom}>Add random</button>
            <button className="unboton" onClick={this.sortByName}>Sort by name</button>
            <button className="unboton" onClick={this.sortByPopularity}>Sort by popularity</button>
          </div>
          <table>
            <tbody>
              {
                this.state.contactsCopy.map((elm, idx) => <Contact name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} deleteContact={() => this.deleteContact(idx)} />)
              }

            </tbody>

          </table>
        </section>
      </>
    )
  }
}

export default App;
