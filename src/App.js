import React from 'react';
import './App.css';

import contacts from './contacts.json'
// import DeleteButton from './deletebutton/DeleteButton';
import RandomContactButton from './randomcontact/RandomContact';
import SortByName from './sortbyname/SortByName';
import SortByPopularity from './sortbypopularity/SortByPopularity';



class App extends React.Component {

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
    const arrByPop = this.state.contacts.sort((a,b) => b.popularity - a.popularity )

    this.setState({
      contacts: arrByPop
    })
  }

  // delete contact
  deleteContact = index => {
    console.log(index)
  
     
      const updatedArr = this.state.contacts
     

      // this.setState({
      //   contacts: updatedArr
      // })
  }


  render(){

    console.log(this.state)

    return (
    <div className="App">
      <h1>IronContacts</h1>
  
        <RandomContactButton onHandler={this.handleAddRandomContact}/>
        <SortByName onHandler={this.sortContactsByName} />
        <SortByPopularity onHandler={this.sortContactsByPopularity} />
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th> 
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>

        {this.state.contacts.map((contact, index) => {
          return (
            <tbody>
              <tr key={contact.id}>
                <td > <img src={contact.pictureUrl} alt={contact.name}/> </td>
                <td >{contact.name}</td>
                <td >{contact.popularity}</td>
                <td><button onClick={this.deleteContact(index)}>Delete</button></td>
                {/* <td> <DeleteButton onHandler={this.deleteContact(index)}/> </td> */}
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>

    )
  }
  }



export default App;
