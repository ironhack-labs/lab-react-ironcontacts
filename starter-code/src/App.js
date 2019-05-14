import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./components/Table"
import contacts from "./contacts.json"
import Button from "./components/Button"

const showContacts = (n) => contacts.slice(0,5) // get n contacts
  


class App extends Component {
  state = {
    celebrities: showContacts(5)
  }

  getRandomContact = ()=>{
    const {celebrities} = this.state;
    let idx = Math.floor(Math.random()* contacts.length )
    celebrities.push(contacts[idx])
    this.setState({celebrities})
  }

  sortByName = ()=>{
    const {celebrities} = this.state;
    celebrities.sort( (a,b)=> a.name - b.name)
    this.setState({celebrities})  
  }

  sortByPopularity = ()=>{
    const {celebrities} = this.state;
    celebrities.sort( (a,b)=> a.popularity - b.popularity)
    this.setState({celebrities})  
  }

  deleteItem = (index) => {
    const {celebrities} = this.state;
    celebrities.splice(index, 1);
    this.setState({celebrities});
  }

  render() {
    const {celebrities} = this.state
    
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Button behavior={this.getRandomContact} label="Add Random Contact"/>
        <Button behavior={this.sortByName} label="Sort By Name"/>
        <Button behavior={this.sortByPopularity} label="Sort By Popularity"/>
        <Table  celebrities={celebrities} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
