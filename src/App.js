import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contacts from './components/Contacts'

class App extends Component {

  state = {
    contacts: contacts.slice(0, 5)
  }

  getRandomContact = () => {
    this.setState({contacts: this.state.contacts.concat([contacts[Math.floor(Math.random() * contacts.length)]])});
  }

  sortByPopularity = () => {
    this.setState({ contacts: this.state.contacts.sort((a, b) => {return b.popularity - a.popularity}) });
  }

  sortByName = () => {
    this.setState({ contacts: this.state.contacts.sort((a, b) => {return (a.name < b.name) ? -1: 0}) });
  }

  deleteContact = (name) => {
    this.setState({ contacts: this.state.contacts.filter((elem) => {return name !== elem.name;})});
  }

  render() {return (
    <div className="App">
      <Contacts contacts = {this.state.contacts} getRandom={this.getRandomContact} sortPop={this.sortByPopularity} sortName={this.sortByName} deleteContact={this.deleteContact}/>
    </div>
  );}

}

export default App;
