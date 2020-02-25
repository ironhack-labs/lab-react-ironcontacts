import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  state= {
    contactsList: contacts.slice(0, 5),
  };

  randomContact = () => {
    const randomNumber = Math.floor(Math.random() * contacts.length);
    const newRandomContact = contacts.splice(randomNumber, 1);
    // OPCION 2
    // const newRandomContact = contacts[randomNumber];

    let updatedList = [...this.state.contactsList, newRandomContact[0]];
    this.setState({contactsList: updatedList});
    // escribir aca OPCION 2

    console.log(newRandomContact[0]);
    console.log(updatedList);
  };

  sortByName = () => {
    const sortedContactsList = this.state.contactsList.sort(function (objA, objB) {
      if (objA.name < objB.name ) {
        return -1;

      } else if (objA.name > objB.name) {
        return 1;
      } else {
        return 0;
      }
    })
    this.setState({contactsList: sortedContactsList})
  }


  sortByPopularity = () => {
    const sortedContactsList = this.state.contactsList.sort(function (objA, objB) {
      if (objA.popularity < objB.popularity ) {
        return 1;

      } else if (objA.popularity > objB.popularity) {
        return -1;
      } else {
        return 0;
      }
    })
    this.setState({contactsList: sortedContactsList})
  }


  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button onClick= {this.randomContact} >Add random contact</button>
      <button onClick= {this.sortByName}>Sort by Name</button>
      <button onClick= {this.sortByPopularity}>Sort by popularity</button>

        {this.state.contactsList.map(contactObj => {
          return (
            <div className="actor-card" key={contactObj.id}>
              <img src={contactObj.pictureUrl} alt=""/>
              <h1>{contactObj.name}</h1>
              <h2>{contactObj.popularity}</h2>            
            </div>
          );
        })}

      </div>
    );
  }
};

export default App