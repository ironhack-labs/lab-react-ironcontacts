import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import TableLine from './components/TableLine'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      contact: contacts.splice(0, 5),
      completeList: contacts
     }
  }
  addRandomContact() {
    let contacts = [...this.state.contact]
    let newCompleteList = [...this.state.completeList]
    const randomIndex = Math.floor(Math.random() * newCompleteList.length);
    let randomContact = newCompleteList[randomIndex]
    if(contacts.includes(randomContact) === false) {
      contacts.push(newCompleteList[randomIndex]) 
      } else {
        this.addRandomContact()
      }
      
    this.setState({
      contact: contacts
    })
  }
  sortByName() {
    let contacts = [...this.state.contact]
    let sorted = contacts.sort((a, b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
    this.setState({
      contact: sorted
    })
  }
  sortByPopularity() {
    let contacts = [...this.state.contact]
    let popular = contacts.sort((a, b) => {
      if(a.popularity < b.popularity) { return -1; }
      if(a.popularity > b.popularity) { return 1; }
      return 0;
    })
    this.setState({
      contact: popular
    })
  }
  deleteHandler(index) {
    let contacts = [...this.state.contact]
    contacts.splice(index, 1)
    this.setState({
      contact: contacts
    })
  }
  render() { 
    return ( 
      <div>
        <h2>Iron Contacts</h2>
        <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Order by name</button>
        <button onClick={() => this.sortByPopularity()}>Order by popularity</button>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
          </thead>
          <tbody>
          {this.state.contact.map((contact, index) => {
            console.log(contact);
            return <TableLine key={index} {...contact} deleteHandler={() => this.deleteHandler(index)}/>
          })}
          </tbody>
          </table>
      </div>
     );
  }
}

export default App;
