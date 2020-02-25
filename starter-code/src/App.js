import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';




class App extends Component {
  
  state = {
    contactsList: contacts.slice(0,5)
  }
  
  addRandomContact = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    const updatedContactsList = this.state.contactsList;
    updatedContactsList.push(randomContact);
    this.setState({contactsList: updatedContactsList})
  }

  sortByName = () => {
    let listToSort = this.state.contactsList;
    let sortedList = listToSort.sort(function(a,b) {
      if (a.name < b.name)
     return -1;
  if (a.name > b.name)
     return 1;
  if (a.name === b.name)
    return 0;
    }
    );
    this.setState({contactsList:sortedList});
  }
  
  sotByPopularity = () => {
    let listToSort = this.state.contactsList;
    let sortedList = listToSort.sort(function(a,b) {
      return a.popularity - b.popularity;
    }
    );
    this.setState({contactsList:sortedList});
  }

  handleDelete = (contactId) => {
    let listToUpdate = this.state.contactsList;
    let updatedList = listToUpdate.filter( (contactObj) => {
      return (contactObj.id !== contactId)
    }
    );
    this.setState({contactsList:updatedList});

  }



  render() {
    return (
      <div className="App">
        <h1>Ironhack Contacts</h1>

        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName} >Sort by Name</button>
        <button onClick={this.sotByPopularity}>Sort by Popularity</button>

        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </thead>
          <tbody>
            {this.state.contactsList.map( (contactObj, index) => {
                  return (
                    <tr key={contactObj.id}> 
                      <td> <img src={contactObj.pictureUrl} alt="actor face" /> </td>
                      <td> {contactObj.name} </td>
                      <td> {contactObj.popularity} </td>
                      <button onClick= { ()=> this.handleDelete(contactObj.id) } >Delete</button>
                      </tr>
                  ) 
                }
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
