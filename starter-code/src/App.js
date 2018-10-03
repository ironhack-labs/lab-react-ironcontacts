import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import ICListContainer from './components/IronContactsList/ICListContainer';

class App extends Component {


  state = {
    contactos: contacts.splice(0,5)
  }


  render() {
    
    return (
      <div>
        
        
        <ICListContainer info={this.state.contactos}/>
      </div>
    )
  }
}

export default App;
