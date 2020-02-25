import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contacts from './Contacts';

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

  deleteContact = contactId => {
    const updatedContactsList = this.state.contactsList.filter(contact1 => contact1.id !== contactId);

    this.setState({ contactsList: updatedContactsList });
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
             <Contacts  
               key={contactObj.id}
               {...contactObj}
               clickToDelete = {()=>{
                 this.deleteContact(contactObj.id)
               }}
             />    
            </div>
          );
        })}

      </div>
    );
  }
};

export default App