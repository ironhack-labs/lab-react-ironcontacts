import React, { Component } from "react";
import "./App.css";
import Contacts from "./Contacts";
import contacts from "./contacts.json";
class App extends Component {
  constructor() {
    super();
    this.state = {
      contactsInfo: contacts.slice(0, 5)
    };
  }
  addNewContact() {
    let allTheContacts = [...this.state.contactsInfo];
    let contactsLength = contacts.length;
    let randomContacts = Math.floor(Math.random() * contactsLength);
    allTheContacts.push(contacts[randomContacts]);

    this.setState({
      ...this.state,
      contactsInfo: allTheContacts
    });
  }

  sortByName() {
    let allTheContacts = [...this.state.contactsInfo];
   
    this.setState({
      ...this.state,
      contactsInfo: allTheContacts.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
      })
    });
  }

  sortByPopularity() {
    let allTheContacts = [...this.state.contactsInfo];
   
    this.setState({
      ...this.state,
      contactsInfo: allTheContacts.sort((a, b) => {
        if (a.popularity > b.popularity) return 1;
        if (a.popularity < b.popularity) return -1;
      })
    });
  }

  deleteContact(contactsName) {
    this.setState({
      ...this.state,
      contactsInfo: this.state.contactsInfo.filter(contacts => contacts.name !== contactsName)
    })
  }

  render() {
    return (
      <div className="app">
        <h1>IronContacts</h1>
        <div className="containerButton">
          <button onClick={() => this.addNewContact()}> Add Random Contact</button>
          <button onClick={() => this.sortByName()}> Sort By Name</button>
          <button onClick={() => this.sortByPopularity()}> Sort By Popularity</button>
        </div>
        <table width="600px">
          <thead className="titles">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.state.contactsInfo.map((contacts, idx) => {
                return (
                  <React.Fragment key={idx}>
                  <Contacts
                    
                    pictureUrl={contacts.pictureUrl}
                    name={contacts.name}
                    popularity={contacts.popularity}
                    deleteContact={() => this.deleteContact(contacts.name)}
                  />
                  
                  </React.Fragment>
                )
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
