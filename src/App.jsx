import './App.css';
import contactsList from "./contacts.json";
import React, { Component } from "react";

class App extends Component {
  state = {
    contacts: contactsList,
    displayedContacts: contactsList.slice(0, 5)
  }

  contactsCopy = [...this.state.contacts];
  extractedContacts = this.contactsCopy.splice(0, 5);

  // Iteration 2
  handleAddRandomContact = () => {
    const randomNumber = Math.floor(Math.random() * (this.contactsCopy.length - 0 +1)) + 0;
    const randomContact = this.contactsCopy[randomNumber];

    this.extractedContacts.push(randomContact);
    this.contactsCopy.splice(randomNumber, 1);
    console.log(this.extractedContacts);
    this.setState({displayedContacts: this.extractedContacts});
  }

  // Iteration 3
  handleSortByName = () => {
    const sortedNames = [...this.extractedContacts].sort((a, b) => a.name > b.name ? 1 : -1);
    this.setState({displayedContacts: sortedNames});
  }

  handleSortByPopularity = () => {
    const sortedPopularity = [...this.extractedContacts].sort((a, b) => b.popularity - a.popularity);
    this.setState({displayedContacts: sortedPopularity});
  }

  // Iteration 4
  handleDeleteContact = (index) => {
    console.log("Coucou depuis le delete button");
    this.extractedContacts.splice(index, 1);
    this.setState({displayedContacts: this.extractedContacts});
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div>
          <button className="buttons" onClick={this.handleAddRandomContact}>Add random contact</button>
          <button className="buttons" onClick={this.handleSortByName}>Sort by name</button>
          <button className="buttons" onClick={this.handleSortByPopularity}>Sorty by popularity</button>
        </div>

        <table className="table-content">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th> 
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {this.state.displayedContacts.map((item, index) => (
              <tr key={item.name}>
                <td className="image-container"><img src={item.pictureUrl} alt={index} /></td>
                <td className="contact-name">✨ {item.name} ✨</td>
                <td className="contact-popularity">✨ {item.popularity.toFixed(2)} ✨</td>
                <td><button className="buttons delete-btn" onClick={() => this.handleDeleteContact(index)}>Delete</button></td>
              </tr>
          ))}
        </tbody>     
        </table>
      </div>
    );
  }
}

export default App;
