import React from 'react';
import contacts from './contacts.json';
import Main from './components/Main'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
      <h1>IronContacts</h1>
      <Main {...contacts} />
      </div>
    );
  }
}

export default App;