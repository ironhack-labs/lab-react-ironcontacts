import React, { Component } from 'react';
import './App.css';
import jsonContacts from './contacts.json';
import Button from './Button'

console.log(jsonContacts.slice(0,5));

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: jsonContacts.slice(0,5)
    }
    this.randomContact = this.randomContact.bind(this);
  }
  
  randomContact=()=> {
    let newContact = this.state.contacts;
    let randomPerson = jsonContacts[5 + Math.floor(Math.random() * 195)];
    newContact.push(randomPerson);
    this.setState({
      contacts: newContact
    })
  }

  sortByName = ()=>{
    let sortedArray = this.state.contacts.sort((a,b) => {
      var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameA < nameB) //sort string ascending
          return -1 
      if (nameA > nameB)
          return 1
      return 0 
    })
    this.setState({
      contacts: sortedArray
    })
  }

  sortByPopularity = ()=>{
    let sortedArray = this.state.contacts.sort((a,b) => b.popularity - a.popularity)
    this.setState({
      contacts: sortedArray
    })
  }

  deleteContact(indexToRemove) {
    this.setState({
      contacts: this.state.contacts.filter((c,i) => (i !== indexToRemove))
    })
  }

  
  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
        <Button handleClick={this.randomContact} />
        <button onClick={()=>{this.sortByName()}}>Sort by name</button>
        <button onClick={()=>{this.sortByPopularity()}}>Sort by popularity</button>
        <div class="container">
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, i) =>
              <tr key={i}>
                <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                <td>{contact.name}</td>
                <td>{Math.floor(contact.popularity)}</td>
                <td><button onClick={() => this.deleteContact(i)}>Delete</button></td>
              </tr>)}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default App;