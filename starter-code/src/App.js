import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
    this.addRandom = this.addRandom.bind(this);
  }

 addRandom() {
    const random =
      contacts[Math.floor(Math.random() * contacts.length) + 4];
    const contactsNew = this.state.contacts.push(random);

    this.setState({
      contactsNew
    });
  }




  render() {
    const contacts = this.state.contacts;
    return (
      <div className="App">
          <h1 className="App-title">Iron Contacts</h1>
          <button onClick={this.addRandom}>Add Random Contact</button>
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
                  <h2 className="popularity">{Math.round(contact.popularity * 100) /100}</h2>
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
