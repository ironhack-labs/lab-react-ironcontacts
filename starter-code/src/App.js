import React, { Component } from 'react';
import './App.css';
import CelebList from './components/CelebList';
import { Button } from 'reactstrap';
import Contact from "./contacts.json"

class App extends Component {
  state = {
    contact: Contact.slice(0, 5)
  }


  deleteItem = (index) => {
    this.setState({
      contact: this.state.contact.filter((m, i) => i !== index)
    })
  }

  sortByName = (i) => {
    this.setState({
      contact: this.state.contact.sort((a, b) => a.name > b.name ? 1 : -1)
    })
  }

  sortByPopularity = (i) => {
    this.setState({
      contact: this.state.contact.sort((a, b) => b.popularity - a.popularity)
    })
  }

  addRandom = (e) => {
    const randomIdx = Math.floor(Math.random() * Contact.length)
    this.state.contact.push(Contact[randomIdx])
    this.setState({ contact: this.state.contact })

  }
  render() {
    console.log(this.state.contact)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>

        <Button color="light" onClick={this.addRandom}> Add Random Contact</Button>
        <Button color="light" onClick={this.sortByName}> Sort by Name</Button>
        <Button color="light" onClick={this.sortByPopularity}> Sort by Popularity</Button>
        <div>
          <CelebList contact={this.state.contact} deleteItem={this.deleteItem}
          />


        </div>
      </div >
    );
  }
}

export default App;
