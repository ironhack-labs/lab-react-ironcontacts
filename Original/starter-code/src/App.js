import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Producers.css';
import contacts from './contacts.json';
import Producers from './Producers';

class App extends Component {

  state = {
    contacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
  }

  addRandomContact = () => {
    let copyStateContacts = [...this.state.contacts];
    let x = Math.floor(Math.random()*copyStateContacts.length);
    let randomContact = copyStateContacts[x];

    copyStateContacts.push(randomContact);
    this.setState({contacts: copyStateContacts}); 
  }

  deleteProducer = (producerIndex) => {
    let copyStateContacts = [...this.state.contacts];

    copyStateContacts.splice(producerIndex, 1);
    this.setState({contacts: copyStateContacts}); 
  };

  sortByName = () => {
    this.setState({
      contacts: this.state.contacts.sort((a,b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(b.name.toLowerCase() < a.name.toLowerCase()) return 1;
        return 0;
      })
    });
  };

  sortByPopularity = () => {
    this.setState({
      contacts: this.state.contacts.sort((a,b) => {
        if(a.popularity < b.popularity) return -1;
        if(b.popularity < a.popularity) return 1;
        return 0;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div clasName="contact-buttons">
          <button onClick={() => this.addRandomContact()}>Random Contact</button>  
          <button onClick={() => this.sortByName()}>Sort by name</button>  
          <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
        </div>

        <div>
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            <tr>
              {this.state.contacts.map((contact, index) =>
                <Producers
                  key={index} {...contact}
                  pictureUrl={contact.pictureUrl}
                  name={contact.name}
                  popularity={contact.popularity}
                  deleteProducer={() => this.deleteProducer(index)}
                />)
              }
            </tr>
          </table>
          
        </div>
       

      </div>
    );
  }
}


export default App;
