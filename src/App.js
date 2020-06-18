import React, { Component } from 'react'
import logo from './logo.svg';
import contacts from './contacts.json';
import IronContacts from './components/IronContacts.jsx';
import './App.css';

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
  }

  getRandomContact = () =>{
    let randomContact = Math.floor(Math.random() * Math.floor(contacts.length));
    return randomContact;
  }

  addOneRandomContact = () =>{
    let updatedList = [...this.state.contacts, contacts[this.getRandomContact()]];
    this.setState({
      contacts: updatedList
    });
  }

  sortByName = () => {
    let updatedList = [...this.state.contacts].sort((a, b) => {
          if (a.name < b.name){
            return -1;
          } else{
            return 1;
          }
        }
      );

    this.setState({
      contacts: updatedList
    });
  }

  sortByPopularity = () => {
    let updatedList = [...this.state.contacts].sort((a, b) => {
      if (a.popularity < b.popularity){
        return -1;
      } else{
        return 1;
      }
    }
  );

this.setState({
  contacts: updatedList
});
  }

  render() {
    return (
      <div className="App">

        <button onClick={this.addOneRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>

        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.contacts.map((contact, index) => {
                return  <IronContacts key={`${index}-${contact.name}`} name={contact.name} pictureUrl={contact.pictureUrl} popularity={contact.popularity}/>
              })
            }
          </tbody>
        </table>
    
      </div>
    )
  }
}

export default App;
