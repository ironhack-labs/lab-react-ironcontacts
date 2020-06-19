import React, { Component } from 'react'
import contacts from './contacts.json';
import IronContacts from './components/IronContacts.jsx';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.removeContact = this.removeContact.bind(this);
  }

  state = {
    contacts: contacts.slice(0, 5),
  }

  removeContact(indexN){
    let updatedlist = [...this.state.contacts];
    updatedlist.splice(indexN, 1);
    this.setState({ 
        contacts: updatedlist 
    });
  }

  getRandomContact = () =>{
    let randomContact = Math.floor(Math.random() * Math.floor(contacts.length));
    return randomContact;
  }

  addOneRandomContact = () =>{
    let updatedList = [contacts[this.getRandomContact()], ...this.state.contacts];
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
    });

    this.setState({
        contacts: updatedList
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <div className="buttons">
          <button onClick={this.addOneRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.contacts.map((contact, index) => {
                return  <IronContacts 
                            key={`${index}-${contact.name}`} 
                            name={contact.name} 
                            pictureUrl={contact.pictureUrl} 
                            popularity={contact.popularity}
                            remove={this.removeContact}
                        />
              })
            }
          </tbody>
        </table>
    
      </div>
    )
  }
}

export default App;
