import React from 'react';
import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json';
import { render } from '@testing-library/react';

class App extends React.Component{
  state = {
    contacts: contacts.slice(0,5),
  };


displayContacts = () => {
  const contactsJSX = this.state.contacts.map((contact) => {
    return (
      <div>
      <table>
      <thead>
      <th>Name: {contact.name}</th>
      <th>Picture URL: {contact.pictureUrl}</th>
      <th>Popularity: {contact.popularity}</th>
      <th>id: {contact.id}</th>
      </thead>
      </table>
    </div>
    );
  });
  return contactsJSX;
};

addRandomContact = () =>{
  const index = Math.floor(Math.random()*contacts.length);
  const randomContact = contacts[index]; 
  this.state.contacts.push(randomContact);
  this.setState({contacts: this.state.contacts });

};

render() {
  return(
    <div className="App">
        {this.displayContacts()}
        <button onClick={this.addRandomContact}>Add Random Content</button>
    </div>
  )
};
}

export default App;
