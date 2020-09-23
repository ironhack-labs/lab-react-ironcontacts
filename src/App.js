import React from 'react';
import contacts from './contacts.json'
import './App.css';

class App extends React.Component {

  state = {
    contacts: contacts.slice(0, 5)
  }

  deleteThis = (contact) => {
    const contactsCopy = this.state.contacts.slice();
    const contactsSpliced = contactsCopy.splice(this.state.contacts.indexOf(contact), 1)
    console.log(contactsSpliced);
    this.setState({
      contacts: [...contactsCopy]
    })
  }



  addCelebrity = () => {
    const newCelebrity = contacts[Math.floor(Math.random() * (53 - 5 + 1) + 5)]
    const contactsCopy = this.state.contacts.slice();
    this.setState({
      contacts: [...contactsCopy, newCelebrity]
    })
  }

  sortPopularity = () => {
    const contactsCopy = this.state.contacts.slice();
    const sortedPopularity = contactsCopy.sort((a, b) => {
      return b.popularity - a.popularity
    })
    this.setState({
      contacts: sortedPopularity
    })
  }

  sortAlphabetically = () => {
    const contactsCopy = this.state.contacts.slice();
    const sortedAlphabetically = contactsCopy.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    this.setState({
      contacts: sortedAlphabetically
    })
  }



  render() {
    return (
      <div className="App" >
        <h1>Ironhack Contacts</h1>
        <button onClick={this.addCelebrity}>Add a random celebrity</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <button onClick={this.sortAlphabetically}>Sort alphabetically</button>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map(contact => {
                return (
                  <tr key={contact.id}>
                    <td><img src={contact.pictureUrl} className="portrait" alt="portrait" /></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                    <td><button onClick={() => this.deleteThis(contact)}>Delete</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
