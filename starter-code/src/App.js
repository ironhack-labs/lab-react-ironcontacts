import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts";

// console.log(contacts);
class App extends Component {
  state = {
    contacts: contacts.splice(0, 5),
    restOfContacts: contacts
  };

  //created a function, contact.map will loop through all the contacts
  //set a parameter called eachContact and index(i)
  //return eachContact details
  showContacts = () => {
    return this.state.contacts.map((eachContact, i) => {
      return (
        <tr key={i}>
          <td>
            <img
              src={eachContact.pictureUrl}
              alt={eachContact.name}
              width="100px"
            />
          </td>
          <td>
            <h2>{eachContact.name}</h2>
          </td>
          <td>{eachContact.popularity}</td>
          <td>
            <button onClick={() => this.deleteContact(i)}>Delete</button>
          </td>
        </tr>
      );
    });
  };

  // addContact = () => {
  //   let newContacts = [...this.state.contacts];
  //   let randomIndex = Math.floor(
  //     Math.random() * this.state.restOfContacts.length
  //   );
  //   let randomContact = this.state.restOfContacts[randomIndex];
  //   let restOfContactsCopy = [...this.state.restOfContacts];
  //   // console.log(randomContact);
  //   restOfContactsCopy.splice(randomIndex, 1);

  //   newContacts.push(randomContact);

  //   this.setState({
  //     contacts: randomContact,
  //     restOfContacts: restOfContactsCopy
  //   });
  // };

  addContact = () => {
    let newContacts = [...this.state.contacts];

    let randomIndex = Math.floor(
      Math.random() * this.state.restOfContacts.length
    );

    let randomContact = this.state.restOfContacts[randomIndex];

    let newRestOfContacts = [...this.state.restOfContacts];

    newRestOfContacts.splice(randomIndex, 1);

    newContacts.push(randomContact);

    this.setState({
      contacts: newContacts,
      restOfContacts: newRestOfContacts
    });
  };

  sortByName = () => {
    let newContacts = [...this.state.contacts];
    let sortedContacts = newContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({
      contacts: sortedContacts
    });
  };

  sortByPopularity = () => {
    let newContacts = [...this.state.contacts];
    let sortedContacts = newContacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contacts: sortedContacts
    });
  };

  deleteContact = index => {
    let newContacts = [...this.state.contacts];
    newContacts.splice(index, 1);
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-title">IronContacts</h1>
        <button onClick={this.addContact}>Add Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* showContacts() will run the function and return the information */}
            {this.showContacts()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
