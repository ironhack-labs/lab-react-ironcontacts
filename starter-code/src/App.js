import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends Component {

  state = {
    contacts: contacts.splice(0,5)
  }

  showContacts = () => {
    let list = this.state.contacts.map((contact,i) => {
      return <tr key={i}>
        <td><img src={contact.pictureUrl} className="contactPhoto"></img></td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td><button onClick={()=>{this.deleteContact(i)}}>Delete</button></td>
        </tr>
    })
    return list;
  }

  // onClick = delete()
  // onClick = functon delete(){}
  //document.getElementById('something').onclick = function(){ delete() }

  addRandomContact = () => {
    let newList = [...this.state.contacts]
    newList.push(contacts[Math.floor(Math.random() * 199)+5])
    this.setState({
      contacts: newList
    })
  }

  deleteContact = (i) => {
    //console.log(contacts[i])
    let shorterList = [...this.state.contacts]
    shorterList.splice(i, 1);
    this.setState({
      contacts: shorterList
    })
  }

  sortByName = () => {
    let sortedByName = [...this.state.contacts]
    sortedByName = sortedByName.sort(this.compareNames)
    this.setState({
      contacts: sortedByName
    })
  }

  sortByPopularity = () => {
    let sortedByPopularity = [...this.state.contacts]
    sortedByPopularity = sortedByPopularity.sort(this.comparePopularity)
    this.setState({
      contacts: sortedByPopularity
    })
  }

  compareNames = (a,b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  comparePopularity = (a, b) => {
    if (a.popularity < b.popularity)
      return -1;
    if (a.popularity > b.popularity)
      return 1;
    return 0;
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact} className="action-buttons">Add Random Contact</button>
        <button onClick={this.sortByName} className="action-buttons">Sort by Name</button>
        <button onClick={this.sortByPopularity} className="action-buttons">Sort by Popularity</button>
        <table className="ironcontacts-table">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.showContacts()}
        </table>
      </div>
    );
  }
}

export default App;
