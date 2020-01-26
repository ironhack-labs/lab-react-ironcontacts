import React, { Component } from 'react';
//import contacts from './contacts.json';
import './App.css';
import IronContactsDynamic from './components/IronContactsDynamic';

class App extends Component {
  render(){
    return (      
      <div className= "App">
        <h1>IronContacts</h1>
        <IronContactsDynamic/>
      </div>
    );
  }  
}

export default App;





