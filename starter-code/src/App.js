import React, { Component } from 'react';
import contacts from './contacts.json'
import IronContacts from './components/IronContacts'

class App extends Component {

  state = {
    contactsArray: contacts.slice(0, 5)
  }

  randomContact = () => {
    const randomIndex = Math.floor(Math.random(contacts.length) * 100)
    this.state.contactsArray.push(contacts[randomIndex])
    let newContactsArray = this.state.contactsArray

    this.setState({
      contactsArray: newContactsArray
    })
  }

  sortByName = () => {

    let newContactsArray = this.state.contactsArray.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0
    });
    this.setState({ contactsArray: newContactsArray })
  }

  sortByPopularity = () => {

    let newContactsArray = this.state.contactsArray.sort((a, b) => {

      if (a.popularity < b.popularity) {
        return 1
      }
      if (a.popularity > b.popularity) {
        return -1
      }
      return 0
    })
    this.setState({ contactsArray: newContactsArray })
  }

  deleteContact = (i) => {
    this.state.contactsArray.splice(i, 1)
    let newContactsArray = this.state.contactsArray
    this.setState({ contactsArray: newContactsArray })
  }


  render() {

    const contactElements = this.state.contactsArray.map((el, i) => {
      return (
        <tr key={i}>
          < IronContacts deleteContact={() => this.deleteContact(i)} data={el} key={i} ></IronContacts >
        </tr>
      )
    })

    return (
      
      <div className="App" >

        <button onClick={() => this.randomContact()}> Add Random Contact</button>
        <button onClick={() => this.sortByName()}> Sort By Name</button>
        <button onClick={() => this.sortByPopularity()}> Sort by Popularity</button>

        <table>
          <tbody>
            <tr>
              <th colSpan='3'> <h1>Iron Contacts</h1></th>
            </tr>
            <tr>
              <th>
                Picture
                </th>
              <th >
                Name
              </th>
              <th>
                Popularity
              </th>
            </tr>
            {contactElements}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App