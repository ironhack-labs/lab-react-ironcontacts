import React from 'react';
import contacts from '../../contacts.json';
import Contact from '../Contact.component/Contact';

class ContactsList extends React.Component {
  state = {
    contactList: contacts.slice(0, 5),
  };

  removeContacts = (id) =>{
    this.setState({ contactList: this.state.contactList.filter((contact) => contact.id !== id )})
  }

  displayContacts = () => {
    return this.state.contactList.map((contact) => {
      return (
          <Contact {...contact} removeItem={() => this.removeContacts(contact.id)} key={contact.id}/>
      );
    });
  };

  sortContactsByName = () => {
    const arrayCopy = [...this.state.contactList];
    this.setState({ contactList: arrayCopy.sort((el1, el2) =>{
      if(el1.name === el2.name){
        return 0;
      }else if(el1.name < el2.name){
        return -1;
      }else{
        return 1;
      }
    })})
  }

  sortContactsByPopularity = () => {
    const arrayCopy = [...this.state.contactList];
    this.setState({ contactList: arrayCopy.sort((contact1, contact2) => contact2.popularity - contact1.popularity) })


  }

  addContact = () => {
      const arrayCopy = [...this.state.contactList];
      arrayCopy.push(contacts[Math.floor(Math.random()*contacts.length)])

      this.setState({contactList: arrayCopy})
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addContact()}>Add random contact</button>
        <button onClick={() => this.sortContactsByName()}>Sort by name</button>
        <button onClick={() => this.sortContactsByPopularity()}>Sort by popularity</button>
        {this.displayContacts()}
      </div>
    );
  }
}

export default ContactsList;
