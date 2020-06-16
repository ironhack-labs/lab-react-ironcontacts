import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import contacts from './contacts.json';

class App extends Component {
  state = {
    contacts: contacts.slice(0,5)
}
addContact = () =>{
    this.setState({
        contacts: this.state.contacts.concat([contacts[Math.floor(Math.random() * contacts.length)]])
    });
}

sortByPopularity = () => {
    this.setState({ contacts: this.state.contacts.sort((a, b) => {return b.popularity - a.popularity}) });
}

sortByName = () => {
    this.setState({ contacts: this.state.contacts.sort((a, b) => {return (a.name < b.name) ? -1: 0}) });
}

deleteContact = (name) => {
    this.setState({ contacts: this.state.contacts.filter((elem) => {return name !== elem.name;})});
}

render(){
    return <main>

    <h1>IronContact</h1>

    <section className="fixed-buttons">
      <button onClick={this.addContact}>Add Random Contact</button>
      <button onClick={this.sortByName}>Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
    </section>

    <table>

      <thead className="table-header">
          <tr className="table-header">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
          </tr>
      </thead>
      <Contact contacts={this.state.contacts} deleteContact={this.deleteContact}/>
  </table>
  </main>
}
}

export default App;
