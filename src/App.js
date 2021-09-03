import logo from './logo.svg';
import './App.css';
import React from 'react';
import contacts from './contacts.json'

export default class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5)
  }
  
  render() {
  const contact = this.props;
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
        <table>
          <thead className='title'>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(contact => (
              <tr>
                <th>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </th>
                <th>{contact.name}</th>
                <th>{contact.popularity}</th>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
  }
}

