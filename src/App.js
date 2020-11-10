import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';


class App extends Component {
  state = {
    contactsFive: contacts.slice(0, 5)
  }

  actorRandom = () => {
    const copyContacts = [...this.state.contactsFive]
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    if (!copyContacts.includes(random)) {
      copyContacts.push(random);
    }
    this.setState({
      contactsFive: copyContacts
    })
  }

  sortName = () => {
    const copyFive = [...this.state.contactsFive]
    copyFive.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
  
    this.setState({
      contactsFive: copyFive
    })
  }

  sortPopularity = () => {
    const copyFive = [...this.state.contactsFive]
    copyFive.sort(function(a, b){
      if(a.popularity > b.popularity) { return -1; }
      if(a.popularity < b.popularity) { return 1; }
      return 0;
    })
  
    this.setState({
      contactsFive: copyFive
    })
  }
  
  deleteButton (id) {
    
      let filtered = this.state.contactsFive.filter(contact=> contact.id !== id)
      this.setState({contactsFive:[...filtered]})
    
  }



render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.actorRandom()}>
          Add Random Contact</button>
        <button onClick={() => this.sortName()}>
          Sort by name</button>
        <button onClick={() => this.sortPopularity()}>
          Sort by popularity</button>
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
            {this.state.contactsFive.map(oneActor => 
             <tr key={oneActor.id}>
                <td><img src={oneActor.pictureUrl} /></td>
                <td>{oneActor.name}</td>
                <td>{oneActor.popularity}</td>
                <td><button onClick={() => this.deleteButton(oneActor.id)}>Delete</button></td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
export default App;