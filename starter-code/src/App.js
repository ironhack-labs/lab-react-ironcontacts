import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"

class App extends Component {
  state = {
    contactList: contacts.slice(0,5)
  };

  render() {
    return (
      <div className="App">
        <div className="CListContainer">

        {/* start of the loop */}
        {this.state.contactList.map((contact) => {
          return(
          <div class="row" key={contact.id}>
            <div class="img">{contact.pictureUrl}</div>
            <div class="name">{contact.name}</div>
            <div class="popularity">{contact.popularity}</div>
            <div class="action">#</div>
          </div>
          )
        {/* end of the loop */}
        })}
        </div>
      </div>
    );
  }
}

export default App;
