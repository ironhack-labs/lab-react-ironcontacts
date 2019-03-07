import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
let showContacts = contacts.splice(0,5); 

class App extends Component {
  state = {
    showContacts,
    contacts
  //all the contacts we are messing with 
  }

  showCelebs = () => {
    let list = this.state.showContacts.map((contact, i)=>{ //loo[ps throught contacts and returns an html list
      return (
        <tr key={i}>
          <td><img src={contact.pictureUrl}/></td> 
          <td>{contact.name}</td>
          <td> {contact.popularity}</td>
          <td><button onClick={()=>this.deleteContact(i)}>Delete</button></td>
        </tr>
      )
    })
    return list;
  }

  addRandomContact = () => {
    let newContacts = [...this.state.showContacts] //makes a copy of the contact state
    let randomContact = contacts.splice(Math.floor((Math.random() * contacts.length)),1)[0];
    console.log(randomContact)
    //newContacts.splice(Math.floor((Math.random() * contacts.length) + 5));
    newContacts.push(randomContact);
    this.setState({ //and resets the state to be this newlist with another henry
      showContacts:newContacts
    })
    // }, ()=>{ //callback after u set state 
    //   this.sortByName()
    // })
  }

  sortByName =() => {
    let newContacts = [...this.state.showContacts] //makes a copy of the contact state
    newContacts.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
    console.log(newContacts)
    this.setState({
      showContacts:newContacts
    })
  }

  sortbyPopularity = () => {
    //console.log(contacts[0].popularity);

    let newContacts = [...this.state.showContacts] //makes a copy of the contact state
    
    newContacts.sort(function(a, b){
      if(a.popularity < b.popularity) { return 1; }
      if(a.popularity > b.popularity) { return -1; }
      return 0;
    })
    //console.log(newContacts)
    this.setState({
      showContacts:newContacts
    })
  }

  deleteContact = (contact) => {
    let newContacts = [...this.state.showContacts]
    newContacts.splice(contact, 1);
    //let list = this.state.showContacts.map()
    console.log(contact)
    console.log(newContacts)
    this.setState({
      showContacts:newContacts
    })
  }
  


  render() {
    return (
      <div className="contactTable">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortbyPopularity}>Sort By Popularity</button>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {this.showCelebs()} {/* Calls function once */}
          </tbody>
        </table>   
      </div>
    );
  }
}

export default App;
