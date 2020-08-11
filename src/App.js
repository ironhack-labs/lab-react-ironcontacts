import React, { Component } from 'react';
import contacts from './contacts.json';
import ContactRow from './components/contact/Contact';
import AddContact from './components/addcontact/addContact';

class App extends Component {
  state = {
    //Avec les "..." nous sortons un nouvel array avec les 5 premiers
    contactsList5: [...contacts].slice(0, 5),
  };

  addRandom = () => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];

    this.setState((state) => ({
      contactsList5: state.contactsList5.concat(newContact),
    }));
  };

  render() {
    return (
      <div>
        <h1>IronContact</h1>
        <button onClick={() => this.addRandom()}>Add a random actor</button>
        <br />
        <br />
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.state.contactsList5.map((contact) => (
            <ContactRow contact={contact} />
          ))}
        </table>
      </div>
    );
  }
}
export default App;
