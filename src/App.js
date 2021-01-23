import React from 'react';
import './App.css';
import contacts from './contacts.json'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contactsList : contacts.slice(0,5)
    }
  }

  deleteContact(id) {
    
    let contactsClone = JSON.parse(JSON.stringify(this.state.contactsList))

    let filteredList = contactsClone.filter(contact => contact.id !== id)

    this.setState({
      contactsList: filteredList
    })

  }

  displayContact(contact) {
    return (
      <tr key={contact.id}>
        <td><img src={contact.pictureUrl} alt={contact.name} className ="contactPicture"/></td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td><button onClick={() => this.deleteContact(contact.id)}>Delete</button></td>
      </tr>
    );
  }


  addRandomContact(contactsArray) {

    let contactsClone = JSON.parse(JSON.stringify(this.state.contactsList))

    if (contactsClone.length === contactsArray.length) {
      alert('There are no more contacts available')
    } else {
      let keepLooking = true;
      while (keepLooking) {
        let randInt = Math.floor(Math.random() * (contactsArray.length-1))
        let contactToAdd = contactsArray[randInt];
        //This needs to be improved:
        //As contactsClone grows it gets more difficult to get a random int
        //that matches a contact which is not already in the contactList

        if (!contactsClone.some(contact => contact.id === contactToAdd.id)) {
          keepLooking = false;
          contactsClone.push(contactToAdd)
        }
      }
      this.setState({
        contactsList: contactsClone
      })
    }
  }

  sortByName(contactsArray) {

    let contactsClone = JSON.parse(JSON.stringify(this.state.contactsList));

    let sortedContacts = contactsClone.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    })

    this.setState({
      contactsList: sortedContacts
    })
  }

  sortByPopularity() {

    let contactsClone = JSON.parse(JSON.stringify(this.state.contactsList));

    let sortedContacts = contactsClone.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      }
      else if (a.popularity > b.popularity) {
        return -1;
      } else {
        return 0;
      }
    })

    this.setState({
      contactsList: sortedContacts
    })
  }


  render() {
    return (
      <div className="App" >
        <h1>IRONHACK CONTACTS</h1>
        <div>
          <button onClick={() => this.addRandomContact(contacts)} >Add Random Contact</button>
          <button onClick={() => this.sortByName(contacts)} >Sort by name</button>
          <button onClick={() => this.sortByPopularity(contacts)} >Sort by popularity</button>
        </div>
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[this.state.contactsList.map((contact) => {
                return this.displayContact(contact);
              })
            ]}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;