import React, { Component } from 'react';
import contacts from '../../data/contacts'
import ContactRow from './ContactRow'

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0, 5) || [],
      allContacts: contacts || [],
      sortedByName: false, 
      sortedByPopularity: false,
    }
  }

  onClickAddRandom = () => {
  let restOfContacts = this.state.allContacts.filter(contact => !this.state.contacts.some(cont => cont.name === contact.name))
  let randomContact = restOfContacts[Math.floor(Math.random()*restOfContacts.length)]; 
  let newArray = [...this.state.contacts, randomContact]
    if(this.state.sortedByName){
      this.setState({
        contacts: newArray.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0))
    })
  }

  if(this.state.sortedByPopularity){
    this.setState({
      contacts: newArray.sort((a,b) => (a.popularity > b.popularity) ? 1 : ((b.popularity > a.popularity) ? -1 : 0)) 
  })
}
  this.setState({
    contacts: newArray
})
  
  // console.log(restOfContacts)
  // console.log(this.state.allContacts)
  // console.log(randomContact)
  // console.log(this.state.contacts)
  }

  onClickSortByName = () => {
    let sortByNameArray = this.state.contacts.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)); 
    this.setState({
      sortedByPopularity: false,
      sortedByName : true,
      contacts :  sortByNameArray
    }) 
  }

  onClickSortByPop = () => {
    let sortByPopArray = this.state.contacts.sort((a,b) => (a.popularity > b.popularity) ? 1 : ((b.popularity > a.popularity) ? -1 : 0)); 
    this.setState({
      sortedByPopularity: true,
      sortedByName : false,
      contacts :  sortByPopArray
    }) 
  }

  onClickStop = () => {
    this.setState({
      sortedByPopularity: false,
      sortedByName : false,
    }) 
  }

  onClickDeleteContact = (contact) => {
    this.setState({
      contacts:  this.state.contacts.filter(contc => contc.name !== contact.name)
    })
  }

  roundRate = (x) => {
    return x.toFixed(1)
  }

  updateArray = () => {
    this.setState({
      limit :  this.state.limit + 1
    }) 
  }

  renderItems = () => {
    return this.state.contacts.map((contact) => {
      return <ContactRow onClickDelete={this.onClickDeleteContact.bind(this, contact)} key={contact.name} {...contact} popularity={this.roundRate(contact.popularity)}/>
    })
  }

  render() {
    return (
      <div className="container row mx-auto col-xl-6 col-md-8 col-11">
      <button onClick={this.onClickAddRandom }>Add random celebrity</button>
      <button onClick={this.onClickSortByName }>Sort by name</button>
      <button onClick={this.onClickSortByPop }>Sort by popularity</button>
      <button onClick={this.onClickStop }>STOP sorting</button>
         {this.renderItems()}
      </div>
    );
  }
}



// return <ContactRow key={film.id} {...film} rating={this.getAverage(film.ratings)} onClickDelete={this.onClickDeleteFilm.bind(this, film)}/>
