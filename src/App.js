import React from 'react';
import './App.css';
import ContactList from './components/contacts/ContactList'

class App extends React.Component {
  render() {
    return (
      <div className="App" >
          <h1>IronContacts</h1>
          <ContactList />
      </div>
    );
  }
}

export default App;