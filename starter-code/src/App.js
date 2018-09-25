import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts: [],
    }
  }

  showContacts(){
    const firstContacts = contacts.slice(0,5);
    this.setState({
      contacts: firstContacts
    })
       
    
  }

  addRandom(){
    var randomContact = contacts[Math.floor(Math.random() * contacts.length + 5)];
    let newStateContacts = this.state.contacts;
    newStateContacts.push(randomContact);
    this.setState({ contacts: newStateContacts });
  }

  sortContactsPop() {
    let sortedContacts = this.state.contacts
    sortedContacts.sort((a, b)=>{
      return b.popularity - a.popularity
    })
    this.setState({ contacts: sortedContacts})
  }

  sortContactsName() {
    let sortedContacts = this.state.contacts
    sortedContacts.sort((a, b)=> {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    this.setState({ contacts: sortedContacts})
  }
  
  deleteContact(i) {
    let updatedContacts = [...this.state.contacts]
    updatedContacts.splice(i, 1)
    this.setState({ contacts: updatedContacts})
  }

  render() {
    return (
      <div class="align">

      <h1>IronContacts</h1>
      <button onClick = {()=> this.showContacts()} className ="btn btn-info">Show Celebs</button>
      <button onClick = {()=> this.addRandom()} className="btn btn-success" >Add Random</button>
      <button onClick = {()=> this.sortContactsPop()} className="btn btn-secondary">Sort by Popularity</button>
      <button onClick = {()=> this.sortContactsName()} className="btn btn-warning">Sort by Name</button>

     <table class="table table-striped table-dark">
     <thead class="thead-light">
     <tr>
       <th scope="col">Picture</th>
       <th scope="col">Name</th>
       <th scope="col">Popularity
       </th>
       <th scope="col">Actions</th>
       </tr>
     </thead>
     {this.state.contacts.map((contact, index) => (
              <tr>
                <td>
                  <img src={contact.pictureUrl} className="celebFace" />
                </td>
                <td className="celebName">{contact.name}</td>
                <td className="celebPop">{contact.popularity.toFixed(2)}</td>
                <td>
                  <button className="btn btn-danger" onClick ={()=> this.deleteContact(index)}>Delete</button>
                </td>
              </tr>
            ))}
       </table>
      </div>
    );
  }
}

export default App;
