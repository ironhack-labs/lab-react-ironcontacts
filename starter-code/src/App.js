import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"
import Contact from './components/Contacts';

class App extends Component {
  state = {
    listOfContacts: contacts.slice(0, 5)
  }
  render() {
    return (
      <div className="App">
        <table>
            <tr>
              <th>picture </th>
              <th>name </th>
              <th>popularity</th>
            </tr>

          {
            this.state.listOfContacts.map(contact=> {
              return <Contact picture={contact.pictureUrl} name={contact.name} popularity={contact.popularity}/>
            })
          } 
        </table>
      </div>
    );
  }
}

export default App;
