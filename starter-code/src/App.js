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

 

 render() {
   return (
     
     <div>
       <h1>Iron Contacts</h1>
       <button onClick={this.addRandomContact}>Add Random Contacts</button>
        <Table contacts={this.state.contacts} />
     </div>

   )
 }
}

export default App;
