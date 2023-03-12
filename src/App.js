import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

// const showingContacts = [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]

import React, { Component } from 'react';

class App extends Component {
  state = {
    showingContacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
  }
  render() {
    const handleClick = () => {
      const unusedContacts = contacts.filter(contact => !this.state.showingContacts.includes(contact))
      const newContacts = [...this.state.showingContacts]
      newContacts.push(unusedContacts[Math.floor(Math.random() * ((unusedContacts.length - 1) - 4 + 1) + 4)])
      this.setState({showingContacts: newContacts})
    }

    const handleNameSort = () => {
      this.setState(prevState => ({showingContacts: prevState.showingContacts.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })}))
    }

    const handlePopularitySort = () => {
      this.setState(prevState => ({showingContacts: prevState.showingContacts.sort((a, b) => {
        if (a.popularity < b.popularity) {
          return 1
        }
        if (a.popularity > b.popularity) {
          return -1
        }
        return 0
      })}))
    }

    const handleDelete = (event) => {
      event.target.parentNode.parentNode.removeChild(event.target.parentNode)
    }

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={handleClick} className='selection-btn'>Add random contact</button>
        <button onClick={handleNameSort} className='selection-btn'>Sort by name</button>
        <button onClick={handlePopularitySort} className='selection-btn'>Sort by popularity</button>
        <table className='table table-hover'>
        <tbody>
          <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th></th>
            </tr>
            {this.state.showingContacts.map(contact => {
              return <tr key={contact.id}>
                <th><img src={contact.pictureUrl} /></th>
                <th>{contact.name}</th>
                <th>{contact.popularity.toFixed(2)}</th>
                <th>{contact.wonOscar ? '🏆' : null}</th>
                <th>{contact.wonEmmy ? '🏆' : null}</th>
                <th><button onClick={handleDelete} value={contact.id} className='delete-btn'>Delete</button></th>
              </tr>
            })}
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;