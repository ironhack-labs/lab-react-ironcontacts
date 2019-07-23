import React, { Component } from 'react';

import './App.css';

import contacts from './contacts.json'
import Contactcard from './Contactcard'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      Allcontacts: contacts.slice(0,5),
      NotIncluded: contacts.slice(5)
    }
  }

showContacts = ()=>{
  return (
    this.state.Allcontacts.map((eachContact, i)=>{

      return (
                <Contactcard 
                    key={i}
                    theName= {eachContact.name}
                    thePopularity= {eachContact.popularity}
                    theImage = {eachContact.pictureUrl}
                    deleteContact = { ()=>this.deleteContactX(i) }
                    />
        )

    })
  )
}

deleteContactX = (theindex)=>{
  
  let clone = [...this.state.Allcontacts];
  clone.splice(theindex, 1);
  this.setState({Allcontacts: clone});
}

addRandom = ()=>{
let clone = [...this.state.Allcontacts];
 let sizecontactsNotIncluded = this.state.NotIncluded.length;
 const random = Math.floor( Math.random() *  sizecontactsNotIncluded);
 //console.log("was clicked random " + random);
 console.log("before " + clone);
 clone.push(this.state.NotIncluded[random]);
 console.log("before " + clone);

let cloneNotIncluded = [...this.state.NotIncluded];
cloneNotIncluded.splice(random, 1);
//console.log("was clicked random " +  cloneNotIncluded.length);

  this.setState({Allcontacts: clone, NotIncluded: cloneNotIncluded});
}

sortByName = ()=>{
    let clone = [...this.state.Allcontacts];

    clone.sort((A,B)=>{
      return A.name.localeCompare(B.name);
    });

    this.setState({Allcontacts: clone});
} 
//
sortByPopularity = ()=>{
  let clone = [...this.state.Allcontacts];

  clone.sort((A,B)=>{
    return B.popularity - A.popularity;
  });

  this.setState({Allcontacts: clone});
} 

  render() {
    return (
      <div className="container">
      <div className="row">
       
          <button onClick = {this.addRandom}>add random contact</button>
          <button onClick = {this.sortByName}>sortByName</button>
          <button onClick = {this.sortByPopularity}>sort by popularity</button>
      </div>
      <div className="row">
          {this.showContacts()}
      
      </div>
      </div>
    );
  }

}

export default App;
