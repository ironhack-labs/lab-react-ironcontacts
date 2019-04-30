import React from 'react';
import './App.css';
import Contact from './Contact';
import contacts from './contacts.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contactsInfo: contacts.slice(0, 5)
    }
  }

  addNewContact() {
    let allTheContacts = [...this.state.contactsInfo];
    let contactsLength = contacts.length;
    let randomContact = Math.floor(Math.random()*contactsLength);
    allTheContacts.push(contacts[randomContact]);

    this.setState({
      ...this.state,
      contactsInfo: allTheContacts
    })
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <div className="buttons">
          <button onClick={() => this.addNewContact()} className="btn">Add Random Contact</button>
          
        </div>
        <tr className="titles">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {this.state.contactsInfo.map((contact) => {
          return <Contact
            pictureUrl={contact.pictureUrl}
            name={contact.name}
            popularity={contact.popularity}>
          </Contact>
        })}
      </div>
    );
  }
}

export default App;
