import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'

class App extends Component {


  state ={
    newContacts: contacts.slice(0,5)
  }

  selectRandomContact = () => {
    const randomNum = Math.floor(Math.random()*contacts.length)
    return contacts[randomNum]
  }
  addRandomContact = () => {
    const contactsCopy = [...this.state.newContacts]
    contactsCopy.push(this.selectRandomContact())
    this.setState({
      newContacts: contactsCopy
    })
  }
  sortByName = () => {
    const contactsCopy = [...this.state.newContacts]
    contactsCopy.sort((a,b) => {
      if(a.name < b.name){ return -1 }
      if(a.name > b.name){ return 1 }
      else {return 0}
    })
    this.setState({
      newContacts: contactsCopy
    })
  }
  sortByPopularity = () => {
    const contactsCopy = [...this.state.newContacts]
    contactsCopy.sort((a,b) => {
      if(a.popularity < b.popularity){ return 1 }
      if(a.popularity > b.popularity){ return -1 }
      else {return 0}
    })
    this.setState({
      newContacts: contactsCopy
    })
  }

  deleteContactHandler = (contactIndex) => {
    const contactsCopy = [...this.state.newContacts]
    contactsCopy.splice(contactIndex, 1)
    this.setState({
      newContacts: contactsCopy
    })

  }

  render() {

    return (
      <div className='App'>
        <h1>IronContacts</h1>
        <div className='btns'>
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          { this.state.newContacts.map((contact, index) => {
            return(
            <tr key={index}>
              <td><img src={contact.pictureUrl} alt={contact.name} /></td>
              <td><p>{contact.name}</p></td>
              <td><p>{Number(contact.popularity.toFixed(2))}</p></td>
              <td><button onClick={() => this.deleteContactHandler(index)} >Delete</button></td>
            </tr>
            )
          })}
  
        </table>
      </div>
    )
  }
}

export default App;
