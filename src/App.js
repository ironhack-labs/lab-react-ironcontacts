import React from 'react';
import './App.css';
import contacts from './contacts.json'


class App extends React.Component {
  state = {contacts:contacts.slice(0,5)}
 

  addContact = () => {
    const random =  Math.floor((Math.random() * contacts.length -1) + 1)
    const randomContact = contacts[random]
    //console.log(randomContact)
    this.setState({contacts:[...this.state.contacts, randomContact]})
  }

  sortByName = () => {
    const sortAlphabet = this.state.contacts.sort((a,b) => a.name.localeCompare(b.name))
    this.setState({
      contacts: sortAlphabet
    })
  }
  
  sortByPop = () => {
    const sortPopularity = this.state.contacts.sort((a,b) => b.popularity - a.popularity)
    this.setState({
      contacts: sortPopularity
    })
  }

  delete = (contactId) => {
    const deleteContact = this.state.contacts.filter(contact => contact.id !== contactId)
    this.setState({contacts:deleteContact})
}

  

  render(){
    //console.log(this.state.contacts)

    return(
      <div className='info'>
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPop}>Sort by Popularity</button>
        <table><tbody>
        <tr>
        <td><b>Photo</b></td> <td><b>Name</b></td> <td><b>Popularity</b></td> <td><b>Action</b></td>
        </tr>
        </tbody></table>
        {this.state.contacts.map((contact)=> {
          return<table>
          <tbody>
            <tr>
              <td><img id='photo' src={contact.pictureUrl} alt='celebrity'/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <button onClick={() => this.delete(contact.id)}>Delete</button>
            </tr>
          </tbody>
          </table>
          })}


     </div>
    )
  }
}




export default App;
