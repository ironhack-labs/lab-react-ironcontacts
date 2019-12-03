import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import IronContacts from './ironContacts/ironContacts'


class App extends Component {
 constructor() {
   super();
   this.contacts = [...contacts]
   this.fiveContacts = this.contacts.splice(0,5);
   this.state = {
     actors: this.fiveContacts
   }

  

 }

  render() {
    return (
      <div className="App">
        <button>Add Random</button>
        <button>Sort by Name</button>
        <button>Sort by Popularity</button>

       {this.state.actors.map((actor,idx) => 
         <IronContacts name = {actor.name} img = {actor.pictureUrl} popularity = {actor.popularity} key = {idx} ></IronContacts>
       )}
       
       </div>
    );
  }
}

export default App;
