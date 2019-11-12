import React, { Component } from 'react';
import './App.css';
import './contacts.json';
import ContactList from './ContactList';

class App extends React.Component {

  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <h2 id= "flex-box-three">
      <span>Picture</span>
      <span>Name</span>
      <span>Popularity</span>
      <span>Action</span>
      </h2>   
      <ContactList />
      </div>
    );
  }
}

export default App;
