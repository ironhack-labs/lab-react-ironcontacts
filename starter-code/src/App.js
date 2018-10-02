import React, { Component } from "react";
import contacts from "./contacts.json";
import logo from "./logo.svg";
import "./App.css";

let fiveContacts = contacts.slice(0, 5);


class App extends Component {
  constructor(){
    super()
    this.state ={
      contact: fiveContacts
    }
  }
  pictRandom = () =>{
    let random = contacts[Math.floor(Math.random()*contacts.length)];
    fiveContacts.push(random);
    this.setState({contact: fiveContacts})
  }
  sortName = () =>{
    fiveContacts.sort((a,b) => a.name > b.name ? 1: -1)
    this.setState({contact: fiveContacts})
  }

  sortPopu = () =>{
    fiveContacts.sort((a,b) => a.popularity < b.popularity ? 1: -1)
    this.setState({contact: fiveContacts})
  }

  onDelete = (i) => {
    fiveContacts.splice(i,1)
    this.setState({contact: fiveContacts})
  }
  render() {
    return (
      <table className="App" style={{margin:"0 auto"}}>
        <tr>
          <td></td>
          <td>
            <h1>IronContacts</h1>
          </td>
        </tr>
        <tr>
         <td> <button onClick={this.pictRandom}>Add Random Contact Guapísimo</button></td>
          <td><button onClick={this.sortName}>Sort by name</button></td>
          <td><button onClick={this.sortPopu}>Sort by popularity</button></td>
        </tr>
        <tr>
          <th>
            <h1>Picture</h1>
          </th>
          <th>
            <h1>Name</h1>
          </th>
          <th>
            <h1 >Popularity</h1>
          </th>
          <th>
            <h1>Action</h1>
          </th>
        </tr>
        {this.state.contact.map((contact,i) => (
          <tr>
            <td>
              <img src={contact.pictureUrl} width={75} height={100} />
            </td>
            <td>
              <h2>{contact.name}</h2>
            </td>
            <td>
              <h2>{contact.popularity.toFixed(2)}</h2>
            </td>
            <td>
              <button onClick={() => this.onDelete(i)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

export default App;
