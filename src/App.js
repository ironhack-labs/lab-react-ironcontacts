import React from 'react';
import logo from './logo.svg';
import './App.css';
import allContacts from './contacts.json'
import Contacts from './components/Contact';

class App extends React.Component {

  state = {
    firstContacts: allContacts.slice(0,5)
  }

  addRandomContact = () => {
    const selectedRandomContact = allContacts[Math.floor(Math.random()*allContacts.length)];
    this.setState({
        firstContacts: [...this.state.firstContacts, selectedRandomContact]
    });
  }

  sortContact = () => {
    const sortedNameList = this.state.firstContacts.sort(function (a, b) {
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      } else {
        return 0
      }
    })
    this.setState({
      firstContacts: [...sortedNameList]
    })
  }

  sortPopularity = () => {
    const sortedPopularityList = this.state.firstContacts.sort(function (a, b) {
      if (a.popularity < b.popularity) {
        return 1
      } else if (a.popularity > b.popularity) {
        return -1
      } else {
        return 0
      }
    })
    this.setState({
      firstContacts: [...sortedPopularityList]
    })
  }

  deleteContact = (id) => {

    const deleteTheContact = this.state.firstContacts.filter(contact => contact.id !== id)

    this.setState({
      firstContacts: deleteTheContact
    })
  }

  render () {
    return (
      <div className="App">
        <h1 style={{textAlign: 'center'}}>IronContacts</h1>
          <button className="add-contact" onClick={this.addRandomContact}>Add random contact</button>
          <button className="sort-contact" onClick={this.sortContact}>Sort by name</button>
          <button className="sort-contact" onClick={this.sortPopularity}>Sort by popularity</button>
          {this.state.firstContacts.map((contact, idx) => {
              return(
                <Contacts 
                  name={contact.name} 
                  popularity={contact.popularity.toFixed(2)} 
                  picture={contact.pictureUrl} 
                  deleteContact={this.deleteContact}
                />
              )
            })
          }
      </div>
    )
  }
}

export default App;
