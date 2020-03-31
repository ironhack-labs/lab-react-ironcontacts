import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import ContactRow from "./ContactRow/ContactRow";

class App extends Component {
  state = {
    contactsInTable: contacts.slice(0, 5),
    contactOutsideOfTheTable: contacts.slice(5)
  };

  addRandomContact = () => {
    let updatedContactsInTable = [];
    let remainingContacts = this.state.contactOutsideOfTheTable;
    let randomContact = Math.floor(
      Math.random() * this.state.contactOutsideOfTheTable.length
    );
    updatedContactsInTable = this.state.contactsInTable;
    updatedContactsInTable.push(remainingContacts[randomContact]);
    remainingContacts.splice(randomContact, 1);
    this.setState({
      contactsInTable: updatedContactsInTable,
      contactOutsideOfTheTable: remainingContacts
    });
  };

  sortByPopularity = () => {
    let sortedContactsInTable = this.state.contactsInTable.sort(function(a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
    });
    this.setState({
      contactsInTable: sortedContactsInTable
    });
  };
    
  sortByName = () => {
    let sortedContactsInTable = this.state.contactsInTable.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
    });
    this.setState({
      contactsInTable: sortedContactsInTable
    });
  };
  
  deleteCelebrity = celebrityToDelete => {
    const celebritiesCopy = [...this.state.contactsInTable];
    const filtered = celebritiesCopy.filter(celebrity => celebrity.id !== celebrityToDelete.id)
    this.setState({
      contactsInTable: filtered
  })}

  render() {
    return (
      <div className="App">
        <h1>Ironcontacts</h1>
        <button onClick={this.addRandomContact}>Add a random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table className="Table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
               <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsInTable.map((celebrity) => {
              return (
              <ContactRow key={celebrity.id} celebrityProp={celebrity} deleteCelebrity={()=>this.deleteCelebrity(celebrity)} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

/*
*/
