import React, { Component } from "react";
import contacts from "../../contacts.json";
import "./ListContacts.css";

export default class ListContacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  addRandomContact = () => {
    let randomContact = contacts[parseInt(Math.random() * Object.keys(contacts).length)]
    let newContacts = [...this.state.contacts]
    newContacts.push(randomContact)
    this.setState({...this.state, contacts: newContacts});
  }

  sortByName = () =>{
    let newContactsSorted = [...this.state.contacts]
    newContactsSorted.sort(function(a,b){
        if(a.name<b.name){return -1}
        if(a.name>b.name){return 1}
        return 0;
    })
      this.setState({...this.state, contacts:newContactsSorted})
  }

  sortByPopularity =() =>{
      let newSortedByPopoularity = [...this.state.contacts]
      newSortedByPopoularity.sort(function(a,b){
          if(a.popularity<b.popularity){return 1}
          if(a.popularity>b.popularity){return -1}
          return 0;
      })
      this.setState({...this.state, contacts : newSortedByPopoularity})
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <div className = "groupButtons">
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        </div>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>
          <tbody />

          {this.state.contacts.map((contact,i) => (
            <tr key={i}>
              <td>
                <img
                  className="image-contact"
                  src={contact.pictureUrl}
                  alt=""
                />
              </td>
              <td>{contact.name}</td>
              <td>{parseFloat(contact.popularity).toFixed(2)}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
