import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import ContactCard from './compononets/ContactCard'
const shortid = require('shortid');



// const fiveContacts = [contacts[0],contacts[1],contacts[2],contacts[3],contacts[4]]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fiveContacts: [contacts[0],contacts[1],contacts[2],contacts[3],contacts[4]]
    }
  }
  addRandom = () =>{
    var newContact = contacts[Math.floor(Math.random()* contacts.length)];
    var newArr = this.state.fiveContacts
    newArr.push(newContact);
    this.setState({fiveContacts: newArr})
  }
  sortName = () =>{
    var newArr = this.state.fiveContacts.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({fiveContacts: newArr})
  }
  sortPopularity = () =>{
    var newArr = this.state.fiveContacts.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
    this.setState({fiveContacts: newArr})
  }
  deleteContact = (index) => {
    var newArr = this.state.fiveContacts;
    newArr.splice(index,1);
    this.setState({fiveContacts: newArr})
  }

  render() {
    return (
      <div className="App">
      <button onClick={this.addRandom}>Add Ranndom</button>
      <button onClick={this.sortName}>Sort By Name</button>
      <button onClick={this.sortPopularity}>Sort By Popularity</button>
      <table className="table">
      <tbody>
      <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      </tr>
      {
      this.state.fiveContacts.map((contact, index)=>{
        return(
      <ContactCard  
      fullContact={contact} 
      key={shortid.generate()} 
      clickToDelete={() => this.deleteContact(index)}/>
        )
      })
      }
      </tbody>
      </table>
      </div>
    );
  }
}

export default App;
