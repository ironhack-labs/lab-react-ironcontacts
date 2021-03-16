import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import contacts from './contacts.json'

let copyContacts = [...contacts]
let labContacts = copyContacts.splice(0,5)

export class App extends Component {

  
  state = {
    contacts: labContacts,
  }
   
  handAddContact = () => {
    let randNum = Math.floor(Math.random()*Math.floor(copyContacts.length-1))
    let newContact = {...copyContacts[randNum]}
    copyContacts.splice(randNum,1)
    this.setState({contacts: [newContact, ...this.state.contacts]})
    console.log(copyContacts.length)
  }

  handleNameSort = () => {
    let sortedNames = this.state.contacts.sort((a,b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      let comparison = 0;
      if (nameA> nameB) {
        comparison = 1;
      } else if (nameA< nameB) {
        comparison = -1;
      }
      return comparison;
    })
    this.setState({contacts: sortedNames})
  }

  handlePopularitySort = () => {
    let sortedPopularity = this.state.contacts.sort((a,b) => {
      const popA = a.popularity;
      const popB = b.popularity;

      let comparison = 0;
      if (popA> popB) {
        comparison = -1;
      } else if (popA< popB) {
        comparison = 1;
      }
      return comparison;
    })
    this.setState({contacts: sortedPopularity})
  }

  handleDelete = (ContactId) => {
    let del = this.state.contacts.map((contact, index) => contact.id == ContactId)    
    let number = del.indexOf(true)
    this.state.contacts.splice(number,1)
    this.setState({contacts: this.state.contacts});
  }
  
  
  render() {

 
    



    return (   
        <div>
          <h1>IronContacts</h1>
          <button onClick={this.handAddContact}>Add a new contact</button>
          <button onClick={this.handleNameSort}>Sort by Name</button>
          <button onClick={this.handlePopularitySort}>Sort by Popularity</button>
      <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Remove Contact</th>
          </tr>
            {this.state.contacts.map((contact, index) =>
              <tr key={contact.id}>
                <td><img className="contact__image" src={contact.pictureUrl} alt="contact"/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td><button onClick={() => {this.handleDelete(contact.id)}}>delete this contact</button></td>
              </tr>
            )}
      </table>
    </div>
  );
      
  }
}


export default App


