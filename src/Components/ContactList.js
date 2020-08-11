import React, { Component } from 'react';
import contactsFromJson from '../contacts.json';
import BlockCelebInfo from './BlockCelebInfo';
import { ButtonPiece } from './ButtonPiece';


// const contact5 = () => {
//     var theFive = []
//     for (let i = 0; i<5; i++){
//        theFive.push(contacts[i])
//     }
//     return theFive   
// }
// contacts: contact5()           line 19

class ContactList extends Component {
    constructor() {
      super();
      this.state = { 
        contacts: contactsFromJson.slice(0, 5),
        allContactsleft: contactsFromJson.slice(5)

      } 
    }
    
    addRandomContact = () => {
      const randomIndex = Math.floor(Math.random()*this.state.allContactsleft.length)
      const randomContact = this.state.allContactsleft.splice(randomIndex,1)
      this.state.contacts.push(randomContact[0])
      let updatedContacts = this.state.contacts
      this.setState({
        contacts: updatedContacts
      })
    }

    sortByName = () => {
      const sortedNameContacts = this.state.contacts.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
      this.setState({
        contacts: sortedNameContacts
      })
    }
    sortByPopularity = () => {
      const sortedPopularContacts = this.state.contacts.sort(function(b, a){return a.popularity - b.popularity})
      this.setState({
        contacts: sortedPopularContacts
      })
    }

    deleteContact = (contactIndex) => {

      const filteredContacts = this.state.contacts.filter(contact => contact.id !== contactIndex)
      this.setState({
        contacts: filteredContacts,
      })
    }

    render() {
        // console.log(this.state.contacts)
      return (
        <div>
            <ButtonPiece onClick={this.addRandomContact} >Add Random Contact</ButtonPiece>
            <ButtonPiece onClick={this.sortByPopularity}>Sort by Popularity</ButtonPiece>
            <ButtonPiece onClick={this.sortByName}>Sort by Name</ButtonPiece>
            <table>
              <thead>
                <tr>
                  <td>Picture</td>
                  <td>Name</td>
                  <td>Popularity</td>
                </tr>
              </thead>
              <tbody>
                {this.state.contacts.map((oneContact) => {
                  return (
                    <BlockCelebInfo key={oneContact.id} name={oneContact.name} pictureUrl={oneContact.pictureUrl} popularity={oneContact.popularity} index={oneContact.id} delete={this.deleteContact}/>
                    
                  )
                    {/* <BlockCelebInfo key={oneContact.id} {...oneContact} /> */}
                })}
              </tbody>
            </table>
        </div>
      );
    }
  }
  
  export default ContactList;