import React, { Component } from 'react';
import './App.css';
import Contacts from './Contacts';
import contactsData from "./contacts.json"




class App extends Component {
constructor(props){
  super(props)
  this.state = {
    myContacts: contactsData.slice(0,5)
  }
}

  render() {
    return (
      <React.Fragment>
      < Contacts contacts ={this.state.myContacts}/>
      </React.Fragment>
    );
  }
}

export default App;