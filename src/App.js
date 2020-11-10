import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import TableRow from './components/TableRow';

class App extends Component {
  state = {
    contacts:contacts.slice(0,5)
  };
 
  addRandomContact () {
    const  stateContacts  = this.state.contacts
    // console.log(stateContacts)
    let randomNumber = Math.floor(Math.random() * contacts.length)
    stateContacts.push(contacts[randomNumber])
    this.setState({contacts:stateContacts})
  }

  sortByPopularity (){
    const  stateContacts  = this.state.contacts
    // console.log(stateContacts)
    const sortedContacts = stateContacts.sort((a,b)=>{
      return b.popularity-a.popularity
    })
    // console.log(sortedContacts)
    this.setState({contacts:sortedContacts})
  }

  sortByName (){
    const  stateContacts  = this.state.contacts
    // console.log(stateContacts)
    const sortedContacts = stateContacts.sort((a,b)=>{
      return a.name.localeCompare(b.name)
    })
    // console.log(sortedContacts)
    this.setState({contacts:sortedContacts})
  }

  deleteContact(key){
    const  stateContacts  = this.state.contacts.filter(contact=>contact.id!==key)
    this.setState({contacts:stateContacts})
    console.log(stateContacts)
}

  render() {
    const { contacts } = this.state
    return (
      <div className="App">
        <button onClick={()=>this.addRandomContact()}>Add Random Contact</button>
        <button onClick={()=>this.sortByName()}>Sort By Name</button>
        <button onClick={()=>this.sortByPopularity()}>Sort By Popularity</button>
        <table>
        <tbody>
          <tr><th>Picture</th><th>Name</th><th>Popularity</th><th>Action</th></tr>
          {
            contacts.map(contact=>{
              return (
                <TableRow key={contact.id} name={contact.name} pictureUrl={contact.pictureUrl} popularity={contact.popularity}  clickToDelete={()=>this.deleteContact(contact.id)}/>
              ) 
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
  
}

export default App;
