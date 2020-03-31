import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import { Contact } from './components/Contact';

// const dynamicSort = ('name') =>  {
//   return function (a,b) {
//     return a['name'].localeCompare(b['name']);      
//   }
// }

class App extends Component {
  constructor(){
    super();
    this.state = {
      contact: contacts.slice(0,5)
    }
  }
  addRandom = () => {
    const newContact = [...this.state.contact]
    let exist = true
    while (exist) {
      const addContact = contacts[Math.floor(Math.random() * contacts.length)];
      if (this.state.contact.indexOf(addContact) === -1) {
        newContact.push(addContact)
        this.setState({
          contact : newContact
        })
        exist = false;
      }
    }
  }
  sortName = () =>{
    const newContacts = this.state.contact.sort((a,b) => { return a['name'].localeCompare(b['name'])});
    this.setState({
      contact: newContacts
    })
  }
  sortPopu = () =>{
    const newContacts = this.state.contact.sort((a, b) => b.popularity - a.popularity)
    this.setState({
      contact: newContacts
    })
  }
  deleteContact = (index) => {
    const newContacts = [...this.state.contact];
    newContacts.splice(index, 1);
    this.setState({
      contact: newContacts
    })

  }
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopu}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th><h1>Picture</h1></th>
              <th><h1>Name</h1></th>
              <th><h1>Popularity</h1></th>
              <th><h1>Action</h1></th>
            </tr>
          </thead>
          <tbody>
            {this.state.contact.map((e,i)=><Contact deleteContact={()=>this.deleteContact(i)} key={i}>{e}</Contact>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
