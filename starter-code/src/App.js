import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./components/Table"
import contacts from "./contacts.json"
import AddRandomContact from "./components/AddRandomContact"

const showContacts = (n) => contacts.slice(0,5) // get n contacts
  


class App extends Component {
  state = {
    celebrities: showContacts(5)
  }

  getRandomContact = ()=>{
    const {celebrities} = this.state;
    let idx = Math.floor(Math.random()* contacts.length ) + 1
    celebrities.push(contacts[idx])
    this.setState({celebrities})
  }

  render() {
    const {celebrities} = this.state
    
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <AddRandomContact randomContact={this.getRandomContact}/>
        <Table  celebrities={celebrities} />
      </div>
    );
  }
}

export default App;
