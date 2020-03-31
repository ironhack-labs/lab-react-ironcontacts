import React, { Component } from 'react';
//import logo from './logo.svg';
import contacts from './contacts.json';
import './App.css';

class App extends Component {

  state = {
    contacts: contacts,
    fiveCont: [...contacts.slice(0,5)],
    rest: [...contacts.slice(5)]
  }

 


  addRandomContact = () => {
   let copyFiveCont = [...this.state.fiveCont]
    let randomContact = this.state.rest[Math.floor(Math.random()*(this.state.rest.length))]
    copyFiveCont.push(randomContact)
    this.setState({ fiveCont: copyFiveCont })
  } 


  sortByName = () => {
    let copyFiveCont = [...this.state.fiveCont]
    copyFiveCont.sort((a,b) => (a.name > b.name) ? 1 : -1)
    this.setState({ fiveCont: copyFiveCont })
  }

  sortByPopularity = () => {
    let copyFiveCont = [...this.state.fiveCont]
    copyFiveCont.sort((a,b) => (a.popularity > b.popularity) ? 1 : -1)
    this.setState({ fiveCont: copyFiveCont })
  }

  deleteContact = (elemId) => {
    let copyFiveCont = [...this.state.fiveCont]
    let filtered = copyFiveCont.filter((elem => copyFiveCont.indexOf(elem) !== elemId))
    this.setState({ fiveCont: filtered })
  }
  
  
  render() {

    return (
      <div className="App">
        <h1><b>IronContacts</b></h1>
        <button className="button-add" onClick={() => this.addRandomContact()}>Add Random Contact</button>
        <button className="button-sort-name" onClick={() => this.sortByName()}>Sort by name</button>
        <button className="button-sort-popularity" onClick={() => this.sortByPopularity()}>Sort by popularity</button>
        <table className="table">
          <thead>

          <tr>
            <th><b>Picture</b></th>
            <th><b>Name</b></th>
            <th><b>Popularity</b></th>
            <th><b>Action</b></th>
          </tr>
          </thead>
          <tbody>


            {this.state.fiveCont.map((elements,index) => {
              return (  
              <tr key={index}>
                <td ><img  src={elements.pictureUrl} style={{width: "90px", heigh: "135px"}} alt="IronContact"/></td>
                <td >{elements.name}</td>
                <td >{elements.popularity.toFixed(2)}</td>
                <td ><button onClick={() => this.deleteContact(index)}>Delete</button></td>
              </tr>
              )
            })}
          </tbody>
            
          
        </table>
      </div>
    );
  }
}

export default App;
