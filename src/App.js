import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  
  state = {
    famousContact: []
  }


  populateContactList = () => {
    const firstContacts = contacts.filter((contact)=>{
      return contacts.indexOf(contact) < 5
    })
    //NO HE CONSEGUIDO HACER UN "FIRST POPULATE" DEL ARRAY DE "famousContact" EN EL STATE, LO DEMAS CREO QUE FUNCIONA TRAS IR PROBANDOLO EN LA CONSOLA
    this.setState({famousContact: firstContacts})
  }


  displayContact = () => {
    const contactsList = this.state.famousContact.map((contact, index)=>{
    return (
      <tr key={index}>
        <td><img src={contact.pictureUrl} alt={contact.name} /></td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
        <td><button onClick={()=>this.deleteFamous(contactsList.indexOf(contact))}>Delete</button></td>
      </tr>
      )
    })
    return contactsList
  }

  getRandomContact = ()=>{
    const randomContact = Math.floor(Math.random() * contacts.length + 1)
    
    this.setState({famousContact: [...this.state.famousContact, contacts[randomContact]]})
  }

  sortByName = () => {
    const sortedNameFamous = [...this.state.famousContact]
    sortedNameFamous.sort((a, b)=>{
      if(a.name < b.name) {
        return -1;
      }
      if(a.name > b.name) {
        return 1;
      }
        return 0;
    });
    this.setState({famousContact: sortedNameFamous})
  }

  sortByPopularity = () => {
    const sortedPopularityFamous = [...this.state.famousContact]
    sortedPopularityFamous.sort((a, b) => {
      return a.value - b.value;
    });
    this.setState({famousContact: sortedPopularityFamous})
  }

  deleteFamous = (_famous) => {
    const copyFamousList = [...this.state.famousContact]
    copyFamousList.splice(_famous, 1)
    this.setState({famousContact: copyFamousList})
  }


  render() {
    return (
      <div className="App">
        
        <h2>IronContacts</h2>
        <button onClick={()=>{this.getRandomContact()}}>Add Random Contact</button>
        <button onClick={()=>{this.sortByName()}}>Sort by name</button>
        <button onClick={()=>{this.sortByPopularity()}}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.populateContactList()}
            {this.displayContact()}
          </tbody>
        </table>
  
      </div>
    )
  }
;
}

export default App;
