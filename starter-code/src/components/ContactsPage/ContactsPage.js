import React, { Component } from 'react';
import DB from '../../../src/contacts.json'
import Contact from '../Contact/Contact.js';
class ContactsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DB: DB.slice(0, 5)
    }
  }
  addContact = () => {
    let randI = Math.floor(Math.random() * ((DB.length - 1) - (this.state.DB.length) + (this.state.DB.length - 1)))
    console.log(randI);
    this.setState(
      { DB: [...this.state.DB, DB[randI]] }
    )
  }
  sortContacts = () => {
    let sorted = this.state.DB.sort(
      (a, b) => {
        if (a.name < b.name) {
          return -1
        } else {
          return 1
        }
      }
    )
    this.setState(
      {
        DB: sorted
      }
    )
  }
  sortContactsPopularity = () => {
    let sorted = this.state.DB.sort(
      (a, b) => {
        if (a.popularity < b.popularity) {
          return -1
        } else {
          return 1
        }
      }
    )
    this.setState(
      {
        DB: sorted
      }
    )
  }
  deleteContact = (event) => {
    console.log("here");
    console.log(event.target.getAttribute('data-index'));
    let index = event.target.getAttribute('data-index')
    let array = [...this.state.DB]
    array.splice(index, 1)
    this.setState({
      DB: array
    })
  }

  render() {
    return (
      <div>
        <h1>Iron Contacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortContacts}>sort by name</button>
        <button onClick={this.sortContactsPopularity}>sort by popularity</button>
        <table >
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Populatity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.DB.map((p, i) => {
                return (
                  <Contact key={i} name={p.name} pictureUrl={p.pictureUrl} popularity={p.popularity} deleteFunc={this.deleteContact} index={i} />
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ContactsPage;