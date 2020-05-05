import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './contacts.json';

class App extends Component {
  state = {
    contacts: data.splice(0, 5),
    sortName: false,
    sortPopularity: false
  }

  handleAddContact = (event) => {
    const newContactsArray = [...this.state.contacts]
    const randomIndex = Math.floor(Math.random() * data.length)
    const randomContact = data[randomIndex]
    newContactsArray.push(randomContact)
    data.splice(randomIndex, 1)
    this.setState({ contacts: newContactsArray })
  }

  handleSortByName = (event) => {
    this.setState({ sortName: !this.state.sortName, sortPopularity: false })
  }

  handleSortByPopularity = (event) => {
    this.setState({ sortPopularity: !this.state.sortPopularity, sortName: false })
  }

  handleDelete = (index) => {
    const newContactsArray = [...this.state.contacts]
    newContactsArray.splice(index, 1)
    this.setState({ contacts: newContactsArray })
  }


  sortContact = () => {
    if (this.state.sortName) {
      return [...this.state.contacts].sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    } else if (this.state.sortPopularity) {
      return [...this.state.contacts].sort((a, b) => {
        return b.popularity - a.popularity
      })
    }
    else {
      return this.state.contacts
    }
  }

  render() {

    return (
      <div className="App">
        <h1>Contacts</h1>
        <button onClick={this.handleAddContact}>Add a random contact</button>
        <button onClick={this.handleSortByName}>Sort by name</button>
        <button onClick={this.handleSortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.sortContact().map((contact, index) => (
              <tr key={index}>
                <td><img className="contact__img" src={contact.pictureUrl} alt={contact.name} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td><button onClick={(event) => this.handleDelete((index))}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
