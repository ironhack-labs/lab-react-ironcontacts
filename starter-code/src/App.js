import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import templateBuilder from "@babel/template";

function compare(a,b){
  if(a.name < b.name){
    return -1;
  }
  if(a.name < b.name){
  return 1;
  }
  return 0;
}


function comparePopularity(a,b){
  if(a.popularity > b.popularity){
    return -1;
  }
  if(a.popularity < b.popularity){
  return 1;
  }
  return 0;
}



let x = -1;


class App extends Component {


  state = {
    loggedIn: true,
    allContacts: contacts,
    firstContacts: contacts.splice(0,5)

  }




  sortByName = () =>{
    this.setState({
      firstContacts: [...this.state.firstContacts].sort(compare)
    })
  }


  sortByPopularity = () =>{
    this.setState({
      firstContacts: [...this.state.firstContacts].sort(comparePopularity)
    })
  }


  deleteContact = () =>{
    let contactList =  [...this.state.showContact]
  }


  showTheContacts = ()=>{
    let listOfContacts = this.state.firstContacts.map((eachContact)=>{
      x++
       return<tr>
       <td><img src={eachContact.pictureUrl}/></td>
       <td>{eachContact.name}</td>
       <td>{eachContact.popularity}</td>
       <td><button onClick={this.DeleteContact}>Delete {x}</button></td>
     </tr> 
      
      
      // <li>
      // <img src={eachContact.pictureUrl}/>
      // {eachContact.name}
      // <button>Delete</button>
      // </li>
    })
    return listOfContacts
    }


    DeleteContact = () => {
      console.log({x})
      let allContacs = [ ...this.state.allContacts ] //copy of all guys not seen
        //  this.state.allContacts.splice(randomIndex,1) //take contact out of old list
         let newContactList = [...this.state.firstContacts]
        //  newContactList.unshift(newContact) //make new copy of firstContacts adn add newContact to that
         console.log(newContactList)
         this.setState({
              firstContacts: newContactList,
          });
      
    }

  isLoggedIn = () => { 
    if(this.state.loggedIn){ //refered to my state above... 
        return <p>This is a {this.state.animal}'s home</p> // I am logged in
    } else {
        return  <p>You must log in</p> // I'm not logged in 
    }
}

  toggleLogin = () => {
    this.setState({
        loggedIn: !this.state.loggedIn
    })
}

  addRandomContact = () => {
    if(this.state.loggedIn){
        let allContacs = [ ...this.state.allContacts ] //copy of all guys not seen
        let randomIndex = Math.floor(Math.random()*(this.state.allContacts.length))
        let newContact = this.state.allContacts[randomIndex] //random new contact
        console.log("new contact>>>>>>>>",newContact)
         this.state.allContacts.splice(randomIndex,1) //take contact out of old list
         let newContactList = [...this.state.firstContacts]
         newContactList.unshift(newContact) //make new copy of firstContacts adn add newContact to that
         console.log(newContactList)
         this.setState({
              firstContacts: newContactList,
              // contacts:this.allContacts
          });
        }
      }
      
      
      
      
      render() {
        console.log("this is the app>>>>>",this)
        const firstContacts = contacts;
        console.log(firstContacts)
            return (
      
      <div className="App">
      

      <h1>IronContacts</h1>
      <button onClick={this.addRandomContact}>Add Random Contact</button> 
      <button onClick={this.sortByName}>Sort By Name</button>
      <button onClick={this.sortByPopularity}>Sort By Popularity</button>  
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
              {this.showTheContacts()}




















            {/* <tr>
              <td><img src={this.state.firstContacts[0].pictureUrl}/></td>
              <td>{this.state.firstContacts[0].name}</td>
              <td>{this.state.firstContacts[0].popularity}</td>
            </tr>
            <tr>
            <td><img src={this.state.firstContacts[1].pictureUrl}/></td>
              <td>{this.state.firstContacts[1].name}</td>
              <td>{this.state.firstContacts[1].popularity}</td>
            </tr>
            <tr>
            <td><img src={this.state.firstContacts[2].pictureUrl}/></td>
              <td>{this.state.firstContacts[2].name}</td>
              <td>{this.state.firstContacts[2].popularity}</td>
            </tr>
            <tr>
            <td><img src={this.state.firstContacts[3].pictureUrl}/></td>
              <td>{this.state.firstContacts[3].name}</td>
              <td>{this.state.firstContacts[3].popularity}</td>
            </tr>
            <tr>
            <td><img src={this.state.firstContacts[4].pictureUrl}/></td>
              <td>{this.state.firstContacts[4].name}</td>
              <td>{this.state.firstContacts[4].popularity}</td>
            </tr>
            {this.addRandomContact} */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
