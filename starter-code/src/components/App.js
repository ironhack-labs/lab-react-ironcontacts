import React, { Component } from 'react';
import './App.css';

import contacts from '../contacts.json';
import TableContact from './ui/contacts/Contacts';


class App extends Component {

  constructor() {
    super()

     this.contactsCopy = [...contacts]
     this.fiveFirstContacts = this.contactsCopy.splice(0,5)
     this.state = { selectionContacts: this.fiveFirstContacts}

  }

  addRandomContact = () => {
    let contactsFiltered = this.contactsCopy.filter(contact => !this.fiveFirstContacts.includes(contact))
    let randomContact = contactsFiltered[Math.floor(Math.random() * contactsFiltered.length - 1)]
    this.fiveFirstContacts.push(randomContact)

    this.setState({selectionContacts: this.fiveFirstContacts})

  }

  sortByName = () => {
    this.fiveFirstContacts.sort((a, b) => {

      if (a.name > b.name) {
        return 1
      } else if (a.name < b.name) {
        return -1
      } else {
        return 0
      }
      
    })

    this.setState({selectionContacts: this.fiveFirstContacts})
  }

  sortByPopularity = () => {
    this.fiveFirstContacts.sort((a, b) => {

      if (a.popularity < b.popularity) {
        return 1
      } else if (a.popularity > b.popularity) {
        return -1
      } else {
        return 0
      }
    })

    this.setState({selectionContacts: this.fiveFirstContacts})
  }

  deleteContact = (id) => {
    this.fiveFirstContacts.splice(id,1)

    this.setState({selectionContacts: this.fiveFirstContacts})
  }

  render() {
    return (
      <section className="container">

        <h1>IronContacts</h1>

        <div className="buttons-div">
          <button onClick={this.addRandomContact} >Add random Contact</button>
          <button onClick={this.sortByName} >Sort by name</button>
          <button onClick={this.sortByPopularity} >Sort by popularity</button>
        </div>

        <table className="contact">
      
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>
            </tr>
          </thead>
      
          <tbody>
            {this.state.selectionContacts.map((elm, idx) => (

              <TableContact key={idx} picture={elm.pictureUrl} name={elm.name} popularity={elm.popularity} 
                deleteContact={ () => this.deleteContact(idx) }
              />
                )
              )            
            }
            
          </tbody> 
          
        </table>
      </section>
    );
  }
}

export default App;
