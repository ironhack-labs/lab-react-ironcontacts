import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import ContactTable from './components/ContactTable'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { contact: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]] }
  }

  click = () => {
    const position = Math.floor(Math.random() * contacts.length);
    const contact = contacts[position];
    // this.state.contact.push(contact);
    this.setState({
      contact: [...this.state.contact, contact]
    });
  }

delete = (i) => {
  this.setState({
    contact: this.state.contact.filter((actor, index) => index !== i)
  })
}

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.click}>
          Add Random Contact
        </button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.contact.map((elem, i) => <ContactTable pictureUrl={elem.pictureUrl} name={elem.name} popularity={elem.popularity} onDelete={() => this.delete(i)} />)}
        </table>
      </div>
    );
  }
}

export default App;
