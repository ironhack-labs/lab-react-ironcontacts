import React, { Component } from 'react';
import './App.css';
import contactsFromJSON from './contacts.json';
import Contact from './components/Contact'

class App extends Component {

  state = {
    firstVisibleContacts: contactsFromJSON.slice(0,5)
  }

  addRandomContact = () => {
    const contactsCopy = this.state.firstVisibleContacts;

    let randomIndex = Math.floor(Math.random() * contactsFromJSON.length);
    // console.log('contacts length:', contactsFromJSON.length)
    // console.log('Random Index:', randomIndex);

    const randomContact = contactsFromJSON[randomIndex];
    

    //If contact already exists, don't add it to the list
    const found = contactsCopy.some(element => element.id === randomContact.id);

    if(!found){
      contactsCopy.push(randomContact);
    } else {
      console.log(`Found repeated contact: ${randomContact.name}.`);
      //check if all contacts from contactsFromJSON have been added
      if(contactsCopy.length < contactsFromJSON.length){
        this.addRandomContact();
      } else {
        console.log('No more contacts to add');
      }
    }


    this.setState({
      firstVisibleContacts: contactsCopy
    });
  }

  deleteContact = (id) => {
    const contactsCopy = this.state.firstVisibleContacts;

    const deleteIndex = contactsCopy.findIndex(item => item.id === id);
    
    contactsCopy.splice(deleteIndex, 1);
    
    //sets movies copy to state
    this.setState({
      firstVisibleContacts: contactsCopy
    })
  }

  sortByName = () => {
    const contactsCopy = this.state.firstVisibleContacts;
    //console.log('contactsCopy', contactsCopy)
    
    const sortedContacts = contactsCopy.sort((a, b) => (a.name > b.name) ? 1: -1)
    //console.log('sortedContacts', sortedContacts)

    this.setState({
      firstVisibleContacts: sortedContacts
    })
  }

  sortByPopularity = () => {
    const contactsCopy = this.state.firstVisibleContacts;
    
    const sortedContacts = contactsCopy.sort((a, b) => (a.popularity > b.popularity) ? -1: 1)
    
    this.setState({
      firstVisibleContact: sortedContacts
    });
  }

  render() {
    return (
      <div className="App">
        <div className="fixed">
          <h1>IronContacts</h1>
          <button id="add-contact" onClick={this.addRandomContact}>Add Random Contact</button>
          <button id="sort-name" onClick={this.sortByName}>Sort by name</button>
          <button id="sort-popularity" onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
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
            {this.state.firstVisibleContacts.map(contact => {
              return <Contact key={contact.id} {...contact} clickToDelete={() => this.deleteContact(contact.id)} />
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
