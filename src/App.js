import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json';
import React, { Component } from "react";

class Contacts extends Component {
  state = {
    allcontacts: contacts.slice(0, 5),
  };


render() {
  return (
    <div>
      <table id="contacts">
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          </thead>
          {this.state.allContacts.map((contact) => (
          <tbody key={contact.id}>
            <tr>
              <td>
                <img src={contact.pictureUrl} alt=""></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
    

/*
  function App() {
    return (
      <div className="App">
  
        {contacts
          .map((contact) => {
            return (
              <table>
                <th>
                  <img className="actorImg" src={contact.pictureUrl} img />{" "}
                </th>
                <th className="contact">{contact.name}</th>
                <th>{contact.popularity}</th>
              </table>
            );
          })
          .slice(0, 5)}
      </div>
  
    );
  }
  
  export default App; */

  
}

export default App;

