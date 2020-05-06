import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  };


  render() {
    const contacts = this.state.contacts;
    
    return (
      <div className="App">
          <h1 className="App-title">Iron Contacts</h1>
          <div>
          {contacts.map((contact, index) => {
          return (
            <table>
              <tr>
                <th>
                  <img
                    src={contact.pictureUrl}
                    className="Image-Logo"
                    alt="logo"
                  />
                </th>

                <th>
                  <h1 className="Name">{contact.name}</h1>
                </th>

                <th>
                  <h2 className="popularity">{contact.popularity}</h2>
                </th>
              </tr>
            </table>
          );
        })}
          </div>
      </div>
    );
  }
}

export default App;
