import React from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  handleRandom = () => {
      const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
      const contactsCopy = [...this.state.contacts];
      contactsCopy.push(randomContact);
      this.setState({contacts: contactsCopy})
    }

render() {
  return (
    <div>
      <h2>Iron Contacts</h2>
      <button onClick={this.handleRandom} >Add Random Contact</button>
      {this.state.contacts.map((contact, index) => {
        return (
          <div key={`contactPage ${contact.id}`}>
            <p>Name: {contact.name}</p>
            <img src={contact.pictureUrl}/>
            <p>Popularity: {contact.popularity}</p>
          </div>
        )
      })}
    </div>
  )
}
}

export default App