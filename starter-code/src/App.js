import React, { Component } from 'react';
import './App.css';
import contactsArr from './contacts.json';
import Contact from './components/contacts/Contact'




class App extends Component {

  constructor() {
    super()
    this.state = {
      contacts: contactsArr.slice(0, 5)

    }
  }

  addRandomContact = () => {
    const contactsCopy = [...this.state.contacts]
    const randomindex = Math.floor(Math.random() * contactsArr.length)

    contactsCopy.push(contactsArr[randomindex])

    this.setState({ contacts: contactsCopy })
  }


  sortByName = () => {
    const contactsCopy = [...this.state.contacts]
    contactsCopy.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)

    this.setState({ contacts: contactsCopy })
  }


  sortByPopularity = () => {
    const contactsCopy = [...this.state.contacts]
    contactsCopy.sort((a, b) => b.popularity - a.popularity)

    this.setState({ contacts: contactsCopy })
  }

  deleteContact = idx => {
    const contactsCopy = [...this.state.contacts]
    contactsCopy.splice(idx, 1)

    this.setState({ contacts: contactsCopy })
  }


  render() {
    console.log(this.state.contacts)
    return (
      <div className='App'>

        <h1>IronContacs</h1>
        <button onClick={this.addRandomContact}>Add Random Contac</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <table>

          <thead>
            <tr className='titles'>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {this.state.contacts.map((elm, idx) => <Contact key={idx} {...elm} />)}
          </tbody>

        </table>
      </div>
    )
  }


}

export default App;

