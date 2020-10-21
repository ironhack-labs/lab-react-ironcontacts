import React from 'react';
import './App.css';
import Button from './button/Button';

import contacts from './contacts.json'
import DeleteButton from './deletebutton/DeleteButton';


class App extends React.Component {

  // initial state
  firstFiveContacts = contacts.slice(0,5)

  state = {
    contacts: this.firstFiveContacts
  }

  // select random contact from contacts array
  newContact = () => {
    return contacts[Math.floor(Math.random()*contacts.length)]
  }

  // check if random contact is unique and if so add to set state
  handleAddRandomContact = () => {
    let contact = this.newContact()

    while(this.state.contacts.includes(contact) ) {
      contact = this.newContact()
    }
    
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
  }

  // sort table by name 
  sortContactsByName = () => {
    const sortedArr = this.state.contacts.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: sortedArr
    })
  }
 
  // sort by popularity 
  sortContactsByPopularity = () => {
    console.log('BIG')
    const arrByPop = this.state.contacts.sort((a,b) => b.popularity - a.popularity )

    this.setState({
      contacts: arrByPop
    })
  }

  // delete contact
  deleteContact = contactId => {
    const indexContact = this.state.contacts.findIndex(a => a.id === contactId)
    
    const updatedArr = this.state.contacts
    updatedArr.splice(indexContact, 1)

    this.setState({
      contacts: updatedArr
    })
  }


  render(){
 
    return (
    <div className="App">
      <h1>IronContacts</h1>
        <Button onHandler={this.handleAddRandomContact}>Add random Contact</Button>
        <Button onHandler={this.sortContactsByName}>Sort by name</Button>
        <Button onHandler={this.sortContactsByPopularity}>Sort by popularity</Button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th> 
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>

        {this.state.contacts.map(contact => 
            <tbody>
              <tr key={contact.id}>
                <td > <img src={contact.pictureUrl} alt={contact.name}/> </td>
                <td >{contact.name}</td>
                <td >{contact.popularity}</td>
                {/* <td><button onClick={()=> this.deleteContact(contact.id)}>Delete</button></td> */}
                <td> <DeleteButton onHandler={()=> this.deleteContact(contact.id)}/> </td>
              </tr>
            </tbody>
          )}
      </table>
    </div>

    )
  }
  }



export default App;
