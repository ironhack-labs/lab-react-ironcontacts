
import './App.css';
import contacts from './contacts.json';
import React, { Component } from 'react';




const firstFive = contacts.splice(0, 5);


export default class App extends Component {
  state = {
    contacts: firstFive,
  };


  deleteContact = (contactId) => {
    this.setState({ contacts: this.state.contacts.filter(contact => contact.id !== contactId) })
  }



  addRandomContact() {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];


  }



  sortByName = () => {
    this.setState({
        contacts: this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))
    })
}



  sortByPopularity = () => {
    this.setState({ contacts: this.state.contacts.sort((a, b) => b.popularity - a.popularity) })
}


  render() {


    return (
      <div className="App">

      <h1>IronContacts</h1>

      <div className="buttons">
        <button onClick={this.RandomContact}>Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
      </div>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>

          {this.state.contacts.map((contact) => {
            return(
              <tr key={contact.id} className="contact">

                <td><img src={contact.pictureUrl} alt="icon" className="celeb-icon"/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td><button onClick={() => this.deleteContact(contact.id)}>Delete</button></td>

              </tr>
            )
          })}
            </tbody>
        </table>
      </div>
    )
  }
}


