import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      contacts: contacts.splice(0,5)
    }
  }
  
  addRandomContact = (contacts) => {
    const randomContacts = contacts.splice(Math.floor(Math.random())*(contacts)+5,1)[0];
    let newStateContacts = [...this.state.contacts];
    newStateContacts.push(randomContacts)
    this.setState({
      contacts: newStateContacts
    })
  };
  
  sortByName = (contacts) => {
    let sortedContacts = this.state.contacts;
    sortedContacts.sort((a,b) => {
      if (a.name > b.name) {
        return 1
      } else if (a.name < b.name) {
        return -1
      } else {
        return 0
      }
    })

    this.setState({
      contacts: sortedContacts
    })
  };

  sortByPopularity = (contacts) => {
    let sortedContacts = this.state.contacts;
    sortedContacts.sort((a,b) => {
      if (a.popularity > b.popularity) {
        return 1
      } else if (a.popularity < b.popularity) {
        return -1
      } else {
        return 0
      }
    })

    this.setState({
      contacts: sortedContacts
    })
  };

  deleteContact = (i) => {
    this.state.contacts.splice(i, 1);;
    this.setState({
      contacts: this.state.contacts
    })
  };
  
  

  // initialContacts()

  // const card = ({picture, name, popularity}) => {
  //   return (
  //       <td></td>
  //       <td>{e.name}</td>
  //       <td>{e.popularity}</td>
  //   )
  // }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>IronContacts</h1>
        </header>
        <button onClick={ () => this.addRandomContact(contacts)}>Add Random Contact</button>
        <button onClick={ () => this.sortByName(contacts)}>Sort by Name</button>
        <button onClick={ () => this.sortByPopularity(contacts)}>Sort by Popularity</button>
        <table style={{width: "40%",margin: "0 auto"}}>
         <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map((e, i) => {
            return (
              <tr key={i}>
                <td><img src={e.pictureUrl} alt="" style={{width: 100}}/></td>
                <td>{e.name}</td>
                <td>{e.popularity}</td>
                <td><button onClick={ () => this.deleteContact({i})}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;
