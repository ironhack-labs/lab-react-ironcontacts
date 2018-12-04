import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contacts from './components/Contacts/Contacts'

let list = [];
for (var i = 0; i < 5; i++) {
  list.push(contacts[i])
}

class App extends Component {

  constructor() {
    super();
    this.state = { contacts: list }
  }

  addRandomContact = () => {
    let arr = [...this.state.contacts]
    let idxRd = parseInt(Math.random() * contacts.length);
    arr.push(contacts[idxRd])
    this.setState({
      ...this.state, contacts: arr
    })
  }
  sortByName = () => {
    let arr = [...this.state.contacts];
    arr.sort((a, b) => b.name < a.name ? 1 : -1);
    this.setState({
      ...this.state, contacts: arr
    })
  }
  sortByPopularity = () => {
    let arr = [...this.state.contacts];
    arr.sort(( a, b ) => b.popularity - a.popularity );
    this.setState({
      ...this.state, contacts: arr
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          {this.state.contacts.map(celebrity => {
            console.log(celebrity)
            return (
              <Contacts {...celebrity} />
            )
          })}

        </table>
      </div>
    );
  }
}

export default App;
