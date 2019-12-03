import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Row from './Row/Row';

class App extends Component {
  constructor(name, pictureUrl, popularity){
    super();
    this.contacts = [contacts]
    this.indexContacts = contacts.splice(0,5)

  }
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table>
        <thead>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
        </tr>
        </thead>
        <tbody>
        {this.indexContacts.map((contact,idx) => 
        <Row key={idx} name={contact.name} pictureUrl={contact.pictureUrl} popularity={contact.popularity}> </Row>)}
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;
