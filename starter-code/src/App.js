import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactsTable from './components/ContactsTable';
import Image from './components/Image';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      fiveContacts: contacts.slice(0,5),
      keysArr: ['Picture', 'Name', 'Popularity'],
    }

  }

  render() {
    // let keysArr =  Object.keys(this.state.fiveContacts[0]);
    // let imgUrl = keysArr.splice(1,1);
    // keysArr.unshift(...imgUrl);
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>
        
        <div className="divTable">

          <ContactsTable keysArr={this.state.keysArr} fiveContacts={this.state.fiveContacts} />

          
        </div>
    
      </div>
      );
    }
  }

export default App;


  
