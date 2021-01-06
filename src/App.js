import React from 'react';
import './App.css';
import Contacts from './Contacts.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Contacts />
      </div>
    );
  }
}
export default App;
