import React, { Component } from 'react';
import contacts from '../../contacts.json';
import OneContact from '../OneContact/OneContact';

class ContactList extends Component {
  state = {
    contactList: [
      contacts[0],
      contacts[1],
      contacts[2],
      contacts[3],
      contacts[4],
    ]
  }

  
  

  addRandomContact() {
    let listCopy = [...this.state.contactList];
    let random = Math.floor(Math.random() * contacts.length)
    
    listCopy.push(contacts[random]);

    this.setState({
      contactList: listCopy,
    })

  }

  sortByName() {
    let sortedList = [...this.state.contactList];

    sortedList.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name ) {
        return 1;
      } else {
        return 0;
      }
    });

    this.setState({
      contactList: sortedList,
    })
    
  }

  sortByPopularity() {
    let popList = [...this.state.contactList];

    popList.sort((a, b) => {
      return a.popularity - b.popularity;
    })

    this.setState({
      contactList: popList,
    })
  }

  deleteContact(contactIndex) {
    let updatedList = [...this.state.contactList];

    updatedList.splice(contactIndex, 1);

    this.setState({
      contactList: updatedList,
    })
  }


  render() {
    console.log(this.state.contactList);
    
    return(
      <div className="ContactList">
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.contactList.map((singleContact, index) => {
                return <OneContact key={index} deleteButton={() => this.deleteContact(index)} {...singleContact}/>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ContactList;