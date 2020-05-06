import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Actors from './components/contacts.js'

class App extends Component {
  
  state = {
    contacts: contacts.splice(0,5)
}

actorsSet = () => {
  const newContacts = this.state.contacts;
  this.setState({
    contacts: newContacts,
  });
};

randomActor = () => {
  const newActor = contacts[Math.floor(Math.random() * contacts.length)];
  const newContacts = this.state.contacts;

  newContacts.push(newActor)
  this.setState({
    contacts: newContacts,
  });
};

sortByName = () => {
    const newContacts = this.state.contacts;
    newContacts.sort((a, b) => (a.name > b.name) ? 1 : -1)
    console.log(newContacts)
  this.setState({
    contacts: newContacts,
  });
};

sortByPopularity = () => {
    const newContacts = this.state.contacts;
    newContacts.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1)
    console.log(newContacts)
  this.setState({
    contacts: newContacts,
  });
};

deleteActor = (x) => {
  const newContacts = [...this.state.contacts];
  const index = newContacts.map(e => e.id).indexOf(x)
    newContacts.splice(index,1)
  this.setState({
    contacts: newContacts,
  });
};

  render() {
    return (
      <div className="App">
      <div>
      <button onClick={this.randomActor}>Add Random Contact</button>
      <button onClick={this.sortByName}>Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
      </div>
      <div className="tableMain">
        <table>
          <thead>
          <div className="tableHead">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            </div>
        </thead>
       {this.state.contacts.map((contact) =>        
       (
      
            <Actors id={contact.id}  pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity} deleteActor={this.deleteActor} />
      )
      )}
      </table>
      </div>
    </div>
    );
  }
}

export default App;
