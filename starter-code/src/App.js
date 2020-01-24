import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contacts from './components/contacts.js';

class App extends Component {

  state = {
    filteredContacts: contacts.slice(0,5)
  }

  addMovieHandler = () => {
    let randomMovie = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState(prevState => ({
      filteredContacts: [...prevState.filteredContacts, randomMovie]
    }))
  }

  sortNameHandler = () => {
    let sortNameArr = this.state.filteredContacts.slice().sort((a, b) => {
      let aName = a.name, bName = b.name;
      return aName.localeCompare(bName);
    });
    //console.log(sortNameArr);
    this.setState(
      { filteredContacts: sortNameArr }
    )
  }

  sortPopulHandler = () => {
    let sortPopulArr = this.state.filteredContacts.slice().sort((a, b) => {
      let aName = a.popularity, bName = b.popularity;
      return (bName - aName);
    });
    //console.log(sortNameArr);
    this.setState(
      { filteredContacts: sortPopulArr }
    )
  }

  deleteMovieHandler = movieId => {
    this.setState({
      filteredContacts: this.state.filteredContacts.filter(movie => movie.id !== movieId)
    })
  }

  render() {
    console.log(this.state.filteredContacts);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <button onClick={this.addMovieHandler}>Add random contact</button>
          <button onClick={this.sortNameHandler}>Sort by name</button>
          <button onClick={this.sortPopulHandler}>Sort by popularity</button>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredContacts.map(oneMovie => {
                return <Contacts key={oneMovie.id} {...oneMovie} clickToDelete={() => this.deleteMovieHandler(oneMovie.id)} />
              })}
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}

export default App;
