import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"
import Table from "./components/Table"

class App extends Component {
  constructor(){
    super()
    this.state = {

      firstContacts: [contacts[0],contacts[1],contacts[2],contacts[3],contacts[4]]
    }
  }
 
  addRandom = () =>{
    let randomNumber = Math.floor(Math.random() * contacts.length);
    console.log(randomNumber)
    const firstContactsCopy = [...this.state.firstContacts]
    firstContactsCopy.push(contacts[randomNumber])
    this.setState({
      firstContacts:firstContactsCopy
    })
    console.table(this.state.firstContacts);
    
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={() => this.addRandom()}>Add Random Contact</button>

        <table className="container">
          <thead>
            <tr className="title-table">
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>
          <tbody>
            {this.state.firstContacts.map((elm, idx) => (
              <Table
                key={idx}
                name={elm.name}
                picture={elm.pictureUrl}
                popularity={elm.popularity}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
