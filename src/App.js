import React from 'react';
import './App.css';
import ContactList from './components/ContactList';
import contacts from './contacts.json';

console.log(contacts.slice(0, 4))

  class App extends React.Component{
  
    state = {
      contact: contacts.slice(0, 4)
    }

    addContact = () => {
     
      const randomContact =  contacts[contacts.length * Math.random() | 0]

      const contactCopy = this.state.contact.slice();
      contactCopy.push(randomContact);
      this.setState({
        contact:contactCopy
       
      })
    }

    sortContactsbyName = () => {
     
      const contactCopy = this.state.contact.slice();

      contactCopy.sort((a,b) => (a.name < b.name) ? -1 : (( a.name> b.name) ? 1:0))
      
      this.setState({
        contact:contactCopy
      })
    }

    sortContactsbyPopularity = () => {
     
      const contactCopy = this.state.contact.slice();

      contactCopy.sort((a,b) => (a.popularity < b.popularity) ? 1 : (( a.popularity> b.popularity) ? -1:0))
      
      this.setState({
        contact:contactCopy
      })
    }


    render() {
      return (
        <div className='App'>
        <h1>IronContacts</h1>

        <button onClick={this.addContact}>Add a Contact</button>
        <button onClick={this.sortContactsbyName}>Sort by Name</button>
        <button onClick={this.sortContactsbyPopularity}>Sort by Popularity</button>
        
        <ContactList contact={this.state.contact}/>
        
    
        </div>
        
      )
    }
  
}

export default App;
