import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactIni: contacts.slice(0, 5)
    };
  }

  sortByName(){
    let newContactInisort = [...this.state.contactIni]
    console.log(newContactInisort)
      
    newContactInisort.sort(function (a,b){
      if (a.name > b.name)    return 1
      if (a.name < b.name)    return -1
    })
    console.log(newContactInisort)
      
    this.setState({
      ...this.state,
      contactIni: newContactInisort
    })
  }

  sortByPop(){
    let newContactInisort = [...this.state.contactIni]
    console.log(newContactInisort)
      
    newContactInisort.sort(function (a,b){
      if (a.popularity > b.popularity)    return -1
      if (a.popularity < b.popularity)    return 1
    })
    console.log(newContactInisort)
      
    this.setState({
      ...this.state,
      contactIni: newContactInisort
    })
  }



  addNewContact() {
    let newContactIni = [...this.state.contactIni]
    let allTheContacts = contacts.length
    var contactRandom=Math.floor(Math.random()*allTheContacts);
    newContactIni.push(contacts[contactRandom])

    this.setState({
      ...this.state,
      contactIni: newContactIni
    })
  }

  delete(name){
    
    this.setState({
      ...this.state,
      contactIni: this.state.contactIni.filter(contact => contact.name !== name)
      
    })

  }

  render() {
    return (
      <div className="container">
      <div id="buttons">
        <button onClick={() => this.addNewContact()}>Add new contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPop()}>Sort by popularity</button>
        </div>
        <table id="table">
          <thead>
        <tr>
            <th>Picture:</th>
            <th>Name:</th>
            <th>Popularity:</th>
            <th>Action:</th>
        </tr>
        </thead>
        <tbody>
       
          {this.state.contactIni.map((contact,index) => {
          return (
            
            <Contact
              key={index}
              name={contact.name}
              pictureUrl={contact.pictureUrl}
              popularity={contact.popularity}
              delete={()=>this.delete(contact.name)}
            />
            );
            })}
            </tbody>
            </table>
        
      </div>
    );
  }
}

export default App;
