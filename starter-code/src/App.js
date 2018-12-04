import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends Component {

  state ={
    theContacts: contacts.slice(5,contacts.length) ,
    displayCharacters: contacts.slice(0,5)
  }

  getRandomContact =()=>{
    let randomNum = Math.floor(Math.random()*this.state.theContacts.length-1);
    let contactCopy = [...this.state.theContacts];
    let displayCopy = [...this.state.displayCharacters]
    
    displayCopy.push(contactCopy[randomNum]);
    contactCopy.splice(randomNum,1);
    this.setState({
      displayCharacters: displayCopy,
      theContacts: contactCopy
    })
  }

  sortByName = () => {
    let displayCopy = [...this.state.displayCharacters].sort((a,b)=>{
       
       return a.name.localeCompare(b.name) ;
    });
    this.setState({
      displayCharacters : displayCopy
    })

  }

  sortByNum = () => {
    let displayCopy = [...this.state.displayCharacters].sort((a,b)=>{
      return b.popularity - a.popularity;
    })
    this.setState({
      displayCharacters: displayCopy
    })
  }

  delete = (i) => {
    console.log('delete ', i)
    let displayCopy = [...this.state.displayCharacters]
    displayCopy.splice(i,1)
    this.setState({
      displayCharacters:displayCopy
    })
  }


  render() {
 
 
    return (
    <div>
    <button onClick={this.sortByNum}>Sort by popularity</button>
    <button onClick={this.getRandomContact}>Add a Contact</button>
    <button onClick={this.sortByName}>Sort By Name</button>
     <ul>
       {
         this.state.displayCharacters.map((contact, index)=>{
           return <li>
           <h3>{contact.name}</h3>
           <img src={contact.pictureUrl} />
           <h2>{contact.popularity}</h2>
           <button onClick={() => { this.delete(index) }}>{index} Delete</button>
           </li>
           
         })
       }
     </ul>
     </div>
  
    );
  }
}

export default App;


// function traditional(){
//   delete(index)
// }