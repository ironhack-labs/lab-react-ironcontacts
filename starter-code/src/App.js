import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Table from './Table';

class App extends Component {
 constructor(props){
   super(props);
   this.state ={
    contacts: contacts.slice(0, 5)
   }
   this.addRandomContact = this.addRandomContact.bind(this);
   this.sortbyName = this.sortbyName.bind(this);
   this.sortbyPop = this.sortbyPop.bind(this);
   this.delContacts= this.delContacts.bind(this);
 }

 addRandomContact(){
    let max = contacts.length - 1
    let min = this.state.contacts.length
    let newContact = [...this.state.contacts];
    newContact.push(contacts[(Math.floor(Math.random() * (max - min)) + min)])
  
    this.setState({
      contacts: newContact
    })
   }

 
 sortbyName(){
   let newOrder = [...this.state.contacts];
    let contacts = newOrder.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
     this.setState({ contacts })
   }

   sortbyPop(){
    let newOrderPop = [...this.state.contacts];
     let contacts = newOrderPop.sort((a, b) => {
       return a.popularity > b.popularity ? 1 : -1;
     });
      this.setState({ contacts })
    }

  delContacts(idx){
  let newContact = [...this.state.contacts];
    newContact.splice(idx, 1);
    this.setState({
        contacts: newContact
    })
  }

 render() {
   return (
     
     <div>
       <h1>Iron Contacts</h1>
       <button onClick={this.addRandomContact}>Add Random Contacts</button>
       <button onClick={this.sortbyName}>Sort by name</button>
       <button onClick={this.sortbyPop}>Sort by popularity</button>
        <Table contacts={this.state.contacts} delete={this.delContacts}/>
     </div>

   )
 }
}

export default App;
