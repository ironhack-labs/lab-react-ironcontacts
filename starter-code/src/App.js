import React, { Component } from 'react';
import './App.css';
import contactsJson from './contacts.json';


const contactsData = contactsJson.slice(0,5)

class App extends Component {
  //state is an object, contacts is an array
  //whenver i refresh, the state sets back to initial state
  state = {
    contacts: contactsData
  }

  addContact = () => {
    //set up random index 
    const randomContact = contactsJson[Math.floor(Math.random() * (contactsJson.length - 1))]
    //add it to the contacts array; make sure use object key-value notation
    this.setState ({
      contacts : this.state.contacts.concat(randomContact)
    })
  }

  sortByName = () => {
    //map data first to avoid it get mutated.
    const sortedByName = this.state.contacts.map(contact => contact).sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
    this.setState ({
        contacts : sortedByName
      }
    )
  }

  sortByPopularity = () => {
    const sortedByPopularity = this.state.contacts.map(contact => contact).sort(function (a,b) {
      return b.popularity - a.popularity
    });
    this.setState ( {
        contacts : sortedByPopularity
      }
    )
  }

  deleteContact = (index) => {
    //splice() return the removed parts
    const contactCopy = this.state.contacts.map(contact => contact)
    const deletedContact = contactCopy.splice(index,1)
    this.setState ({
      contacts : contactCopy
      }
    )
  }



  // .map((item) => {return.....})
  // when it's a varaible you don't need " "
  // .map passes 2 paramenters (curItem, curIndex)
  render() {
      const contactsDataItems = this.state.contacts.map((contact, index) => {
        //it calls the deleteContact function
        const handleDelete = () => {
          return this.deleteContact(index)
        }

        return (
        <tr key={contact.id}> 
            <td><img src={contact.pictureUrl} style={{ width: '100px' }}/></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td><button onClick={handleDelete}>delete</button></td>
        </tr>
        )
      })
    return (
      <div className="App">
        <h1>Display contacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Pouplarity</th>
            <th>Action</th>
          </tr>
          {/* use {} because it is not a component; it's an array */}
          {contactsDataItems}
        </table>
          {/* <starsList stars={this.state.stars} /> */}
      </div>
    );
  }
}

export default App;
