import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contacts from './components/Contacts'

const fiveContacts = []
for (let i = 0; i < 5; i += 1) {
  fiveContacts.push(contacts[i])
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      contacts: fiveContacts
    }
  }

  addNewContact() {
    let random = Math.floor(Math.random() * (contacts.length - 5) + 5);
    const contactsCopy = [...this.state.contacts]
    contactsCopy.push(contacts[random])

    this.setState({
      contacts: contactsCopy
    })
  }

  sortByName() {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort((a, b) => a.name.localeCompare(b.name));
    
    this.setState({
      contacts: contactsCopy
    });
  }

  sortByPopularity() {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort((a, b) => a.popularity - b.popularity);
    
    this.setState({
      contacts: contactsCopy
    });
  }

  deleteContact(contactIndex) {
    const contactsCopy = [...this.state.contacts]; 
    contactsCopy.splice(contactIndex, 1);
    this.setState({
      contacts: contactsCopy
    });
  }

  render() {
    console.log(this.state.contacts)
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <button className="btns" onClick={() => this.addNewContact()}>Add Random Contact</button>
        <button className="btns" onClick={() => this.sortByName()}>Sort By Name</button>
        <button className="btns" onClick={() => this.sortByPopularity()}>Sort By Popularity</button>

        <Contacts 
        pictureUrl={this.state.contacts[0].pictureUrl}
        name={this.state.contacts[0].name}
        popularity={this.state.contacts[0].popularity}
        />
        <Contacts 
        pictureUrl={this.state.contacts[1].pictureUrl}
        name={this.state.contacts[1].name}
        popularity={this.state.contacts[1].popularity}
        />
        <Contacts 
        pictureUrl={this.state.contacts[2].pictureUrl}
        name={this.state.contacts[2].name}
        popularity={this.state.contacts[2].popularity}
        />
        <Contacts 
        pictureUrl={this.state.contacts[3].pictureUrl}
        name={this.state.contacts[3].name}
        popularity={this.state.contacts[3].popularity}
        />
        <Contacts 
        pictureUrl={this.state.contacts[4].pictureUrl}
        name={this.state.contacts[4].name}
        popularity={this.state.contacts[4].popularity}
        />
      </div>
    );
  }
}

export default App;
