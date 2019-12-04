import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contactsArr from './contacts.json';

class App extends Component {
  state = {
    contacts: contactsArr.slice(0, 5),
  };

  returnFive = () => this.state.contacts.slice(0,5);
  
  addRandomContact = e => {
    const newContacts = this.state.contacts; 
    newContacts.push(contactsArr[Math.floor(contactsArr.length * Math.random())]);
    this.setState({
      contacts: newContacts
    });
  };


  removeContact= index => {
    const contactsCopy = this.state.contacts;
    contactsCopy.splice(index, 1);
    this.setState({
      contacts: contactsCopy
    });
  };

  sortByName = () =>{
    const {contacts} = this.state;
    contacts.sort(function(a,b)  {
      if(a.name === b.name) return a.popularity - b.popularity;
      return a.name.localeCompare(b.name);
    })
    this.setState({
       contacts
    });
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>IronContacts</h1>
        <p className="App-intro">
        <button onClick={ this.addRandomContact}>
        Add random contact
        </button>

        <button onClick={ this.sortByName}>
        Sort by name
        </button>
          {this.state.contacts.map((items, index) => (
            <div id="row-container">
              <div id="row">
                <div> <img src={items.pictureUrl} alt="famousPeople" /> </div>
                <div> {items.name} </div>
                <div> {items.popularity} </div>
                <div> 
                <button onClick={(index) => this.removeContact(index)}>
                 Delete Contact
                </button>
             
                </div>
              </div>
            </div>

          ))}

        </p>
      </div>
    );
  }
}

export default App;
