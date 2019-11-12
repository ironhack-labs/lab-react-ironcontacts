import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contactsJson from './contacts.json'
window.contactsJson=contactsJson;

class App extends Component {

  state={
    contacts:contactsJson.splice(0,5),
    restOfContacts: contactsJson
  }


  showContacts=()=>{
    let allContacts = this.state.contacts.map(eachContact=>{
      return(
        <div className="gallery">
        <li><span>{eachContact.name} </span><span>     </span><span>{eachContact.popularity}</span></li>
        <img src={eachContact.pictureUrl}/>
        </div>
      )
    })
    return allContacts
  }

  addRandom=()=>{
    let randomIndex=Math.floor(Math.random()*this.state.restOfContacts.length)
    console.log(randomIndex)
    //this.contacts=[...this.restOfContacts.splice(randomIndex,1)]
    let randomContact = [...this.state.restOfContacts][randomIndex]
    console.log(randomContact)
    
    
  
    let newContacts=[...this.state.contacts]
    newContacts.push(randomContact)

    let newRestOfContacts=[...this.state.restOfContacts]
    newRestOfContacts.splice(randomIndex,1)
    //this.state.restOfContacts.splice(randomIndex,1)

    this.setState({
      contacts: newContacts,
      restOfContacts: newRestOfContacts
    })
    
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
       <button onClick={this.addRandom}>Click</button> 
        {this.showContacts()}
      </div>
    );
  }
}

export default App;
