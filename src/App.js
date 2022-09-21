import { Component } from 'react';
import contacts from './contacts.json'

console.log(contacts)

const originalContacts = [...contacts] // este array sirve para luego sacar los random contacts

console.log(originalContacts)


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
              <p>{contact.popularity.toFixed(2)}</p>
            </div>
        )
      })}
      </div>
    );
  }
}

export default App;

