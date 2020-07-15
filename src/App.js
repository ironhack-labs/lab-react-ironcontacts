import React, { Component } from 'react'
import contacts from "./contactsRawData.json";
import './App.css';
import Contacts from './Components/Contacts'




    class App extends Component {
      state = {
        contactList: contacts.slice(0,4)
        
      }
      render(){
        console.log(this.state.contactList)
        return (
          <div className="contacts">
          <Contacts contacts={this.state.contactList} />  
          </div>
        )
        
      }
    }

export default App;
