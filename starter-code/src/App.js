import React, { Component } from 'react';
import './App.css';
import Contact from './Contact/Contact';
import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();

    this.randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    this.contactsClone = [...contacts]
    this.indexContacts = this.contactsClone.splice(0, 5)
    this.state = {
      contactsIni: this.indexContacts,
    }

  }


  addRandomContact() {
    let contactsClone2 = this.contactsClone.filter(contact => !this.indexContacts.includes(contact));
    let randomNumber = this.randomInt(0,contactsClone2.length-1)
    this.indexContacts.push(contactsClone2[randomNumber])

    this.setState({
      ...this.state,
      contactsIni: this.indexContacts,
    })

  }

    sortByName(){
      let ordererByName = this.indexContacts.sort(function(a, b){
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;;
      });

      this.setState({
        ...this.state,
        contactsIni: ordererByName,
      })

    }


    sortByPopularity(){
      let ordererByPopularity = this.indexContacts.sort(function(a, b){
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (a.popularity < b.popularity) {
          return 1;
        }
        return 0;;
      });
  
      this.setState({
        ...this.state,
        contactsIni: ordererByPopularity,
      })

    }

    deleteContact(theName){
      this.indexContacts = this.state.contactsIni.filter((contact)=> contact.name !== theName)
      this.setState({
        ...this.state,
        contactsIni: this.indexContacts
      })

    }

  render() {
    return (
      <div className="App">
        <h1>IRONCONTACTS <span>😎</span></h1>
        <div className="buttons-wrapper">
        <button onClick={() => this.addRandomContact()} type="button">Add random Star</button>
        <button onClick={() => this.sortByName()} type="button">Sort by Name</button>
        <button onClick={() => this.sortByPopularity()} type="button">Sort by Popularity</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture:</th>
              <th>Name:</th>
              <th>Popularity:</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsIni.map((contact, idx) => {
              return <Contact key={idx} picture={contact.pictureUrl} name={contact.name} popularity={contact.popularity} deleteContact={()=> this.deleteContact(contact.name)}></Contact>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
