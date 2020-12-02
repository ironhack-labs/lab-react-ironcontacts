import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'; 

class App extends React.Component {
  state = {
    contactsList: contacts.slice(0, 5),
  };

  randomContact = () => {
    let randomPickedContact = contacts[Math.floor(Math.random()*contacts.length)] 
   // if (this.state.contactsList.indexOf(randomPickedContact) === -1)
    return randomPickedContact
     

  }

  addRandomContact = () => {
    const newContactsList = [...this.state.contactsList]
    
    newContactsList.unshift(this.randomContact())
    this.setState({
      contactsList: newContactsList
    })
  }

  sortContactsByName = () => {
    const sortedByName = [...this.state.contactsList]
    sortedByName.sort((a,b) => {
      if(a.name > b.name){
        return 1
      }
      if(a.name < b.name){
        return -1
      }
      return sortedByName
    })
    this.setState({
      contactsList: sortedByName
    })
  }

  sortContactsByPopularity = () => {
    const sortedByPopularity = [...this.state.contactsList]
    sortedByPopularity.sort((a,b) => {
      if(a.popularity > b.popularity){
        return 1
      }
      if(a.popularity < b.popularity){
        return -1
      }
      return sortedByPopularity
    })
    this.setState({
      contactsList: sortedByPopularity
    })
  }

  deleteContact = (index) => {
    const reducedList = [...this.state.contactsList]
    reducedList.splice(index, 1)
    this.setState({
      contactsList: reducedList
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick= {()=>this.addRandomContact()}>Add Random Contact</button>
        <button onClick= {()=>this.sortContactsByName()}>Sort by name</button>
        <button onClick= {()=>this.sortContactsByPopularity()}>Sort by popularity</button>
        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
            <th></th>
          </tr>
          {this.state.contactsList.map((contact, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(1)}</td>
                <td><button onClick= {()=>this.deleteContact(index)}>Delete</button></td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;