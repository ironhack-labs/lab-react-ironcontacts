import React from 'react';
import './App.css';
import contacts from "./contacts.json";

class App extends React.Component {

  // Set State
  state = {
    actors: contacts.slice(0, 5)
  }

  // Add New Random Contacts
  addContact = () => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState((state) => ({
      actors: [newContact, ...state.actors]
    }))
  };

  // Sort Contacts By Name
  sortByName = () => {
    const nameSorted = this.state.actors.sort(function (a, b) {
      return a.name.localeCompare(b.name)
    })
    this.setState((state) => ({
      actors: nameSorted
    }))  
  };

  // Sort Contacts By Popularity
  sortByPop = () => {
    const popSorted = this.state.actors.sort(function (a, b) {
      return b.popularity - a.popularity
    })
    this.setState((state) => ({
      actors: popSorted
    }))  
  };

  // Remove Contacts
  deleteContact = (index) => {
    let deletedCopy = this.state.actors.slice()
    deletedCopy.splice(index, 1);
    this.setState({
      actors: deletedCopy
    })
  }
  
  render() {

    const displayActors = this.state.actors.map((actor, index) => (
      <table className="table" key={actor.id}>
        <tbody>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th> 
        </tr>
        <tr>
          <td><img style={{width: '50px'}} src={actor.pictureUrl} alt="pic missing"/></td>
          <td>{actor.name}</td>
          <td>{actor.popularity.toFixed(2)}</td>
          <td><button onClick={() => { this.deleteContact(actor.id) }}>Delete</button></td>
        </tr>
        </tbody>
      </table>
    ))

    return (
      <div className="App">
        <header className="App-header">
          <h1>Iron Contacts</h1>
          <button onClick={this.addContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort By Name</button>
          <button onClick={this.sortByPop}>Sort By Popularity</button>
          {displayActors}
        </header>
      </div>
    );
  }
}

export default App;
