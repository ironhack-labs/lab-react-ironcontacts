import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  
  state = {
    contactDisplayed: contacts.slice(0, 5)
  }


  addRandom = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const contactDisplayedCopy = [...this.state.contactDisplayed];
    contactDisplayedCopy.push(randomContact);
    this.setState((state, prop) => ({
      contactDisplayed: contactDisplayedCopy
    }))
  }

  sortName = () => {
    const contactCopy = [...this.state.contactDisplayed];
    const orderedName = contactCopy
    .sort(function(a, b) {
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;

      // return a.name.toLowerCase() - b.name.toLowerCase()? 1: -1;
    });
    this.setState((state, prop) => ({
      contactDisplayed: orderedName
    }))
  }

  sortPopularity = () => {
    const contactCopy = [...this.state.contactDisplayed];
    const orderedPop = contactCopy
    .sort(function(a, b) {
      if(a.popularity < b.popularity) return 1;
      if(a.popularity > b.popularity) return -1;
      return 0;
    });
    this.setState((state, prop) => ({
      contactDisplayed: orderedPop
    }))
  }

  deleteContact = (event) => {
    const deleteId = event.target.getAttribute('id');
    const contactCopy = [...this.state.contactDisplayed];
    const newContacts = contactCopy.filter(function(obj) {
      return obj.id !== deleteId;
    })
    this.setState((state, prop) => ({
      contactDisplayed: newContacts
    }))
  }
  
  render(){

  const contactList = this.state.contactDisplayed.map(contact => (
      <tr>
        <td><img src={contact.pictureUrl} alt="" className='contactImg'/></td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td><button onClick={this.deleteContact} id={contact.id}>Delete</button></td>
      </tr>
      ));  

    return (
      <div className="App">
        <header className="App-header">
        
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add random contact</button>
        <button onClick={this.sortName}>Sort by <strong>Name</strong></button>
        <button onClick={this.sortPopularity}>Sort by <strong>Popularity</strong></button>
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
              
            </tr>
            {contactList}
          </table>
        </header>
      </div>
    );
  }
}

export default App;
