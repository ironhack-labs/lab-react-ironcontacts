import React, { Component } from 'react';
import './App.css';
import  Contacts from "./Contacts"
import contacts from './contacts.json';
class App extends Component {
  constructor(){
    super();
    this.state = {
      contactsInfo: contacts.slice(0,5),
       
    }
  }
  addNewContact() {
    let allTheContacts = [...this.state.contactsInfo];
    let contactsLength = contacts.length;
    let randomContacts = Math.floor(Math.random() * contactsLength);
    allTheContacts.push(contacts[randomContacts]);
    
    
    this.setState({
      ...this.state,
      contactsInfo: allTheContacts
    })
  }

  
  render() {
    return (
      <div className="App">
       
        <h1>IronContacts</h1>
        <div className="containerButton">
         <button onClick={() => this.addNewContact()}> Add Random Concat</button>
          <button onClick={() =>this.sortByName()}> Sort By Name</button>
          <button onClick={() =>this.sortByPopularity()}> Sort By Popularity</button>
        </div>
        <tr className="titles">
            <th>
                Picture
            </th>
            <th>
                Name
            </th>
            <th>
                Popularity
            </th>
        </tr>
        <tr>
        {this.state.contactsInfo.map((contacts )=>{
          return  <Contacts
          pictureUrl = {contacts.pictureUrl}
          name = {contacts.name}
          popularity =  {contacts.popularity}>
          </Contacts>
        })
        }
        

      </tr>
      </div>
    );
  }
}

export default App;
