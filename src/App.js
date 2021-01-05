import React from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends React.Component {

  state = {
    contacts: contacts.slice(0, 5),
  };

  addRandom = () => {
    const copy = [...this.state.contacts];
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    copy.push(randomContact);
    this.setState({
      contacts: copy,
    });
  }

  sortName = () => {
    const copy = [...this.state.contacts];
    copy.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) - 1)

    this.setState({
      contacts: copy
    })
  }

  sortPopularity = () => {
    const copy = [...this.state.contacts];
    copy.sort((a, b) => (a.popularity < b.popularity) ? 1 : (a.popularity === b.popularity) - 1)

    this.setState({
      contacts: copy
    })
  }

  removeContact = (contact) => {
    this.setState({
      contacts: this.state.contacts.filter((p) => p.id !== contact.id)
    })
  }

  render() {
    return (
      <div className="App" >
        <h1> IRONCONTACTS </h1>
        <button onClick={this.addRandom}>Add random</button>
        <button onClick={this.sortName}>Sort Names</button>
        <button onClick={this.sortPopularity}>Sort Popularity</button>
        {this.state.contacts.map((contact => {
          return (
            <div key={contact.id}>
              <td>
                <img src={contact.pictureUrl} />
              </td>
              <td> Name: {contact.name}</td>
              <td> Popularity: {contact.popularity.toFixed(2)}</td>
              <button onClick={() => this.removeContact(contact)}>delete</button>
            </div>

          )
        }))}
      </div >
    );
  }
}

export default App;