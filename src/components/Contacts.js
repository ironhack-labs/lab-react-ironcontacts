import React, { Component } from "react";
import contacts from './contacts.json';
import './Contacts.css';

const originalContacts = contacts.slice(0, 5);

  class ContactList extends Component {
   state = {
     contactList: originalContacts,
   };

    addRandomContact = () => {
     const newCelebs = this.state.contactList;
     const newContact = contacts[Math.floor(Math.random() * contacts.length)]
     if (!newCelebs.includes(newContact)) {
         newCelebs.push(newContact)
     }
     this.setState((prevState) => ({
       contactList: newCelebs,
     }));
   };

    sortByName = () => {
     this.setState((prevstate) => ({
       contactList: prevstate.contactList.sort((a, b) => {
         return a.name > b.name ? 1 : -1;
       }),
     }));
   };

    sortByPopularity = () => {
     this.setState((prevstate) => ({
       contactList: prevstate.contactList.sort((a, b) => {
         return a.popularity < b.popularity ? 1 : -1;
       }),
     }));
   };

    removeContact = (index) => {
     const newCelebs = this.state.contactList;
     newCelebs.splice(index, 1);
     this.setState(() => ({
       contactList: newCelebs,
     }));
   }

    render() {
     return (
       <div className="contact-list">
        <div className="master-header">
         <h1 className="title">Iron Contacts</h1>
        
         <div className="buttons">
           <button className="random-button" onClick={this.addRandomContact}>Add Random Contact</button>
           <button className="sort-name-button" onClick={this.sortByName}>Sort by Name</button>
           <button className="sort-pop-button" onClick={this.sortByPopularity}>Sort by Popularity</button>
         </div>
         </div>
         <hr/>
         <div className="table-header">
           <h3>Picture</h3>
           <h3>Name</h3>
           <h3>Popularity</h3>
           <h3>Action</h3>
         </div>
         {this.state.contactList.map((contact, index) => {
           return (
             <div className="content" key={contact.id}>
               <div className="img-box">
                 <img className="contact-picture" src={contact.pictureUrl} alt={contact.name}/>
               </div>
               <p className="contact-name">{contact.name}</p>
               <p className="contact-popularity">{contact.popularity}</p>
               <button className="delete-button" onClick={() => this.removeContact(index)}>Delete</button>
             </div>
           );
         })}
       </div>
     );
   }
 }

export default ContactList;