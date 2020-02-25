import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactCard from './cards/contactCard'
class App extends Component {

  constructor() {
    super()
    this.state = {
      contacts: contacts.splice(0, 5)
    }
  }

  
addNewContact= () => {
    const randomContact= [...this.state.contacts]
    randomContact.push(contacts[Math.floor(Math.random() * (contacts.length - 5)) + 5])
    this.setState({contacts: randomContact}) 
  }


sortByName = () => {
  const sortName= [...this.state.contacts]
  sortName.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  })

  this.setState({contacts:sortName})
}

sortByPopularity = () => {
  const sortPopularity= [...this.state.contacts]
  sortPopularity.sort(function (a, b) {
    if (a.popularity < b.popularity) {
      return 1;
    }
    if (a.popularity > b.popularity) {
      return -1;
    }
    return 0;
  })

  this.setState({contacts:sortPopularity})
}

deleteContact = idx => {
const deleteCont= [...this.state.contacts]
deleteCont.splice(idx,1)
this.setState({contacts:deleteCont})

}


  render() {
    return (
      <>
      <h1>IronContacts</h1>
      <button onClick={this.addNewContact}>Add Random Contact</button>
      <button onClick={this.sortByName}>Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
      <hr></hr>
      <table>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
        </tr>
        {this.state.contacts.map((elm, idx) => <ContactCard key={idx} {...elm} deleteOne={() => this.deleteContact(idx)} />)}
      </table>
      
      </>
    );
  }
}

export default App;
