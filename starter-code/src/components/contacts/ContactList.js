import React, { Component } from 'react';
import contacts from '../../data/contacts'
import ContactRow from './ContactRow'



export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0, 5) || [],
      allContacts: contacts || [],
      sortedBy: undefined
    }
  }


  onClickAddRandom = () => {
  let restOfContacts = this.state.allContacts.filter(contact => !this.state.contacts.some(cont => cont.name === contact.name))
  let randomContact = restOfContacts[Math.floor(Math.random()*restOfContacts.length)];  
  this.setState({
    contacts: [...this.state.contacts, randomContact]
  })
  // console.log(restOfContacts)
  // console.log(this.state.allContacts)
  // console.log(randomContact)
  // console.log(this.state.contacts)
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
      return <ContactRow key={contact.name} {...contact} popularity={this.roundRate(contact.popularity)}/>
    })
  }

  render() {
    return (
      <div className="container row mx-auto col-xl-6 col-md-8 col-11">
      <button onClick={this.onClickAddRandom }>Add random celebrity</button>
         {this.renderItems()}
      </div>
    );
  }
}



// return <ContactRow key={film.id} {...film} rating={this.getAverage(film.ratings)} onClickDelete={this.onClickDeleteFilm.bind(this, film)}/>
