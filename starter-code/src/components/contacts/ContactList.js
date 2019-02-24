import React, { Component } from 'react';
import contacts from '../../data/contacts'
import ContactRow from './ContactRow'



export default class ContactList extends Component {
 

  state = {
    contacts: [...contacts],
    limit: 5
  }

  roundRate = (x) => {
    return x.toFixed(1)
  }

 
  renderItems = () => {
    let ContactArray = this.state.contacts.map((contact, index) => {
       return index < this.state.limit ? contact : undefined })
       .filter(contact => contact !== undefined);
    
    return ContactArray.map((contact) => {
      return <ContactRow key={contact.name} {...contact} popularity={this.roundRate(contact.popularity)}/>
    })
  }

  render() {
   
    
    return (
      <div className="container row mx-auto col-xl-6 col-md-8 col-11">
         {this.renderItems()}
      </div>
    );
  }
}



// return <ContactRow key={film.id} {...film} rating={this.getAverage(film.ratings)} onClickDelete={this.onClickDeleteFilm.bind(this, film)}/>
