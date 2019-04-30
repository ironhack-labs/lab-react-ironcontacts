import React, { Component } from "react";
import "./css/App.css";
import contacts from "./contacts.json";
import Row from "./Row"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.splice(0, 5)
    };
  }

  addRandomContact() {
    let rand = Math.round(Math.random() * contacts.length)
    
    const availableContacts = contacts.filter(contact => {return this.state.contacts.map(c => contact.name.indexOf(c.name) === -1)})
    
    this.state.contacts.push(availableContacts[rand])

    this.setState({
      ...this.state,
      contacts: this.state.contacts
    })
  }

  sortContact(val) {
    if (val === "name") {
      this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))

      this.setState({
        ...this.state,
        contacts: this.state.contacts
      })
    }
    if (val === "lastname") {
      this.state.contacts.sort((a, b) => a.name.split(" ")[1].localeCompare(b.name.split(" ")[1]))

      this.setState({
        ...this.state,
        contacts: this.state.contacts
      })
    }
    if (val === "popularity") {
      this.state.contacts.sort((a, b) => b.popularity - a.popularity)

      this.setState({
        ...this.state,
        contacts: this.state.contacts
      })
    }
  }

  deleteItem(val) {

    this.setState({
        ...this.state,
        contacts:  this.state.contacts.filter(contact => contact.name !== val )
      })

  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.addRandomContact()} >Add Random Contact</button>
        <button onClick={() => this.sortContact("name")} >Sort by Firstname</button>
        <button onClick={() => this.sortContact("lastname")} >Sort by Lastname</button>
        <button onClick={() => this.sortContact("popularity")} >Sort by Popularity</button>
        <table>
          <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          </thead>
          <tbody>
          {this.state.contacts.map((contact, idx) => {
            return <Row {...contact} key={idx} func={() => this.deleteItem(contact.name)}/>
          })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
