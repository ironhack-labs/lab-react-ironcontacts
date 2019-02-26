import React, { Component } from "react";
import contacts from "../contacts.json";
import Contacto from "./Contacto"

const firstContacts = contacts.slice(0, 5);

class Contacts extends Component {
  state = {
    contactList: firstContacts
  };

  addRandomContact = () => {
    if (this.state.contactList.length === contacts.length) {
      alert("No more contacts to add");
      return
    }
    let nameList = this.state.contactList.map(el=>el.name)
    let filteredList = contacts.filter(el=>nameList.indexOf(el.name)< 0) //to avoid duplicates when clicking the randomm contact button
    let randomContact = Math.floor(Math.random() * filteredList.length);
    let newContactList = this.state.contactList.slice();
    newContactList.push(filteredList[randomContact]);
    this.setState({
        contactList: newContactList
    });
  };

  nameAscending = true
  sortByName = () => {
    let newContactList = this.state.contactList.slice().sort((a,b)=> this.nameAscending === true ? (a.name > b.name ? 1 : -1) : (a.name > b.name ? -1 : 1) )
    this.nameAscending = !this.nameAscending
    this.setState({
      contactList: newContactList
  });
  }

  lastNameAscending = true
  sortByLastName = () => {
    let newContactList = this.state.contactList.slice().sort((a,b)=> this.lastNameAscending === true ? ((a.name.split(" ")[1]||"") > (b.name.split(" ")[1]||"") ? 1 : -1) : ((a.name.split(" ")[1]||"") > (b.name.split(" ")[1]||"") ? -1 : 1) )
    this.lastNameAscending = !this.lastNameAscending
    this.setState({
      contactList: newContactList
  });
  }

  sortByPopularity = () => {
    let newContactList = this.state.contactList.slice().sort((a,b)=> b.popularity - a.popularity)
    this.setState({
      contactList: newContactList
  });
  }

  deleteContact = (index) => {
    let newContactList = this.state.contactList.slice()
    newContactList.splice(index,1)
    this.setState({
      contactList: newContactList
  });
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add random Contact</button>
        <button onClick={this.sortByName}>Sort by first name: {this.nameAscending ? "A-Z" : "Z-A"} </button>
        <button onClick={this.sortByLastName}>Sort by last name: {this.lastNameAscending ? "A-Z" : "Z-A"} </button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
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
            {this.state.contactList.map((contact, index) => <Contacto key = {index} {...contact} delete={this.deleteContact}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
