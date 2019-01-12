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

  handleSortByName(){
    let newArray = this.state.contactsArr.slice();
    newArray.sort((a,b)=>
      (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    this.setState({contactsArr: newArray})
  }

  handleSortByPopularity(){
    let newArray = this.state.contactsArr.slice();
    newArray.sort((a,b)=>
      (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0))
    this.setState({contactsArr: newArray})
  }

  handleDelete(index){
    this.state.contactsArr.splice(index,1);
    this.setState({contactsArr: this.state.contactsArr})
  }

  render() {
  
    return (
      <div className="App content">
       <h1>IronContacts</h1>
       <button onClick={()=>this.handleAdd()} className="button is-primary" >Add random contact</button>
       <button onClick={()=>this.handleSortByName()} className="button is-warning">Sort by name</button>
       <button onClick={()=>this.handleSortByPopularity()} className="button is-info">Sort by popularity</button>
       <ListaContactos 
       contactData={this.state.contactsArr}
       deleteContact={(index)=>this.handleDelete(index)}/>
      </div>
    );
  }
}

export default App;
