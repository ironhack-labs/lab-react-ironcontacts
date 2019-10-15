import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  constructor(props){
    super(props)
    this.addRandomContact = this.addRandomContact.bind(this);
  }
  state = {
    contacts: contacts.slice(0,5)
  }
  addRandomContact(){
    let max = contacts.length - 1
    let min = this.state.contacts.length
    let copyContacts = [...this.state.contacts];
    copyContacts.push(contacts[(Math.floor(Math.random() * (max - min + 1)) + min)])
    this.setState({
      contacts: copyContacts
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">IronContacts</h1>
        </header>
        <button onClick={this.addRandomContact}>Add Random</button>
        <div className="Table-container">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
          {this.state.contacts.map((contact,index) => 
               (
                <tr key={index}>
                  <td><img className="Contact-Image" alt="" src={contact.pictureUrl}></img></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              )
            )
          }

          </tbody>
        </table>

        </div>
      </div>
    );
  }
}

export default App;
