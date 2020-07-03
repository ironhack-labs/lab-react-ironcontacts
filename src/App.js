import React,{Component} from 'react';
import contacts from './contacts.json';

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class App extends Component{
  state = {

    celeb: contacts,

    newceleb: contacts.slice(0,5)
  }
  addContact = () => {
    let storedCeleb = this.state.celeb[
      Math.floor(Math.random() * this.state.celeb.length)
    ];
    this.setState({
      newCeleb: this.state.newCeleb.concat([storedCeleb]),
    });
  };

  sortName = () => {
    this.setState({
      newCeleb: this.state.newCeleb.sort((a, b) => {
        return a.name > b.name ? -1 : 1;
      })
     }
    )}
    sortByPopularity = () => {
      this.setState({
        chosenCeleb: this.state.chosenCeleb.sort((a, b) => {
          return a.popularity - b.popularity
        })
      })
    }
    deleteCeleb = (name) => {
      let deleteCeleb = [...this.state.newCeleb];
      let index = deleteCeleb.findIndex((celebrity) => {
        return celebrity.name === name;
      });
    }
  }
      
     
  

export default App;
