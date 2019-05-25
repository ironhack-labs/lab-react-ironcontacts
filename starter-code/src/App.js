import React from 'react';
import contacts from './contacts.json';
import ContactList from './components/ContactList';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
          <ContactList contacts={contacts}/>
        </div>
    );
  }
}

export default App;
