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


  render () {
    const {contacts} = this.state;

    return (
      <div>
        <h1>Iron Contacts</h1>
        <CoolButton onClick={this.addRandomContact} isInfo isSmall>Add Random Contact</CoolButton>
        <table>
          <tbody>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
            </tr>
            {
               contacts.map((contact, index)=>
                <ContactCard index={index} key={index} contact={contact} />            
               )               
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default CardContainer;
