import React, { Component } from 'react';

import './App.css';
import contacts from './contacts.json';
import Card from './Components/Card';
import Button from './Components/Button';


class App extends Component {

  state = {
    contacts: contacts.sort(() => Math.random() -0.5).slice(-0,5),
    contactsList: contacts
  }

  addContactHandler = () => {
    const contactsCopy = this.state.contacts;
    let randomContact = Math.floor(Math.random() * contacts.length);
    contactsCopy.push(contacts[randomContact]);

    //console.log('was clicked')
    this.setState({
      contacts: contactsCopy
    });
  };

  sortByNameHandler = () => {
    const contactsSort = [...this.state.contacts];
     contactsSort.sort((a, b) => {
       if (a.name > b.name) {
         return 1;
       }
       if (a.name < b.name) {
         return -1;
       }
       return 0;
     });

    this.setState({
      contacts: contactsSort
    });
  };

  sortByPopularity = () => {
    const popularitySort = [...this.state.contacts];
    popularitySort.sort((a,b)=> Number(b.popularity) - Number(a.popularity));
    this.setState({
      contacts : popularitySort
    });
  };

  deleteContactHandler = (contactIndex) => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(contactIndex, 1);
    this.setState({
      contacts: contactsCopy
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <i className="material-icons">star</i>
          <h1 className="App-title">Iron Contacts</h1>
        </header>
        <Button click={this.addContactHandler}>Add Contact</Button>
        <Button click={this.sortByNameHandler}>Sort by name</Button>
        <Button click={this.sortByPopularity}>Sort by Popularity</Button>
        <br />
        <div className="container">
          {this.state.contacts.map((e, i) => (
            <Card
              key={i}
              name={e.name}
              pictureUrl={e.pictureUrl}
              popularity={e.popularity}
              clickToDelete={() => this.deleteContactHandler(i)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
