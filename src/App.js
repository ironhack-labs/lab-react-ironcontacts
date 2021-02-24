import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import contacts from './contacts.json'


class App extends Component {

    state = {
     contacts : contacts.slice(0,5),
    }

    addRandomContact = () => {
    //const stateContactsIds = this.state.contacts.map(contact => contact.id); //take the id of the 5 first contacts
    //const restOfTheContacts = contacts.filter(contact => !stateContactsIds.includes(contact.id)) //if the contact id is not inside stateContactsIds then it's inside the new variable
    const restOfTheContacts = contacts.filter(contact => !this.state.contacts.includes(contact))
    const randomContact = restOfTheContacts[Math.floor(Math.random() *restOfTheContacts.length)]
    //const newContactList = this.state.contacts.concat(randomContact); 
    this.setState((state, props) => ({ 
      //contacts: newContactList  
      contacts: [randomContact, ...this.state.contacts]  
      // contacts: [...this.state.contacts, randomContact]  
       }))
    }

    sortbyName = () => {
      const sortedContacts = this.state.contacts.sort((a,b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
      this.setState({
        contacts: sortedContacts
      })
    }

    sortbyPopularity = () => {
      const sortedContacts = this.state.contacts.sort((a,b) => {
        if (a.popularity < b.popularity) return -1
        if (a.popularity > b.popularity) return 1
        return 0
      })
      this.setState({
        contacts: sortedContacts
      })
    }

     removeContact = id => {
       const contactCopy = this.state.contacts;
       const contactId = contactCopy.findIndex(contact => contact.id === id); 
       contactCopy.splice(contactId, 1)
       this.setState({
         contacts: contactCopy
       })

     }



  render(){
    return (
      <div>
      <h1>IronContact</h1>
      <button onClick={this.addRandomContact}>Add random contact</button>
      <button onClick={this.sortbyName}>Sort by name</button>
      <button onClick={this.sortbyPopularity}>Sort by Popularity</button>
      
        <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map(item => (
          <tr key={item.id}>
            <img style={{width:'100px'}}src={item.pictureUrl}/>
            <th>{item.name}</th>
            <th>{item.popularity}</th>
            <th><button onClick={() => this.removeContact(item.id)}>Delete</button></th>
            
          </tr>
        ))}
        </tbody>
        </table>
        
      </div>
    )
    
  }

}



export default App;
