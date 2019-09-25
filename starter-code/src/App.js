import React, { Component } from 'react';
import { Button } from 'antd';
import contactsRaw from './contacts.json'
import './App.css';
import Contacts from './components/Contacts'

const contacts = contactsRaw.map((contact, index) => {
  return { ...contact, key: index };
})

class App extends Component {
  state = {
    contacts: [
      contacts[0],
      contacts[1],
      contacts[2],
      contacts[3],
      contacts[4],
    ]
  };

  addRandom = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        contacts: [...prevState.contacts, contacts[prevState.contacts.length]]
      }
    })
  }

  sortByName = () => {
    this.setState(prevState => {
      const { contacts } = prevState;

      contacts.sort((a, b) => {
        if (a.name > b.name) return 1;
        else if (a.name < b.name) return -1;
        return 0
      });
      return { contacts };
    });
  };

  sortByPopularity = () => {
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

  deleteOne = (name) => {
    this.setState(prevState => {
      return {
        ...prevState,
        contacts: prevState.contacts.filter((e)=> e.name !== name)
      }
    })
  }
  render() {

    const { contacts } = this.state
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div >
          <Button value="Add Random" onClick={this.addRandom}>Add Random Celebrity</Button>
          <Button value="Sort by Name" onClick={this.sortByName}>Sort By Name</Button>
          <Button value="Sort by Popularity" onClick={this.sortByPopularity}>Sort By Popularity</Button>
        </div>
        {contacts.length === 0 && <p>No contact data available</p>}

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
        {contacts.map((contact)=> (
        <Contacts key={contact.id} data={contact} remove={this.deleteOne}/>
        )) }
        </div>
      </div>
    );
  }
}

export default App;
