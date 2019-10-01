import React, { Component } from 'react';
import Detail from './Detail.js';
import './App.css';
import contacts from './contacts.json';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fiveContact : contacts.splice(0, 5),
      contact : contacts
    }
  }

  addRandom(){
    let moreContact = [...this.state.fiveContact]
    let filterContacts = [...contacts].filter(e => !moreContact.includes(e))
    let randomContact = filterContacts[Math.floor(Math.random() * (filterContacts.length - 1))]
   
    moreContact.push(randomContact)

    this.setState({
        ...this.state,
        fiveContact: moreContact
    })
  }

  sortContactName(){
    let sortByName = this.state.fiveContact.sort((a, b) => {
      if (a.name > b.name) return 1;
      return -1;
    })

    this.setState({
        ...this.state,
    fiveContact : sortByName
    })
  }

  sortContactPopularity(){
    let sortByPopularity = this.state.fiveContact.sort((a, b) => {
      if (a.popularity > b.popularity) return -1;
      return 1;
    })

    this.setState({
        ...this.state,
    fiveContact : sortByPopularity
    })
  }

  removeContact(contactOne) {
    let clonedContact = [...this.state.fiveContact]

    this.setState({
      ...this.state,
      fiveContact: clonedContact.filter(actor => actor !== contactOne)
    });
  }




  render() {
    return (
 <div className="App">
   <div className="button-container-table">
   <button className="button" onClick={() => this.addRandom()}>Add Random Contact</button>
   <button className="button" onClick={() => this.sortContactName()}>Sort by name</button>
   <button className="button" onClick={() => this.sortContactPopularity()}>Sort by popularity</button>
   </div>
   <table className="table">
  
    <tbody>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Action</th>
      </tr>
   {this.state.fiveContact.map((contactOne, idx) => (
     <Detail
   key = {idx}{... contactOne}
   delete={() => this.removeContact(contactOne)}></Detail>
     
   ))}
   </tbody>
   </table>
 </div>
    );
  }
}

export default App;
