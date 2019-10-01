import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';



class App extends Component {

  state = {
    showContacts : contacts.splice(0,5),
    allContacts : contacts
  }

  deleteName = (i) => {
    // console.log(i)
    let everyContact = [...this.state.showContacts]
    // console.log(everyContact)
    everyContact.splice(i,1)
    this.setState({
      showContacts : everyContact
    })
  }

  getContacts = () => {
    let contact = this.state.showContacts.map((contact, i)=>{
      return <tr className='contactCard' key={i}> 
                <td><img src={contact.pictureUrl} alt='celeb' /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td><button onClick={()=>this.deleteName(i)}> Delete </button></td>
             </tr>
    })
    return contact
  }

  addRandomContact = () => {
    let everyContact = [...this.state.showContacts]
    let randomIndex = Math.floor(Math.random()*(this.state.allContacts.length))
    let newContact = this.state.allContacts[randomIndex]
    console.log(newContact)
    everyContact.push(newContact);
    this.setState({
      showContacts : everyContact
    })
  }

  sortName = () => {
    let everyContact = this.state.showContacts.sort((a, b) => (a.name > b.name) ? 1 : -1)
    console.log(everyContact)
    this.setState({
      showContacts : everyContact
    })
  }

  sortPopularity = () => {
    let everyContact = this.state.showContacts.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
    console.log(everyContact)
    this.setState({
      showContacts : everyContact
    })
  }

  render() {
    return (
      <div className="App">

        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort Name</button>
        <button onClick={this.sortPopularity}>Sort Popularity</button>

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
            {this.getContacts()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

