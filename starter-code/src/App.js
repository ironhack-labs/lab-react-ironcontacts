import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import IronContact from './IronContact';

class App extends Component {
  
  
state = {
  contacts: contacts,
  displayFive : contacts.splice(0,5)
} 
  // displayFive() {

  //   let newState = {...this.contacts}
  
  //   newState.slice(0, 5);

  //   this.setState(newState);
  

addRandomContact(){
let newState ={
  ...this.state
};

  let randomState = contacts[Math.floor(Math.random() * (contacts.length) )];
  newState.displayFive.push(randomState)
  this.setState(randomState)
  console.log(randomState)
}

sortContact(){
  let newState ={
    ...this.state
  };
  
newState.displayFive.sort((a, b) => a.name.localeCompare(b.name));
this.setState(newState)
}
sortContactByPopularity(){
  let newState ={
    ...this.state
  };
  
newState.displayFive.sort((a, b) => b.popularity - a.popularity);
this.setState(newState)
}

deleteContact(contactID) {
  
  let newState = {...this.state}
  let filteredContacts = newState.contacts.filter((contact) => contact.id !== contactID)

  newState.contacts = filteredContacts

  this.setState(newState)
}


  render() {
    return (
      <div className="App">
         <h1>IronContacts</h1>
         <nav>
           <button class="button is-medium is rounded" onClick={()=> this.addRandomContact()}>Add Random Contact</button>
           <button class="button is-medium is rounded" onClick={() => this.sortContact()}>Sort by name</button>
           <button class="button is-medium is rounded" onClick={() => this.sortContactByPopularity()}>Sort by Popularity</button>
           
         </nav>
       
          <table>
          <tr>
           <td><h2>Picture</h2></td>
            <td><h2>Name</h2></td>
            <td><h2>Popularity</h2></td>
            </tr>
            {this.state.displayFive.map(contact=> 
              <IronContact clickToDelete={()=> this.deleteContact(contact.id)} key={contact._id} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity}></IronContact>
              )
              }
            
      </table>
      </div>
    );
  }
}

export default App;
