import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

import {ListaContactos} from './components/ListaContactos'

class App extends Component {

  constructor(){
    super();
    this.state = {
      contactsArr : contacts.slice(0,5)
    }
  }

  handleAdd(){
    let newArray = this.state.contactsArr.slice();
    let newContact;
    let names = newArray.map(cont =>cont.name)
    let different = false;

      // check that the newContact is not already on the list
      while(different ===false){
        newContact = contacts[Math.floor(Math.random() * contacts.length)]
        for(let i = 0; i<names.length; i++){
          if(names.indexOf(newContact.name) === -1){
            different = true
            break;
          }
        }
      }
      
      //when is newContact ok is makes the setState
      if(different){
        console.log(newContact.name)
        newArray.push(newContact) 
        this.setState({contactsArr: newArray})
      } else {
        console.log("ya existe" + newContact.name)
      }

  }


  render() {
  
    return (
      <div className="App content">
       <h1>IronContacts</h1>
       <button onClick={()=>this.handleAdd()} className="button is-primary" >Add random contact</button>
       <ListaContactos contactData={this.state.contactsArr}/>
      </div>
    );
  }
}

export default App;
