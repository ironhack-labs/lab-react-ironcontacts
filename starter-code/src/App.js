import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Contacts from './components/Contacts/Contacts'
export const contactsList = contacts.map((oneContact, index) => 
<li key={index}>{oneContact}</li>);

class App extends Component {
  render() {
  let list=[]
   for (var i=0;i<5;i++){
      list.push(contacts[i])
   }
   let minilist= list.map(celebrity =>{
    return (
        <Contacts 
        img = {celebrity.pictureUrl}
        name = {celebrity.name}
        popularity={celebrity.popularity} />
    );
    
})
console.log(minilist)
   
   
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      
        {minilist}
      
        </table>
      </div>
    );
  }
}

export default App;
