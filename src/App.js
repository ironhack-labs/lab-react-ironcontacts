import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Card from './Card'

class App extends Component {
  state = {
    contacts:contacts.slice(0,5)
  }

  randomContact(){
  const randomContact = this.state.contacts;
  let randomNumber = Math.floor(Math.random() * contacts.length)
  randomContact.push(contacts[randomNumber])
  this.setState({contacts:randomContact});
  };

  sortByPopularity (){
    const  listContacts  = this.state.contacts
    const sortedContacts = listContacts.sort((a,b)=>{
      return b.popularity-a.popularity
    })
    this.setState({contacts:sortedContacts})
  }

  sortByName (){
    const  nameContacts  = this.state.contacts
    const sortedContacts = nameContacts.sort((a,b)=>{
      return a.name.localeCompare(b.name)
    })
    this.setState({contacts:sortedContacts})
  }

  deleteCard = (cardIndex) => {
    const filtered = this.state.contacts.filter(contact => contact.id !== cardIndex)
    this.setState({
        contacts: filtered,
    });
    };


  render(){
    const { contacts } = this.state;
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="buttons">
              <button onClick={() => this.randomContact()}>Add Random Contact</button>
              <button onClick={() => this.sortByName()}>Sort by name</button>
              <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
      </div>
      <table>
          <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
          </tr>
          {  
            contacts.map(contact => {
                return ( <Card key={contact.id} name={contact.name} pictureUrl={contact.pictureUrl} popularity={contact.popularity} clickToDelete={() => this.deleteCard(contact.id)}/>
                        
            )})
            }
        </table>
    </div>
  );
}}

export default App;
