import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contactsInTable: contacts.slice(0, 5),
    contactOutsideOfTheTable: contacts.slice(5),
  };


  AddRandomContact=()=>{
    let updatedContactsInTable =[];
    let remainingContacts = this.state.contactOutsideOfTheTable
    let randomContact = Math.floor(Math.random()*this.state.contactOutsideOfTheTable.length)
    console.log(randomContact)
    updatedContactsInTable = this.state.contactsInTable
    updatedContactsInTable.push(remainingContacts[randomContact])
    remainingContacts.splice(randomContact, 1)
    this.setState({
      contactsInTable: updatedContactsInTable,
      contactOutsideOfTheTable:remainingContacts,
    });
    console.log(this.state.contactsInTable)


  }


 render()
   {
    return (
      <div className="App">
      <h1>Ironcontacts</h1>
      <button onClick={this.AddRandomContact}>Add a random contact</button>
        <table className="Table">   
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contactsInTable.map(function(celebrity) {
            return (
              <tr key={celebrity.id}>
                <td>
                  <img src={celebrity.pictureUrl} alt="" />
                </td>
                <td>{celebrity.name}</td>
                <td>{celebrity.popularity}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;
