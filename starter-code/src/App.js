import React, { Component } from 'react';
import contacts from './contacts.json'
import './App.css';

// let fiveContacts =contacts.splice(0,5);
// console.log(fiveContacts);
class App extends Component {
  state={
    contacts : contacts.splice(0,5)
  }

  randomContacts = () => {
    let newConRandom = Math.floor(Math.random()*contacts.length);
    let addContact = contacts.splice(newConRandom,1);
    let newContacts = this.state.contacts.concat(addContact);
    // console.log(newContacts);
    this.setState({
      contacts: newContacts
    })
  }
  
  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <h1>Iron contacts</h1>
        <button onClick={this.randomContacts}>Add new Contact</button>
        {this.state.contacts.map(contacts =>{
            return <div key={contacts.id}>
              <table width='400px'>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                </tr>
                <tr>
                  <td><img height='90px'  src={contacts.pictureUrl} alt=''/></td>
                  <td><h3>{contacts.name}</h3></td>
                  <td><h3>{contacts.popularity}</h3></td>
                </tr>
          
              </table>
            </div>
            
          })
        }
      </div>
    );
  }
}

export default App;
