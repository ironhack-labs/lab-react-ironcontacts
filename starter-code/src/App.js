import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contacts from './components/Contacts'
import { Button, Radio, Icon } from 'antd'

export default class App extends Component {

  state= {
    contacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]],
    size: 'large'
  }

  addContact=() => {
    this.setState(prevState => {
      return {
        ...prevState,
        contacts: [...prevState.contacts, contacts[prevState.contacts.length]]
      }
    })
  }

  sortContactsByName=() => {
    this.setState((prevState) => {
      return {
        ...prevState,
        contacts: prevState.contacts.sort((a,b)=> {
          if (a.name>b.name) return 1
          else if (a.name<b.name) return -1
          else return 0
        })
      }
    })
  }

  sortContactsByPopularity=() => {
    this.setState((prevState) => {
      return {
        ...prevState,
        contacts: prevState.contacts.sort((a,b)=> {
          if (a.popularity<b.popularity) return 1
          else if (a.popularity>b.popularity) return -1
          else return 0
        })
      }
    })
  }

  deleteContact= (name) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        contacts: prevState.contacts.filter((e)=> e.name !== name)
      }
    })
  }



  render() {
    const {contacts, size} = this.state

    return (
      <div className="App">
        <h1>IronContacts - The Hollywood Celebs List for Nosy People</h1>
        <Radio.Group value={size} >
          <Radio.Button value="Add Random" onClick={this.addContact}>Add Random Celebrity</Radio.Button>
          <Radio.Button value="Sort by Name" onClick={this.sortContactsByName}>Sort By Name</Radio.Button>
          <Radio.Button value="Sort by Popularity" onClick={this.sortContactsByPopularity}>Sort By Popularity</Radio.Button>
        </Radio.Group>
        {contacts.length === 0 && <p>No contact data available</p>}

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
        {contacts.map((contact)=> (
        <Contacts key={contact.id} data={contact} remove={this.deleteContact}/>
        )) }
        </div>
      </div>
    );
  }
}

