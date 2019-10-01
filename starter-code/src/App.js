import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import { all } from 'q';

class App extends Component {
  state={
    myContacts: [
    {
      picture: contacts[0].pictureUrl,
      name: contacts[0].name,
      popularity: contacts[0].popularity
    },
    {
      picture: contacts[1].pictureUrl,
      name: contacts[1].name,
      popularity: contacts[1].popularity
    },
    {
      picture: contacts[2].pictureUrl,
      name: contacts[2].name,
      popularity: contacts[2].popularity
    },
    {
      picture: contacts[3].pictureUrl,
      name: contacts[3].name,
      popularity: contacts[3].popularity
    },
    {
      picture: contacts[4].pictureUrl,
      name: contacts[4].name,
      popularity: contacts[4].popularity
    }
    ]
  }

  addRandomContact = () =>{
    let allContacts = this.state.myContacts
    let randomContact = Math.floor(Math.random()*(contacts.length))
    allContacts.push({
      picture: contacts[randomContact].pictureUrl,
      name: contacts[randomContact].name,
      popularity: contacts[randomContact].popularity
    })
    this.setState({
      myContacts: allContacts
    })
  }

  deleteContact = () =>{
    let allContacts = this.state.myContacts.map((eachContact, i)=>{
      
    })
    console.log(allContacts)
  }

  showAllContacts = () =>{
    let listOfContacts = this.state.myContacts.map((eachContact, i)=>{
      return <tr>
        <th><img src ={eachContact.picture} alt="insert contactID"></img></th>
        <th><h3>{eachContact.name}</h3></th>
        <th><h3>{eachContact.popularity}</h3></th>
        <th><button onClick={this.deleteContact}>Delete</button></th>
        {eachContact.key = i}
      </tr>
    })
    return listOfContacts
  }

  sortByName = () =>{
     let sorted = this.state.myContacts.sort(function(a,b){
        var nameA=a.name.toLowerCase()
        var nameB=b.name.toLowerCase()
    if (nameA < nameB) //sort string ascending
        return -1 
    if (nameA > nameB)
        return 1
    return 0 //default return value (no sorting)
      })
      console.log("SortedByName===>", sorted)
      this.setState({
        myContacts: sorted
      })
  }

  sortByPopularity = () =>{
    let sorted = this.state.myContacts.sort(function(a,b){
      var popA = a.popularity
      var popB = b.popularity
      return popB-popA
    })
    console.log("SortedByPopularity===>", sorted)
    this.setState({
      myContacts: sorted
    })

  }
  render() {
    return (
      <div>
      <h1>IronContacts</h1>
      <button onClick={this.addRandomContact}>Add Random Contact</button>
      <button onClick={this.sortByName}>Sort By Name</button>
      <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <table>
          <tr>
            <th><h3>Picture</h3></th>
            <th><h3>Name</h3></th>
            <th><h3>Popularity</h3></th>
            <th><h3>Action</h3></th>
          </tr>
          {this.showAllContacts()}

        </table>
      </div>
    );
  }
}

export default App;
