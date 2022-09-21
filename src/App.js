import { Component } from 'react';
import contacts from './contacts.json'

const originalContacts = [...contacts] // este array sirve para luego sacar los random contacts


class App extends Component {
  state = {
    contacts: originalContacts.splice(0, 5)
  }

  render() {
    return (
      <div className="App">
      {this.state.contacts.map((contact) => {
        return (
            <div>
              <img src={contact.pictureUrl} alt="img"/>
              <p>{contact.name}</p>
              <p>{Math.round(contact.popularity)}</p>
            </div>
        )
      })}
      </div>
    );
  }
}

export default App;

