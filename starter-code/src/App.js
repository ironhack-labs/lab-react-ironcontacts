import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json'

import Contacts from './components/Contacts'

class App extends Component {
  constructor() {
    super();

    this.state = {
       
      contacts: contacts.splice(0,5)
    }
  }

  addRandom = ( )=>{
  const  randomActor = () =>{
    return Math.floor( (Math.random() * (contacts.length - 5) + 5))
    }
    
      const contactsCopy = [...this.state.contacts]     // hacemos una copia del Array para no manipoular el estado original
      contactsCopy.push(contacts[randomActor()])
      this.setState({
          contacts: contactsCopy  // asignamos la copia
      })
  }

  sortName = ()=>{
    let contactsCopy = [...this.state.contacts] 
       
    contactsCopy = contactsCopy.sort( (a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        
        return 0;
      });
    
   this.setState({
    contacts: contactsCopy  // asignamos la copia
})
}

sortPopularity = () =>{
  let contactsCopy = [...this.state.contacts]

   
  contactsCopy = contactsCopy.sort( (a, b) => {
    if (a.popularity < b.popularity) {
      return 1;
    }
    if (a.popularity > b.popularity) {
      return -1;
    }
    
    return 0;
  });

  this.setState({
    contacts: contactsCopy
})
}

deleteContacts = (contactIndex) =>{
  let contactsCopy = [...this.state.contacts]
  contactsCopy.splice(contactIndex, 1)
  this.setState({
    contacts: contactsCopy
  })
}



  


  render() {
    console.log(contacts.splice(0,5))
    return (

      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
          
        </header>

        <p className="App-intro">
          IronContacts
        </p>
        <button onClick= {this.addRandom}>AddRandom</button>
        <button onClick = {this.sortName}>Sort by Name</button>
        <button onClick = {this.sortPopularity}>Sort by Popularity</button>
        
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>DeleteActor</th>
          </tr>
        </thead>
        <tbody>
          { this.state.contacts.map((contact, contactIndex) => {
            return <Contacts key={contactIndex} {...contact} deleteContacts={() => this.deleteContacts(contactIndex)}/>
          })  }
        </tbody>
      </table>

            
      </div>
    );
  }

}


export default App;
