import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends Component {

  state = {
    contacts: contacts.splice(0,5),
    contactsFull: contacts
  };

  
  addRandom = () => {
    let randomize = Math.floor(Math.random()* this.state.contactsFull.length)
    let randomCeleb =  this.state.contactsFull[randomize];

    let newContacts = [...this.state.contacts]
    newContacts.push(randomCeleb)

    this.setState({
      contacts: newContacts
    })
  } 

  sortByName = () => {
    let newContacts = [...this.state.contacts]
    newContacts.sort((a,b) => {
      if ( a.name > b.name) {
        return 1;
      }
      if ( a.name < b.name) {
        return -1;
      }
      return 0
    })
    this.setState({
      contacts: newContacts
    })
  }

  sortByPop = () => {
    let newContacts = [...this.state.contacts]
    newContacts.sort((a,b) => {
      if ( a.popularity > b.popularity) {
        return -1;
      }
      if ( a.popularity < b.popularity) {
        return 1;
      }
      return 0
    })
    this.setState({
      contacts: newContacts
    })
  }

  deleteCeleb = (i) => {
    let newContacts = [...this.state.contacts]
    newContacts.splice(i,1)
    this.setState({
      contacts: newContacts
    })
  }

  render() {

    return (
      
      <div className="App">

        <h1>Iron Contacts</h1>

        <div className="btnContainer">
          <button onClick={this.addRandom}>Add Random Celebrity</button>
          <button onClick={this.sortByName}>Sort By Name</button>
          <button onClick={this.sortByPop}>Sort By Popularity</button>
        </div>

        <div className="tableContainer">
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {this.state.contacts.map((celeb,i) => {
              return (
                <tr>
                  <td><img src={celeb.pictureUrl} width="50px"/></td>
                  <td>{celeb.name}</td>
                  <td>{celeb.popularity}</td>
                  <td><button onClick={() => this.deleteCeleb(i)}>Delete</button></td>
                </tr>
              )
            })}
          </table>
        </div>

      </div>
    );
  }
}

export default App;
