import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  addNewContact() {
    let allTheContacts = [...this.state.contacts];
    let contactLength = contacts.length;
    let randomContact = Math.floor(Math.random() * contactLength);

    allTheContacts.push(contacts[randomContact]);

    this.setState({
      ...this.state,
      contacts: allTheContacts
    });
  }

  sortByName() {
    let allTheContacts = [...this.state.contacts];
    allTheContacts.sort(function(a, b) {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
    });

    this.setState({
      ...this.state,
      contacts: allTheContacts
    });
  }

  sortByPopularity() {
    let allTheContacts = [...this.state.contacts];
    allTheContacts.sort(function(a, b) {
      if (a.popularity > b.popularity) return 1;
      if (a.popularity < b.popularity) return -1;
    });

    this.setState({
      ...this.state,
      contacts: allTheContacts
    });
  }

  removeContact(contactName){
   this.setState({
  ...this.state,
      contacts: this.state.contacts.filter(contact => contact.name != contactName)
    });


  }


  render() {
    return (
      <div className="App">
        <h1 className="Bigtitle">IronContacts</h1>
        <div className="buttons">
          <button onClick={() => this.addNewContact()} className="btn">
            Add Random Contact
          </button>
          <button onClick={() => this.sortByName()} className="btn">
            Sort By name
          </button>
          <button onClick={() => this.sortByPopularity()} className="btn">
            Sort By popularity
          </button>
        </div>
        <table className="body">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
          
            {this.state.contacts.map((contact, idx) => {
              return (
                <React.Fragment key={idx}>
                <Contact
                  name={contact.name}
                  popularity={contact.popularity}
                  pictureUrl={contact.pictureUrl}
                  removeContact={()=> this.removeContact(contact.name)}/>
                  
                </React.Fragment>
                

              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
