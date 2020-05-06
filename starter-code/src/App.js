import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/Contact';
const contactsArray= [ contacts[0], contacts[2], contacts[7], contacts[8], contacts[15], ];

class App extends Component {
  constructor(){
    super()
    this.contactCopy=[...contacts]
    this.fiveContacts=this.contactCopy.splice(0,5)
  
  this.state={
    contacts:this.fiveContacts
  }
}

  randomClickHandler=()=>{
    const newContact=this.contactCopy.filter((contact)=> !this.fiveContacts.includes(contact))
    let randomContact=newContact[Math.floor(Math.random()*newContact.length)];
 this.fiveContacts.push(randomContact);
    this.setState({
contacts:this.fiveContacts
    })
  }



  sortNameHandler=()=>{
this.fiveContacts.sort(function(a, b){
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});
    this.setState({
      contacts:this.fiveContacts
  })
}

sortPopularityHandler=()=>{
  this.fiveContacts.sort(function(a,b){
    if(a.popularity>b.popularity)
{
  return -1
}
if(a.popularity<b.popularity){
  return 1
}
return 0;
  });
  this.setState({
    contacts:this.fiveContacts
  })
}

removeContactFromState=(x)=>{
 const newContacts=[...this.fiveContacts];
 const index= newContacts.map(el=> el.id).indexOf(x)
 newContacts.splice(index,1)
  this.setState({
    contacts:newContacts

  })
}

  render() {
    return (
      <div className="App">
       <h1>IronContacts</h1>
       <button onClick={this.randomClickHandler}>Add Random Contact </button>
     <button onClick={this.sortNameHandler}>Sort by name</button>
     <button onClick={this.sortPopularityHandler}>Sort by popularity</button>
       <table>
       <thead>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
 </tr>
 </thead>

 <tbody>
{
  this.state.contacts.map((contact)=>(
  <Contact key={contact.id} {...contact} deleteContact={this.removeContactFromState}/>
))
}

</tbody>
    </table>
      </div>
    );
  }
}

export default App;
