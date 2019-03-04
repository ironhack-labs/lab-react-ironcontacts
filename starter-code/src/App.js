import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'


class App extends Component {
  state = {
    contacts: contacts.splice(0,5)
  }
  showContacts = () => {
    //return contacts[0].name;
    let list = this.state.contacts.map((contact,i) => {
      return (
     
        <tr key={i}>
          <td><img src={contact.pictureUrl} alt="celebrity" height="100px" width="auto"/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
        </tr>
   
      )
    })
    return list; 
  }

  addToContactList = () => {
    console.log(this.state);
    let newList = [...this.state.contacts]
    newList.push(contacts[Math.floor(Math.random()* contacts.length+5)])
    console.log(newList)
    this.setState({
      contacts: newList
    })
  }

  render() {
    return (
      <div className="App">
          <header>
           <h1 className="App-title">IronContacts</h1>
         </header>
         <table>
           <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
           </tr>
          {this.showContacts()}
        </table>
        <button onClick={this.addToContactList}>Add Contact</button>
      </div>
    );
  }
}


export default App;