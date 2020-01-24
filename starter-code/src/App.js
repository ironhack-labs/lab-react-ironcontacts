import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contacts from  './components/contacts.js';

class App extends Component {
  
  state = {
    filteredContacts: [...contacts.filter((elem,ind) => ind < 5)]
  }
  
  addMovieHandler = () => {
    let randomMovie = contacts[Math.floor(Math.random()*contacts.length)];
    console.log(randomMovie);
    this.setState( prevState => ({
      filteredContacts: [...prevState.filteredContacts, randomMovie]
    }))
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
        <button onClick = {this.addMovieHandler}>Add random contact</button>
        <table style={{width: "100%"}}> 
        <thead>
        <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
            </tr>
            </thead>
            <tbody>
        {this.state.filteredContacts.map(oneMovie =>{
          return <Contacts key={oneMovie.id} {...oneMovie}/>
        })}
        </tbody>
        </table>
          
        </div>
      </div>
    );
  }
}

export default App;
