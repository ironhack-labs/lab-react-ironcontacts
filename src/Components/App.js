import React, {Component} from 'react';
import './App.css';
import contacts from '../contacts.json';


class App extends Component{
  constructor() {
    super()
    this.state = {
      contacts: contacts,
      contactFilter: contacts.slice(0, 5)

    }
  }

  addContact = () => {
    const arrayFullContact = this.state.contacts
    const numberRandom = Math.floor(Math.random() * (52 - 5)) + 5;
    const contactRandom = arrayFullContact.find((elm, idx) => idx === numberRandom)
    this.state.contactFilter.push(contactRandom)
    this.setState({
      contactFilter: this.state.contactFilter
    })
  }
  sortByName = () => {
    this.setState({
      contactFilter: this.state.contactFilter.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
    })
  }

  sortByPopularity = () => {
    this.setState({
      contactFilter: this.state.contactFilter.sort((a, b) => a.popularity - b.popularity).reverse()
    })
  }

  removeContact = idContact => {
    this.setState({
      contactFilter: this.state.contactFilter.filter(elm => elm.id != idContact)
    })
  }
  
  render() {

    return (
      <>
        <h1>IronContacts</h1>
        <button  onClick={this.addContact} >Add Random Contact</button>
        <button  onClick={this.sortByName}>Sort by Name</button>
        <button  onClick={this.sortByPopularity}>sort by Popularity</button>
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
            {this.state.contactFilter.map(elm => <tr key={elm.id}><td><img src={elm.pictureUrl} alt={elm.name} /></td><td>{elm.name}</td><td>{elm.popularity}</td><td><button id="delete" onClick={() => this.removeContact(elm.id)}>Delete</button></td></tr>)}        
         </tbody>
        
       </table>
     </>
    )
  }
}

export default App;