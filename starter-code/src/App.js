import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';



class App extends Component {

  state = {
    fiveContacts: contacts.splice(0,5) 
  }

  showFiveContacts = () => {
    // console.log(this.state.fiveContacts)
    return this.state.fiveContacts.map((eachContact, index) => {
      return(
      <tr key={index}>
        <th><img src={eachContact.pictureUrl} alt={eachContact.name}/></th>
        <th>{eachContact.name}</th>
        <th>{eachContact.popularity}</th>
        <th><button onClick = {() => this.deleteButton(index)}>Delete</button></th>
      </tr> 
      )})
  }

  //ALL THE METHODS //

  deleteButton = (index) => {
    console.log(index);
    let contactCopy = this.state.fiveContacts;
    contactCopy.splice(index,1);
    this.setState(
      this.state.fiveContacts = contactCopy
    )


  }


  addNew = () => {
    // console.log(contacts[Math.floor(Math.random()*contacts.length)]) // this gets a random number to index random celeb object
    let contactCopy = this.state.fiveContacts;
    contactCopy.push(contacts[Math.floor(Math.random()*contacts.length)])
    this.setState(
      this.state.fiveContacts = contactCopy
    )
  }

  sortName = () => {
    // console.log(contacts[Math.floor(Math.random()*contacts.length)]) // this gets a random number to index random celeb object
    let contactCopy = this.state.fiveContacts; //references the state aka whatever is displaying because of showFiveContacts()
    contactCopy.sort((a,b) => a.name.localeCompare(b.name))
    this.setState(
      this.state.fiveContacts = contactCopy //replaces the original 
    )
  }

  sortPopularity = () => {
    // console.log(contacts[Math.floor(Math.random()*contacts.length)]) // this gets a random number to index random celeb object
    let contactCopy = this.state.fiveContacts;
    contactCopy.sort((a,b) => b.popularity-a.popularity)
    this.setState(
      this.state.fiveContacts = contactCopy
    )
  }
  render() {
   console.log("Render App.js")
   console.log(this.state.fiveContacts)
   return (
     <div className="App">
      <h1>IronContacts</h1>
      <button onClick = {this.addNew}> Random Contact </button>
      <button onClick = {this.sortName}> Sort By Name </button>
      <button onClick = {this.sortPopularity}> Sort By Popularity </button>
      <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        
       { this.showFiveContacts() }
    
        </tbody>
      </table>

     </div>
   );
    
    
   
  }
}

export default App;
