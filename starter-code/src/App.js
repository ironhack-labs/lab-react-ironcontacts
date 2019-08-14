import React, { Component } from 'react';

import './App.css';
import contacts from './contacts.json'
import ContactsList from './components/contacts-list'
import Headers from './components/headers'



class App extends Component {

  constructor(){
    super()
    this.state =  {
      contacts: []
    } 
}




clickHandler = () => {
 //   this.document.alert("I am being clicked!!!")
}
  
  render() {
    return (

      
      <div className="App">
        <section>
      
      <button onClick={this.clickHandler}>Add Random Contact</button>
      <Headers
        title="IronContacts"
        subtitlea ="Picture" 
        subtitleb = "Name"
        subtitlec = "Popularity"/>
      </section>
     
        <ContactsList />   
      </div>
    );
  }
}

export default App;
