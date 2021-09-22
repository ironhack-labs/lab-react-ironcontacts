import React from "react";
import contacts from './contacts.json'
import CelebrityCard from './components/CelebrityCard/CelebrityCard'
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice (0 ,5)
    }
  } 
  addContact = ()=>{
    //sacar una copia
    const contactsCopy = this.state.contacts.map(contact => contact);
    //elegir uno al azar
    const randomNumber = Math.floor(Math.random() * (contacts.length-1))
    const randomContact= contacts[randomNumber];
    //modificar la copia
    contactsCopy.push(randomContact)
      //metemos en el state el nuevo array copiado
    this.setState({
      ...this.state,
      contacts:contactsCopy})
  }
  sortAlphabetically = () => {
    const contactsCopy= this.state.contacts.map(contact => contact);
    const contactsSort = contactsCopy.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name))
    this.setState({
      ...this.state,
      contacts:contactsSort 
    })
  } 
  sortByPopularity = () => {
    const contactsCopy= this.state.contacts.map(contact => contact);
    const contactsSort = contactsCopy.sort((contact1, contact2) => contact2.popularity-contact1.popularity)
    this.setState({
      ...this.state,
      contacts:contactsSort 
    })
  } 
  deleteContact = (id) => {
    this.setState({
      ...this.state,
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    })
  }

  render(){
    return(
        <div className= 'App-container'>
        <div>
         <h1>IronContacts</h1>
         <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
         <button onClick={() => this.sortAlphabetically()}>Sort alphabetically</button>
         <button onClick={() => this.addContact()}>Add random contact</button>
          <h1>Name Photo Popularity</h1>
          </div>    
         {this.state.contacts.map((contacts) => {
          return <CelebrityCard 
          name={contacts.name} 
          imgUrl={contacts.pictureUrl}
          popularity={contacts.popularity} 
          id={contacts.id}
          deleteContact={this.deleteContact}
           />
         })}
  </div>
  )
  }

}

export default App;
