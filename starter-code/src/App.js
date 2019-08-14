import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import contactsJSON from './contacts.json'
import Card from './components/Card-contact'

class App extends Component {
  constructor() {
    super()
    this.state = {
        contacts: []
    }
    this.completeList = contactsJSON
    this.randomContact = this.randomContact.bind(this)
    this.orderContactsByName = this.orderContactsByName.bind(this)
  }

  randomContact() {
    const randomIndex = Math.floor(Math.random() * (this.completeList.length - 0)) + 0;
    const randomElement = this.completeList[randomIndex]
    const newContacts = [...this.state.contacts, randomElement]
    this.setState( {contacts: newContacts} )
  }

  orderContactsByName() {
    const byNameList = this.state.contacts
    byNameList.sort(function(a, b) {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
    console.log(byNameList)
    this.setState( {contacts: byNameList} )
  }

  componentDidMount() {
    const initialAdded = this.completeList.slice(0, 5)
    this.setState( {contacts: initialAdded} )
  }

render() {  

    return (
      <div className="App">
        <h2>IronContacts</h2>
        <button className="btn-add" onClick={this.randomContact} >Add Random Contact</button>
        <button className="btn-add" onClick={this.orderContactsByName} >Order By Name</button>
        <table className="table-contact">
          <tr className="row-table">
            <td className="element-table">Picture</td>
            <td className="element-table">Name</td>
            <td className="element-table">Popularity</td>
            <td className="element-table">Action</td>
          </tr>
          <tr>
            <td>
              {
                this.state.contacts.map((elm, idx) => {
                  return <Card key={idx} contactName={elm.name} contactPicture={elm.pictureUrl} contactPopularity={elm.popularity} />
                })
              }
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default App;

