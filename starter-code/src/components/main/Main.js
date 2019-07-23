import React, { Component } from 'react';
import ContactCard from '../contactcard/ContactCard'
import contacts from '../../contacts.json';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: contacts.splice(0, 5),
      remainingContacts: contacts.splice(5)
    }
  }

  showContacts = () => {
    return (
      this.state.contacts.map((eachContact, i) => {
        return (
          <ContactCard
            key={i}
            theName={eachContact.name}
            thePictureUrl={eachContact.pictureUrl}
            thePopularity={eachContact.popularity}
            deleteTheContact={() => { this.deleteContact(i) }}
          />
        )
      })
    )
  }

  addRandomContact = () => {
    let currentClone = [...this.state.contacts]
    let remainingClone = [...this.state.remainingContacts];

    let randomContactIndex = Math.floor(Math.random() * remainingClone.length);

    currentClone.push(remainingClone[randomContactIndex])
    remainingClone.splice(randomContactIndex, 1)

    this.setState({ contacts: currentClone, remainingContacts: remainingClone }, () => {
      console.log(this.state.remainingContacts)
    })
  }

  sortByName = () => {
    let currentClone = [...this.state.contacts]

    currentClone.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    })


    this.setState({ contacts: currentClone }, () => {
      console.log(this.state.contacts)
    })
  }

  sortByPopularity = () => {
    let currentClone = [...this.state.contacts]

    currentClone.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else {
        return -1;
      }
    })


    this.setState({ contacts: currentClone }, () => {
      console.log(this.state.contacts)
    })
  }

  deleteContact = (indexOfContact) => {

    let clone = [...this.state.contacts];
    let remainingClone = [...this.state.remainingContacts];

    remainingClone.push(clone[indexOfContact])
    clone.splice(indexOfContact, 1);


    this.setState({ contacts: clone, remainingContacts: remainingClone }, () => {
      console.log(this.state.contacts, this.state.remainingContacts)
    })
  }


  render() {
    return (
      <div>
        <h2>Iron Contacts</h2>
        <button onClick={() => (this.addRandomContact())}>Add Random Contact</button>
        <button onClick={() => (this.sortByName())}>Sort By Name</button>
        <button onClick={() => (this.sortByPopularity())}>Sort By Popularity</button>
        <div className='contact-listing'>
          {this.showContacts()}
        </div>
      </div>
    );
  }
}

export default App;
