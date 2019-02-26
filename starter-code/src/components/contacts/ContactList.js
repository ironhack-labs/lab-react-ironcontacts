import React, { Component } from 'react';
import ContactItem from './ContactItem';
import contacts from '../../contacts.json';
// import Button from '../misc/Button';

export default class ContactList extends Component  {

  constructor(props){
    super(props);
    this.state = {
      contacts : [...contacts].filter( (c, index) => index < 5),
      sByName: false,
      sByPopularity: false
    }  
  }

  onClickDeleteContact = (contact) => {
    this.setState({
      contacts: this.state.contacts.filter(c => c.name !== contact.name)
    })
  }

  randomContact = () => {
    let randomIndex = Math.floor(Math.random() * [...contacts].length);
    let inserted = false;
    while (inserted === false){
      if (this.state.contacts.indexOf(contacts[randomIndex]) === -1){
        inserted = true;
        return contacts[randomIndex];
      } else {
        randomIndex = Math.floor(Math.random()* [...contacts].length);}
    }
  }

  onClickAddRandomContact = () => {
    if (this.state.sByName){
      const contactsSorted = [...this.state.contacts,this.randomContact()].sort((a, b) =>{
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        else return 0;
      })
      this.setState({
        contacts: contactsSorted
      })
    } else if (this.state.sByPopularity){
        const contactsSorted = [...this.state.contacts,this.randomContact()].sort((a, b) => b.popularity - a.popularity );
        this.setState({
          contacts: contactsSorted
        })
      }
  }

  onClickSortByName = () => {
    const sortedByName = this.state.contacts.sort((a, b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      else return 0;
    } );
    this.setState({
      contacts: sortedByName,
      sByName: true,
      sPopularity: false
    });
  };

  onClickSortByPopularity = () => {
    const sortedByPop = this.state.contacts.sort((a, b) => b.popularity - a.popularity );
    this.setState({
      contacts: sortedByPop,
      sByName: false,
      sByPopularity: true
    });
  };

  renderItems = () => {
    const items = this.state.contacts.map((contact, index) => {
    return <ContactItem key={index} {...contact} onClickDelete={this.onClickDeleteContact.bind(this, contact)}/>});
    return items;  
  }

  isSortedByName = () => {
    if (this.state.sByName){
      return "btn btn-outline-secondary active";
    } else return "btn btn-outline-secondary";
  }

  isSortedByPopularity = () => {
    if (this.state.sPopularity){
      return "btn btn-outline-secondary active";
    } else return "btn btn-outline-secondary";
  }

  render(){
    return(
      <div>
        <button type="button" className="btn btn-outline-secondary" onClick={this.onClickAddRandomContact.bind(this)}>Add random Contact</button>
        <button type="button" className={this.isSortedByName()} onClick={this.onClickSortByName.bind(this)}>Sort by name</button>
        <button type="button" className={this.isSortedByPopularity()} onClick={this.onClickSortByPopularity.bind(this)}>Sort by popularity</button>
        <table className="table table-borderless table-striped mx-auto">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.renderItems()}
          </tbody>
        </table>
      </div>
    );
  }
}

