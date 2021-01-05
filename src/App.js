import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts : contacts.slice(0, 5),
  }

  addContacts = () => {
    const copy = [...this.state.contacts];
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    copy.push(randomContact);
    this.setState({
      contacts: copy,
    });
  };

  sortName = () => {
    const copy = [...this.state.contacts];
    copy.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) - 1)
    this.setState({
      contacts: copy,
    });
  }

  sortPopularity = () => {
    const copy = [...this.state.contacts];
    copy.sort((a, b) => (a.popularity < b.popularity) ? 1 : (a.popularity === b.popularity) - 1)
    this.setState({
      contacts: copy,
    });
  }

  removeContacts = (id) => {
    this.setState({
      contacts: this.state.contacts.filter(
        (p) => p.id !== id
      )
    });
  };

  render() {
    return (
    <div className="App">
      <h1>Contact Management</h1>
      <button onClick={this.addContacts}>Add Random</button>
      <button onClick={this.sortName}>Sort Name</button>
      <button onClick={this.sortPopularity}>Sort Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
        {this.state.contacts.map((contact => {
          return (
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt="" height="100px"/>
            </td>
            <td>Name: {contact.name}</td>
            <td>Popularity: {contact.popularity.toFixed(2)}</td>
            <td>
              <button onClick={() => {
                this.removeContacts(contact.id);
              }}>Delete</button>
            </td>
          </tr>
          )
        }))}  
        </tbody>
      </table>
    </div>
    )
  }
}
  


export default App;
