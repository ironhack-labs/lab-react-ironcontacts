import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React, { Component } from "react";

export class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
    allContacts: contacts
  };

  handleRandomClick = ()=>{
    let randContact = this.state.allContacts[Math.floor(Math.random()*this.state.allContacts.length)];
    const stateCopy = [...this.state.contacts]
    stateCopy.push(randContact)
    this.setState({contacts: stateCopy})
  }

  handleNameSort = ()=>{
    const stateCopy = [...this.state.contacts]
    const sorted = stateCopy.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
    this.setState({contacts: sorted})
  }

  handlePopSort = () =>{
    const stateCopy = [...this.state.contacts];
    const sorted = stateCopy.sort(function(a, b){
      if(a.popularity < b.popularity) { return 1; }
      if(a.popularity > b.popularity) { return -1; }
      return 0;
  })
    this.setState({contacts: sorted})
  }

  handleDeleteClick = (id)=>{
    const stateCopy = [...this.state.contacts];
    const indexToRemove = stateCopy.findIndex(contact=>contact.id === id);
    stateCopy.splice(indexToRemove, 1)
    this.setState({contacts:stateCopy})
  }

  render() {
    return (
      <>
      <div>
      <button onClick={this.handleRandomClick}>Add Random Contact</button>
      <button onClick={this.handleNameSort}>Sort by name</button>
      <button onClick={this.handlePopSort}>Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map((contact) => {
           return ( <tr>
              <td><img src={contact.pictureUrl} alt="img" style={{height:'100px'}}/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td><button onClick={()=>this.handleDeleteClick(contact.id)}>Delete</button></td>
              </tr>)
          })}
        </tbody>
      </table>
      </>
    );
  }
}

export default App;
