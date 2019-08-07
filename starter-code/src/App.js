import React, { Component } from 'react';
import contacts from './contacts.json'
import Contact from './components/Contact.js'
import './App.css';

var firstContacts = contacts.splice(0,5);

class App extends Component {
  state = {
    allContacts: contacts,
    displayContacts: firstContacts,
    displaySearchedContacts: firstContacts,
    nameSort: null,
    popularitySort: null
  };

  addRandomContact = () => {
    var randomContact = contacts[Math.floor(Math.random()*contacts.length)];
    let displayCopy = this.state.displayContacts;
    displayCopy.push(randomContact);
    this.setState({
      displayContacts: displayCopy,
      displaySearchedContacts: displayCopy
    })  
  };

  sortNames = (event) => {
    debugger
    if(this.state.nameSort == true){
      event.target.innerHTML = "▼"
      let sortedContacts = this.state.displayContacts.sort((a, b) => (a.name > b.name) ? -1 : 1)
      this.setState({
        displayContacts: sortedContacts,
        nameSort: false
      })
    } 
    else{
      event.target.innerHTML = "▲"
      let sortedContacts = this.state.displayContacts.sort((a, b) => (a.name > b.name) ? 1 : -1)
      this.setState({
        displayContacts: sortedContacts,
        nameSort: true
      })
    }   
  };

  sortPopularity = (event) => {
    if(this.state.popularitySort == true){
      event.target.innerHTML = "▼"
      let sortedContacts = this.state.displayContacts.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
      this.setState({
        displayContacts: sortedContacts,
        popularitySort: false
      })
    } 
    else{
      event.target.innerHTML = "▲"
      let sortedContacts = this.state.displayContacts.sort((a, b) => (a.popularity > b.popularity) ? 1 : -1)
      this.setState({
        displayContacts: sortedContacts,
        popularitySort: true
      })
    }   
  };

  remove = (index)=> {
    let contactsCopy = [...this.state.displayContacts];
    contactsCopy.splice(index, 1);
    this.setState({displayContacts: contactsCopy});
  }

  search = (event)=> {
    let searchTerm = event.target.value;
    let allShownContacts = [...this.state.displaySearchedContacts];
    let searchedContacts = allShownContacts.filter((contact)=> (
        contact.name.indexOf(searchTerm) >= 0
    ))  
    this.setState({
      displaySearchedContacts: allShownContacts,
      displayContacts: searchedContacts
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div>
        <input onChange={this.search} placeholder="Search" type="text"/>
        <button onClick={this.addRandomContact}>Add random contact</button>
        </div><br />
        <table>
        <tr>
          <th>Picture</th>
          <th>Name <button onClick={this.sortNames}>Sort</button></th> 
          <th>Popularity <button onClick={this.sortPopularity}>Sort</button> </th>
          <th>Action</th>
        </tr>
        {this.state.displayContacts.map((contacts, index) => 
           <Contact
              index={index.toString()}
              removeContact={this.remove}
              {...contacts}
           />
        )}
        </table>  
      </div>
    );
  }
}

export default App;
