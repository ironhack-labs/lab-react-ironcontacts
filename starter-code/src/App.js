import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contact from './components/Contact';

class App extends Component {
  state = {
    contacts,
    firstFive: [contacts[0],contacts[1],contacts[2],contacts[3],contacts[4]]
  }

  handleRandom = e => {
    const { firstFive, contacts } = this.state
    const contactRandom = contacts[Math.floor(Math.random() * contacts.length)]
    firstFive.push(contactRandom)
    this.setState({ ...firstFive })  
  }

  handleSortByName = e => {
    const { firstFive } = this.state
    firstFive.sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)
    this.setState({ ...firstFive })
  }

  handleSortByPopularity = e => {
    const { firstFive } = this.state
    firstFive.sort((a, b) => (a.popularity > b.popularity) ? -1 : (a.popularity < b.popularity) ? 1 : 0)
    this.setState({ ...firstFive })
  }

  handleDelete = i => {
    const { firstFive } = this.state
    firstFive.splice(i, 1)
    this.setState({ ...firstFive })
  }

  render() {
    const { firstFive } = this.state

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.handleRandom}>Add Random Contact</button>
        <button onClick={this.handleSortByName}>Sort by name</button>
        <button onClick={this.handleSortByPopularity}>Sort by popularity</button>
        <br /><br /><br />
        <Contact contacts={firstFive} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
