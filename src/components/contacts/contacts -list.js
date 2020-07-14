import React, { Component } from 'react';

import contacts from './contacts.json';
import './contacts-list.css';

class ContactsList extends Component {

  constructor() {
    super()
    this.state = {
      contacts: contacts.slice(0, 5),
    }
  }

  addRandomContact = () => {

    const randomPosition = Math.floor(Math.random() * contacts.length)
    const randomContact = contacts[randomPosition]
    const newRandomContact = [...this.state.contacts]

    newRandomContact.push(randomContact);

    this.setState({ contacts: newRandomContact })
  }
  
  sortByName = () => {

    const orderedByName = [...this.state.contacts].sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    })

    this.setState({ contacts: orderedByName })

  }

  sortByPopularity = () => {

    const orderedByPopularity = [...this.state.contacts].sort(function (a, b) {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (b.popularity < a.popularity) {
        return -1;
      }
      return 0;
    })

    this.setState({ contacts: orderedByPopularity })

  }

  deleteContacts = id => {
  
      const contactsCopy = [...this.state.contacts]
      contactsCopy.splice(id, 1)

  this.setState({ contacts: contactsCopy })
  }


  render() {
    return (
      <>
        <section>
          <h2>IronContacts</h2>
          <button className='topButtons' onClick={this.addRandomContact}>Add Random Contact</button>
          <button className='topButtons' onClick={this.sortByName} >Sort by name</button>
          <button className='topButtons' onClick={this.sortByPopularity}>Sort by popularity</button>
          </section>
          <section >
          <table>
            <thead>
              <tr>
                <th >Picture</th>
                <th >Name</th>
                <th >Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((elm, idx) => (
                <tr key={idx}>
                  <th>
                    <img src={elm.pictureUrl} alt="Contact" />
                  </th>
                  <th className= 'contentText'>  {elm.name}</th>
                  <th className= 'contentText'>{elm.popularity.toFixed(2)}</th>
                  <th><button className = 'rigthButton' onClick={this.deleteContacts}>Eliminar</button></th>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </>
    );
  }
}

export default ContactsList;
