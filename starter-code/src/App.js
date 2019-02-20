import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './contacts.json';
import MyButton from './MyButton';
import ListContact from './ListContact';

 
const inicialContacts = [];
for (let i=0; i<5; i++){
    inicialContacts[i]=Contacts[i];
}

class App extends Component {

  state = {
    contact: inicialContacts
  
  };
  
  addContact = () => {
    
    let newContact = [
      ...this.state.contact
    ]

    const indexContact =  Math.floor(Math.random()*Contacts.length);
    const contactAdd = Contacts[indexContact];
    if (!(newContact.includes(contactAdd))) {
        newContact.push(
          contactAdd
        );
        this.setState({contact: newContact})
    }
    else console.log("Error",newContact.includes(contactAdd))
    
  }

  delete = (contactIndex) => {console.log("parametro ", contactIndex)
      let newContact = [...this.state.contact]
      
      newContact = newContact.filter((index) => {
        console.log("index",index)
        return index !== contactIndex
      })
      this.setState({contact: newContact})
  }
  

  sortPopularity = () => {
    
    const newOrder = this.state.contact.sort((a, b) => {
                    return (b.popularity - a.popularity)
                })
    
    this.setState({contact: newOrder})
  }
    
  sortName = () => {
    
    const newOrder = this.state.contact;
    newOrder.sort((a, b) => {
      if(a.name < b.name) return -1
      if(a.name > b.name) return 1
      return 0

    });
    
    this.setState({contact: newOrder})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <h1> IronContact</h1>

        <MyButton action={this.addContact} text="Add a Contact"/>
        <MyButton action={this.sortName} text="Sort by Name"/>
        <MyButton action={this.sortPopularity} text="Sort by Popularity"/>
        
        <ListContact datos={this.state.contact} />
      </div>
    );
  }
}

export default App;
