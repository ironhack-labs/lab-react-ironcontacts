import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
const firstFiveContacts = [contacts[0],contacts[1],contacts[2],contacts[3],contacts[4]]

class App extends Component {

  state = {
    newContacts:firstFiveContacts
  }

  handleAddButton = (event) =>{
    const index = Math.floor(Math.random()* contacts.length)
    const newArray =[...this.state.newContacts, contacts[index]]
   //  newArray.push(contacts[index])
    this.setState({ newContacts: newArray})

  }

  handleSortByPopularity = (event) =>{
    const newArray =[...this.state.newContacts].sort(function(a,b) {
      return a.popularity - b.popularity;
    })
    this.setState({ newContacts: newArray})

  }

  handleSortByName = (event) => {
    const newArray =[...this.state.newContacts].sort(function compare(a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    })
    this.setState({ newContacts: newArray})
  }

  handleDelete = (contactId,e) =>{
    console.log(e,contactId)
    const index = this.state.newContacts.findIndex(element=> element.id === contactId)
    const newArray = [...this.state.newContacts]
    newArray.splice(index,1)
    this.setState({ newContacts: newArray})
  }

  renderTable = () => {
    return this.state.newContacts.map(contact=> (<tr key={contact.id}>
      <td ><img src={contact.pictureUrl} alt=""/></td>
      <td className="name">{contact.name}</td> 
      <td>{contact.popularity.toFixed(2)}</td>
      <td><button onClick={(e) => this.handleDelete(contact.id, e)}>Delete</button></td>
  </tr>)
    )

  }
  
  render() {
    
    return (
      
      <div className="App">
      
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        
        <div className="titleAndButton">
        <h1>Iron Contacts</h1>
        <button onClick={this.handleAddButton}>Add Random Contact</button>
        <button onClick={this.handleSortByName}>Sort By Name</button>
        <button onClick={this.handleSortByPopularity}>Sort By Popularity</button>
        </div>
        <table>
        <thead>
        <tr>
            <th className="left">Picture</th>
            <th>Name</th>
            <th className="left">Popularity</th>
            <th className="left">Action</th>
        </tr>
        </thead>
        <tbody>
            {this.renderTable()}
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;
