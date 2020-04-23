import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  // state = {
  //   newContacts: contacts.slice(0, 5),
  //   randomContacts: [...contacts].splice(6, contacts.length),
  // };

  state = {
    contactsShowing: contacts.slice(0, 5),  //0,1,2,3,4 -first 5 
    remainingContacts: contacts  //5 - 199, until theres no one left 
  }

  //Iteration 1 - Display Contacts / Movie Stars
  displayFive = () => {
    return this.state.contactsShowing.map((eachContact) => {
      return (
        <tr key={eachContact.name}>
          <td>
            <img
              src={eachContact.pictureUrl}
              alt="celeb face"
              width="160px"
              height="240px"
            />
          </td>
          <td>{eachContact.name}</td>
          <td>{parseFloat(eachContact.popularity).toFixed(2)}</td>
          <td>
            <button onClick={this.removeButton}>Remove Contact</button>
          </td>
        </tr>
      );
    });
  };

  removeButton = (index) => {
    let contactsShowingCopy = [...this.state.contactsShowing]
    contactsShowingCopy.splice(index,1)
    this.setState({contactsShowing: contactsShowingCopy})
  }

  //Iteration 2 Add Random Contacts / Movie Stars
  addRandomContact = () => {
    if(this.state.remainingContacts.length > 0){
      let randomContact = this.state.remainingContacts[
        Math.floor(Math.random() * this.state.remainingContacts.length)
      ]; // 0-193
      //console.log('add rando',this.state.randomContacts.length)
      let copyNewContacts = [...this.state.contactsShowing];
      copyNewContacts.push(randomContact);

      let randomContactsCopy = [...this.state.remainingContacts];
      randomContactsCopy.splice(randomContact, 1);
      console.log("add rando", randomContactsCopy.length);

      this.setState({
        contactsShowing: copyNewContacts,
        remainingContacts: randomContactsCopy,
      });
    }
  }


  //Iteration 3 Sort by Name and Popularity

  //Sort by Name
  sortByName = () => {
    let contactsShowingCopySorted = [...this.state.contactsShowing].sort((a,b)=>a.name.localeCompare(b.name))
    this.setState({
      contactsShowing:contactsShowingCopySorted
    })
  }

  sortPopularity = () => {
    let contactsShowingCopySorted = [...this.state.contactsShowing].sort((a,b)=>b.popularity - a.popularity)
    this.setState({
      contactsShowing:contactsShowingCopySorted
    })
  }

  render() {
    console.log(this.state.contactsShowing);
    console.log(contacts);
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Iron Contacts</h1>
        </header>
        <button onClick={this.addRandomContact}> Add Random Contact</button>
        <button onClick={this.sortByName}> SortByName</button>
        <button onClick={this.sortPopularity}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>{this.displayFive()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
