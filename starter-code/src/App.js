import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"

class App extends Component {
  state = {
    contactList: contacts.slice(0,5),
    
  };

  addRandom = () => {
    const contactsCopy = this.state.contactList
    const randomIndex = Math.floor(Math.random() * contacts.length)
    contactsCopy.push(contacts[randomIndex])
    this.setState({contactList: contactsCopy})
  }

   compare = (key) => (a, b)=> {
    // Use toUpperCase() to ignore character casing
    const A = a[key];
    const B = b[key];
  
    let comparison = 0;
    if (A > B) comparison = 1;
    else if (A < B) comparison = -1;
    return comparison;
  }
  
  sortPop = () => {
    const contactsCopy = this.state.contactList
    contactsCopy.sort(this.compare("popularity"))
    this.setState({contactList: contactsCopy})
  }

  sortName = () => {
    const contactsCopy = this.state.contactList
    contactsCopy.sort(this.compare("name"))
    this.setState({contactList: contactsCopy})
  }

  deletePos = (id) => {
    const contactsCopy = this.state.contactList.filter(contact => contact.id !== id)
    this.setState({contactList: contactsCopy})
  }

  render() {
    return (
      <div className="App">

        <div className="CListContainer">
        <h1>IronContacts</h1>
        <div className="row controls">
          <button onClick={this.addRandom} >Add Random Contact</button>
          <button onClick={this.sortPop} >Sort by popularity</button>
          <button onClick={this.sortName} >Sort by Name</button>
        </div>

        <div className="row thead">
            <div className="cell imgCol">Pic</div>
            <div className="cell name">Name</div>
            <div className="cell popularity">Popularity</div>
            <div className="cell action">Action</div>
        </div>

        {/* start of the loop */}
        {this.state.contactList.map((contact) => {
          return(
          <div className="row" key={contact.id}>
            <div className="cell imgCol"><img className="img" src={contact.pictureUrl} alt=""/></div>
            <div className="cell name">{contact.name}</div>
            <div className="cell popularity">{contact.popularity}</div>
            <div className="cell action"><button onClick={() => {this.deletePos(contact.id)}}>Delete</button></div> 
          </div>
          )
        {/* end of the loop */}
        })}
        </div>
      </div>
    );
  }
}

export default App;
