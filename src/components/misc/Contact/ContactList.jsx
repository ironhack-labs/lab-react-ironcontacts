import React, { Component } from 'react'
import contactsArr from "../../../contacts.json";
import ContactItem from './ContactItem/ContactItem';


class ContactList extends Component {
  contacts = [...contactsArr].slice(0,5);
  state = {
    contacts: this.contacts,
    sortBy: null
  }

  randomIndex = () =>  (Math.floor(Math.random() *contactsArr.length))
 
  addRandom = () => {
    const index= this.randomIndex()
    const item = contactsArr[index]
    this.setState(() =>{
      return {
        contacts: [...this.state.contacts, item]
      }
    })
  }

  sortByName = () => {
    this.setState((prevState) => {
      return {
        contacts:[ ...prevState.contacts].sort((a,b)=> a.name.localeCompare(b.name))
      }
    })
  }

  sortByRating = () => {
    this.setState((prevState) => {
      return {
        contacts:[ ...prevState.contacts].sort((a,b)=> b.popularity-a.popularity)
      }
    })
  }

  onDeleteContact = (id) => {  
    this.setState({contacts: this.state.contacts.filter(contact =>  contact.id !== id )})
  }

  render () {
    const { contacts } = this.state
    console.log(contacts);
    return (

      <div className="ContactsList mt-4">
        <h1>Contacts available</h1>
        <div className='row ms-4'>
          <button onClick={this.addRandom} className="btn btn-dark col-sm-4">Add contact</button>
          <button onClick={this.sortByRating} className="btn btn-dark col-sm-4 ">Sort by rating</button>
          <button onClick={this.sortByName} className="btn btn-dark col-sm-4">Sort by name</button>
        </div>
        {
          contacts && contacts.length > 0 
            ? (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">Won an Oscar</th>
                    <th scope="col">Won an Emmy</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map( (contact, i) => (
                    <ContactItem key={contact.id} number={i + 1} {...contact} onDelete={() => this.onDeleteContact(contact.id)}/>
                  ))}
                </tbody>
              </table>
              ) : (
                <p>There is no contacts, sorry!</p>
              )
          }
      </div>
    )
  }
}

export default ContactList