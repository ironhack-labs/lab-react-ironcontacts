import React from "react";
import './App.css';
import './styling/Buttons.css';

import contacts from "./contacts.json"
import ContactsTable from "./components/ContactsTable"

class App extends React.Component {
  constructor() {
    super()
    let newList = [...contacts]
    let shortList = newList.slice(0, 5)
    this.state = {
      contacts: shortList
    }
  }

  addRandomContact = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    let contactsCopy = [...this.state.contacts]
    contactsCopy.push(randomContact)
    this.setState({
      contacts: contactsCopy
    });
  };

  sortContactsByName = () => {
    let sortedList = this.state.contacts.sort(function (a, b) {
      let nameA = a.name.toUpperCase(); 
      let nameB = b.name.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contacts: sortedList
    })
  }

  sortContactsByPopularity = () => {
    let sortedList = this.state.contacts.sort((a, b) => {
      return b.popularity - a.popularity
    })
    this.setState({
      contacts: sortedList
    })
  }

  deleteContact = (index) => {
    let newList = [...this.state.contacts]
    newList.splice(index, 1)
    this.setState({
      contacts: newList
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">IronContacts</h1>

        <div id="buttons">
          <button className="addButton" onClick={this.addRandomContact}>
            Add random Contact</button>
          <button className="sortByNameButton" onClick={this.sortContactsByName}>
            Sort by name</button>
          <button className="sortByPopularityButton" onClick={this.sortContactsByPopularity}>
            Sort by popularity</button>
        </div>
        <ContactsTable
          contacts={this.state.contacts}
          deleteContact={this.deleteContact} />
      </div>
    )
  }
}

export default App;
