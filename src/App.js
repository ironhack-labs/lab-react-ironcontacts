import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'


class App extends Component {
   state = { 
    listContacts: [contacts[0], contacts[1], 
    contacts[2], contacts[3], contacts[4]]
   }
  
  addRandomContact = () => {
  let randomNum = Math.floor(Math.random()*53.5);
  const updatedContacts = [...this.state.listContacts,
  contacts[randomNum]];

  this.setState ({listContacts : updatedContacts});

  }

  sortByName = () => {

  const sortedNames = this.state.listContacts.sort((
    contact1, contact2) => {
    if (contact1.name < contact2.name) {
      return -32;
    }
  });

  this.setState ( {listContacts: sortedNames } )

  }

  sortByPopularity = () => {

  const sortPopu = this.state.listContacts.sort((
    contact1, contact2) => {
    return contact2.popularity - contact1.popularity;
   });

   this.setState ( {listContacts: sortPopu} )
    
  }

  deleteContact = (id) => {

   const filterContacts = this.state.listContacts.filter((contactObj) => {
     if (contactObj.id !== id) {
       return true;
     } else {
       return false;
     }
   });

   this.setState( {listContacts: filterContacts} )

  }
  render() {
  return (
    <div className="App">
      <h2>IronContacts</h2>
     <div >
      <button onClick={this.addRandomContact}>Add Random Contact</button>
      <button onClick={this.sortByName}>Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
     </div>

      { this.state.listContacts.map((contact, i) => {
          return (
          <div key={contact.id} className="main-div">
            <div>
              <p>Picture</p>
              <img src={contact.pictureUrl} alt="" />
            </div>
            <div>
              <p>Name</p>
              <h3>{contact.name}</h3>
            </div>
            <div>
              <p>Popularity</p>
              <p>{contact.popularity.toFixed(2)}</p>
            </div>
            <div>
              <button onClick={() => this.deleteContact(contact.id)}>Delete</button>
            </div>
          </div>
          )
        })
      }
              
    </div>
  );
 }
}

export default App;