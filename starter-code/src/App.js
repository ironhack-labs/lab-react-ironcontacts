import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Header from './components/Header';
import ContactsList from './components/ContactList';
import AddRandom from './components/AddRandom';

class App extends Component {
  state = {
    contactsToDisplay : contacts.filter( (_, i) => i < 5)
  }
  
  addRandom = () => {
    let randomContact = contacts[(Math.floor(Math.random() * contacts.length))];
    let newList = [...this.state.contactsToDisplay];
    if (!newList.includes(randomContact)) {
      newList.push(randomContact);
      this.setState({ contactsToDisplay: newList });
    } else { this.addRamdon(); }

  }

  render() {
    return (
      <div>
        <Header />
        <AddRandom onAddRandom={this.addRandom}/>
        <div className="row">
        <ContactsList contacts={this.state.contactsToDisplay} />
        </div>
      </div>
    );
  }
}

export default App;
