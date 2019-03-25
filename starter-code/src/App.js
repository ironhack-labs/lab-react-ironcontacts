import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
// import ProducerContacts from './components/ProducerContacts';

class App extends Component {
  contacts = () => {
    let contactList = contacts.splice(0,5).map((contact, i) => {
        return (
            <tr key={i}> 
            {/* need to put "key" in <tr> due to warning message in console saying each child in a list should have a unique "key" prop */}
                <td><img src={ contact.pictureUrl } alt={contact.name} height="100" width="auto" /></td>
                <td> { contact.name } </td>
                <td> { contact.popularity } </td>
            </tr>
        )
    })
    return contactList;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {/* <ProducerContacts /> */}
        {this.contacts()}
      </div>
    );
  }
}

export default App;
