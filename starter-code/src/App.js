import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      contacts: contacts.slice(0, 5),
    }
  }

  addRandomContact(){
    let currentContacts = [...this.state.contacts].map(contact => contact.name);
    let availableContacts = contacts.filter(contact => !currentContacts.includes(contact.name));
    if(availableContacts.length === 0) return;
    let newContact = availableContacts[Math.floor(Math.random()*availableContacts.length)];

    this.setState({
      ...this.state,
      contacts: [...this.state.contacts].concat(newContact)
    })
  }
  sortByName(){
    this.setState({
      ...this.state,
      contacts: [...this.state.contacts].sort((a, b) => a.name.split(' ')[0].localeCompare(b.name.split(' ')[0]))
    })
  }
  sortByPopularity(){    
    this.setState({
      ...this.state,
      contacts: [...this.state.contacts].sort((a, b) => b.popularity - a.popularity)
    })
  }

  removeMovie(index){
    this.setState({
      ...this.state,
      contacts: this.state.contacts.slice(0,index).concat(this.state.contacts.slice(index+1))
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>IronContacts</h1>
        <div className="actions">
          <button className="button" onClick={()=>this.addRandomContact()}>Add random Actor</button>
          <button className="button" onClick={()=>this.sortByName()}>Sort by Name</button>
          <button className="button" onClick={()=>this.sortByPopularity()}>Sort by Popularity</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => {
            return (
              <tr key={contact.name}>
                <td><img src={ contact.pictureUrl} alt={contact.name}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td><button onClick={()=>this.removeMovie(index)} className="button button-delete">Delete</button></td>
              </tr>
            )})}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
