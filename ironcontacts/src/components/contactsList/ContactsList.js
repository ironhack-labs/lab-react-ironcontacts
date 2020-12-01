import React, { Component } from 'react';
import contacts from '../contacts.json'
import ContactCard from './ContactsCard'
import './ContactsList.css'


class Contacts extends Component {

  constructor() {

    super()

    this.state = {
  
      contactsList: contacts.slice(0, 5),
      buttonColor: 'pink',
      buttonColor1: 'pink',
      buttonColor2: 'pink',
      buttonColor3: 'pink'
    }
    
  }

  addRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
   
    if (!this.state.contactsList.includes(randomContact)) {
      const arrayCopy = [...this.state.contactsList]
      
      arrayCopy.push(randomContact)

      this.setState({

        contactsList: arrayCopy,
        buttonColor1: 'green',
        buttonColor2: 'pink',
        buttonColor3: 'pink'

      })
    } 

  }

  sortName = () => {

    this.state.contactsList.sort((a, b) => {
      
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }

      return 0
    })

    this.setState({
      contactsList: this.state.contactsList,
      buttonColor1: 'pink',
      buttonColor2: 'green',
      buttonColor3: 'pink'
    })

  }

  sortPopularity = () => {

    this.state.contactsList.sort((a, b) => { 

      if (a.popularity > b.popularity) {
        return 1
      }
      if (a.popularity < b.popularity) {
        return -1
      }

      return 0
    })

    this.setState({
      contactsList: this.state.contactsList,
      buttonColor1: 'pink',
      buttonColor2: 'pink',
      buttonColor3: 'green'
    })

  }

  deleteContact = contactIdToDelete => {

    this.setState({
      contactsList: this.state.contactsList.filter (elm => elm.id !== contactIdToDelete)  
    })
  }

  render() {
    return (
      <section className="App">
        <div className="btn">
          <button style={{background: this.state.buttonColor1}} onClick={this.addRandomContact}>Add Random Contact</button>
          <button style={{background: this.state.buttonColor2}} onClick={this.sortName}>Sort by Name</button>
          <button style={{background: this.state.buttonColor3}} onClick={this.sortPopularity}>Sort by popularity</button>
        </div>
        <h1>IronContacts</h1>
         <table className="contacts">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
              </tr>
          </thead>
          <tbody>
            {this.state.contactsList.map(elm => <ContactCard key={elm.id} pictureUrl={elm.pictureUrl} name={elm.name} popularity={elm.popularity} removeContact= {() => this.deleteContact (elm.id)}/>
            )}
          </tbody>
          </table>
      </section>
    )
  }

}

export default Contacts;
