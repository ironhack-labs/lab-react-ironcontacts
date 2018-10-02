import React, { Component } from "react";
import contacts from "./contacts.json";

export class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts,
      selectedContacts: contacts.slice(0,5)
      
    };
  }

  addContact = () => {
    console.log("pasa")
    let select = this.state.contacts[Math.floor(Math.random() * contacts.length)];

    let newArr = this.state.selectedContacts
    newArr.push(select)
    console.log(this.state.selectedContacts);
    this.setState({
     selectedContacts: newArr
    })

  }
  sortContacts = (type) => {
    let ordered = this.state.selectedContacts.sort((a,b) => {
    
    return type=="name" ? b.name.localeCompare(a.name) :  b.popularity - a.popularity
    })
    this.setState({
      selectedContacts: ordered
    })
  }  

  removeContact = (index) => {
    let deleted = this.state.selectedContacts;
    deleted.splice(index, 1)
    this.setState({
      selectedContacts: deleted
    })
  }
  render() {
    let final = this.state.selectedContacts.map((element, index) => {
      return (
      <tr key={index}>
        <td> <img src={element.pictureUrl} width={100}/></td>
        <td>{element.name}</td>
        <td>{element.popularity.toFixed(2)}</td>
        <td><button onClick={() => this.removeContact(index)}>Delete</button></td>
      </tr>
      )
      
    });

    return (
      <div>
        <h2>IronContacts</h2>
       <button onClick={() => this.addContact()}>Add new Contact</button>
       <button onClick={() => this.sortContacts("name")}> Sort by Name</button>
       <button onClick={() => this.sortContacts("popularity")}> Sort by Popularity</button>
        <table>
          <thead>
          <tr>
            <th>Pictures</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {final}
          </tbody>
          
        </table>
      </div>
    );
  }
}
