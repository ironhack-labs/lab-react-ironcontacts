import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/Contact';

class App extends Component {
  render() {
    const first5Contacts = contacts.slice(0, 5);

    console.log(first5Contacts);

    return (
      <div>
        <h1 className='App-h1'>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th className='App-th'>Picture</th>
              <th className='App-th'>Name</th>
              <th className='App-th'>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {first5Contacts.map(contact => (
              <Contact key={contact.id} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity}/>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
