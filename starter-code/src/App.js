import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactCard from './component/ContactCard'



class App extends Component {
  state = {
    contactList: contacts.slice(0, 5)
  };

  addRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    const updatedContactList = [...this.state.contactList]
    updatedContactList.push(randomContact) //use the new array copy to override the previous state
    this.setState({ contactList : updatedContactList})
  }

  sortByName = () => {
    const updatedContactList = [...this.state.contactList]
    const sortedByNameList = updatedContactList.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      } 
      else {
        return 0;
      }
    })
    this.setState({ contactList : sortedByNameList})
  }

  sortByPopularity = () => {
    const updatedContactList = [...this.state.contactList]
    const sortedByPopularityList = updatedContactList.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      } 
      else {
        return 0;
      }
    })
    this.setState({ contactList : sortedByPopularityList})
  }

  deleteContact = (index) => {
    const updatedContactList = [...this.state.contactList]
    updatedContactList.splice(index, 1) //not in a var bc splice returns the el that you are removing, so if you put it inside a var it will give u ONLY the item
    this.setState({ contactList : updatedContactList})
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
         
            {this.state.contactList.map((contactObj, index) => {
              let contactIndex = index;

              return (
              <ContactCard
                key={contactObj.id}
                coolImage={contactObj.pictureUrl}
                name={contactObj.name}
                popularity={contactObj.popularity}
                clickToDelete={() => this.deleteContact(contactIndex)}
              />)
            })}
        </table>
      </div>
    );
  }
}

export default App;
