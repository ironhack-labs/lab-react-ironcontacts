import React, { Component } from 'react';
import contacts from '../contacts.json';
import otherContacts from '../contacts.json'
import ContactCard from './ContactCard';
import CoolButton from './CoolButton';

class CardContainer extends Component {
  state = { contacts: contacts.slice(0,5)}
            
    

  addRandomContact = () => {
    
    const {contacts} = this.state;
    const contactsCopy = [...otherContacts];
    const restOfContacts = contactsCopy.splice(5);   
    const randomContact = Math.floor(Math.random() * restOfContacts.length);      
    const newContact = restOfContacts[randomContact];       
    this.setState({contacts: [...contacts, newContact] });   
            
  }

  sortByName = () => {
    const contactsCopy = [...this.state.contacts];   
    contactsCopy.sort( (a, b) => a.name.localeCompare(b.name));    
    this.setState({contacts: contactsCopy})
  }
  sortByPopularity = () => {
    const contactsCopy = [...this.state.contacts];   
    contactsCopy.sort( (a, b) => a.popularity - b.popularity);    
    this.setState({contacts: contactsCopy})
  }

  deleteContact = (index) => {
    const copyOfContacts = [...this.state.contacts];
    copyOfContacts.splice(index, 1);
    this.setState({
      contacts: copyOfContacts
    });
  };


  render () {
    const {contacts} = this.state;

    return (
      <div>
        <h1>Iron Contacts</h1>
        <CoolButton onClick={this.addRandomContact} isInfo isSmall isSpaced >Add Random Contact</CoolButton>
        <CoolButton onClick={this.sortByName} isInfo isSmall isSpaced>Sort by Name</CoolButton>
        <CoolButton onClick={this.sortByPopularity} isInfo isSmall isSpaced >Sort by Popularity</CoolButton>
        <table>
          <tbody>
            <tr>
                <th className="td-data">Picture</th>
                <th className="td-data">Name</th>
                <th className="td-data">Popularity</th>
            </tr>
            {
               contacts.map((contact, index)=>
                <ContactCard deleteContactButton={this.deleteContact} index={index} key={index} contact={contact} />            
               )               
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default CardContainer;
