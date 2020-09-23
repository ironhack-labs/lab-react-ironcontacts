import React from 'react';
import './App.css';
import ContactList from './components/ContactList';
import contacts from './contacts.json';

console.log(contacts.slice(0, 4))

  class App extends React.Component{
  
    state = {
      contact: contacts.slice(0, 4)
    }
  

    render() {
      return (
        <div className='App'>
        <h1>Contacts</h1>
        <ContactList contact={this.state.contact}/>
        
    
        </div>
        
      )
    }
  
}

export default App;
