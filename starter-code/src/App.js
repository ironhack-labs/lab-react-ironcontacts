import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import ContactsBox from './components/ContactsBox';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Title>IronContacts Bitch!</Title>
      <ContactsBox/>
      </div>

    );
  }
}

export default App;
