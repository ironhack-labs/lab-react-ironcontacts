import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contactsFive: contacts.slice(0, 5),
  };

  addRandom = () => {
    const copyContacts = [...this.state.contactsFive];
    console.log(copyContacts);
    const getRandom = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(getRandom);
    copyContacts.unshift(getRandom);
    //ptite condition on n unshift que si le get random et le copyContacts sont differrents

    //if ( copyContacts === getRandom)
    if (!copyContacts.includes(getRandom)) {
      copyContacts.unshift(getRandom);
    }

    this.setState({ contactsFive: copyContacts });
  };

  //F**ck Yeah !

  //sort by name

  //en fait il y a un soucis sur mes duplicates

  sortByName = () => {
    let copieContact = [...this.state.contactsFive];
    console.log(copieContact);
    copieContact.sort((arg1, arg2) => {
      if (arg1.name > arg2.name) {
        return 0;
      } else if (arg1.name < arg2.name) {
        return -1;
      }
    });
    this.setState({ contactsFive: copieContact });
  };

  //this is getting fun :)

  //Sort by popularity

  sortbyPopularity = () => {
    const copyCat = [...this.state.contactsFive];
    copyCat.sort((arg1, arg2) => {
      if (arg1.popularity < arg2.popularity) {
        return 0;
      } else if (arg1.popularity > arg2.popularity) {
        return -1;
      }
    });
    this.setState({ contactsFive: copyCat });
  };
  handleRemoveContact(contactsToRemoveIndex) {
    const duplicateContacts = [...this.state.contactsFive];

    duplicateContacts.splice(contactsToRemoveIndex, 1);

    this.setState({ contactsFive: duplicateContacts });
  }

  //Remove :

  render() {
    return (
      
      <div>

        <h1>Contacts</h1>
        <div className ='superContainer'>
        <button onClick={this.addRandom}>Add Random</button>
        <button onClick={this.sortbyPopularity}>Sort by Popularity</button>
        <button onClick={this.sortByName}>Sort Alphabetically</button>
        
        
        <table>
        <div className='duperContainer'>
          
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody >
            
            {this.state.contactsFive.map((babies, index) => (
              
              <tr className="box" key={babies.id}>
                <img src={babies.pictureUrl}></img>
                <th>{babies.name}</th>
                <th>{babies.popularity.toFixed(2)}</th>
                <button className='delete' onClick={() => this.handleRemoveContact(index)}>
                  Remove 
                </button>
              </tr>
              
            ))}
            
            
          </tbody>
          </div>
        </table>
        </div>
      </div>
    );
  }
}

export default App;
