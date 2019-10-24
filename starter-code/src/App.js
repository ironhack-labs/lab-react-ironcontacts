import React, { Component } from 'react';

import './App.css';
import contacts from './contacts.json';
import Contact from './Components/Contact';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactList: contacts.slice(0, 5)
    }
  }

  addRandomContact = () => {
    const randomIdx = Math.floor(Math.random() * contacts.length)
    this.state.contactList.push(contacts[randomIdx])
    this.setState({ contactList: this.state.contactList })
  }

  sortByName = () => {
    const copyContactList = [...this.state.contactList]
    copyContactList.sort((a, b) => a.name < b.name ? -1 : 1)
    this.setState({ contactList: copyContactList })
  }

  sortByPopularity = () => {
    const copyContactList = [...this.state.contactList]
    copyContactList.sort((a, b) => b.popularity - a.popularity)
    this.setState({ contactList: copyContactList })
  }

  deleteContact = (contactIdx) => {
    this.setState({
      contactList: this.state.contactList.filter((c, i) => i !== contactIdx)
    })
  }

  render() {

    return (
      <div className="container">
        <div className="buttons">
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>

        <div className="contact-list">
          <table >
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contactList.map((c, idx) => {
                return <Contact key={'contact_' + idx} img={c.pictureUrl} name={c.name} popularity={c.popularity} onClick={() => this.deleteContact(idx)} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App;
