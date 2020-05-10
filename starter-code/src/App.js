import React, { Component } from "react";
import "./App.css";
import ContactsList from "./components/ContactsList";
import contacts from "./contacts.json";

class App extends Component {

  state = {
    contactData: contacts.slice(0, 5),
  };

  

 addRandomContact = () => {
    let min = 5;
    let max = contacts.length;
    const randomIndex = Math.floor(Math.random() * (max - min)) + min;
    const copy = [...this.state.contactData];
    const newContact = contacts[randomIndex];
    copy.push(newContact);
    this.setState({ contactData: copy });
  };

  sortByName = () => {
    this.setState({
      contactData: this.state.contactData.slice().sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      })
    });
  };

  sortByPopularity = () => {
    this.setState({
      contactData: this.state.contactData.slice().sort((a, b) => {
        return b.popularity - a.popularity;
      })
    });
  };

  deleteContact = index => {
    const withoutContact = [...this.state.contactData];
    withoutContact.splice(index, 1);

    this.setState({
      contactData: withoutContact
    });
  };



  render() {
    return (
      <div className="App">
        
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>


        <ContactsList
          deleteContact={this.deleteContact}
          contacts={this.state.contactData}
        />
      </div>
    );
  }  
}

export default App;
