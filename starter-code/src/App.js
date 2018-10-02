import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import Row from "./rowcontact.js"




class App extends Component {
   constructor () {
     super();

    let contactsToShow = [];
    for(let i = 0; i < 5; i++){
      contactsToShow.push( <Row{...contacts[i]}></Row>)
    }
    this.state = {contactsToShow}

  }

  addRandomContact =()=> {
   let indexRandom = Math.floor(Math.random()*Object.keys(contacts).length + 4)
   this.state.contactsToShow.push(<Row{...contacts[indexRandom]}></Row>)
     this.setState(
       {contactsToShow: this.state.contactsToShow }
     )
   }



  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button onClick={this.addRandomContact}>Add Random Contact</button>
      <table>
          {this.state.contactsToShow}
      </table>
      </div>
    );
  }
}





export default App;
