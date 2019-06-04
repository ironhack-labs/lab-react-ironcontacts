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
    const firstContactsCopy = [...this.state.firstContacts]
    firstContactsCopy.push(contacts[randomNumber])
    this.setState({
      firstContacts:firstContactsCopy
    })
    
  }
  sortName = () => {
    let sortedArr = this.state.firstContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    this.setState({
      firstContacts:sortedArr
    })
                   }
  sortPopu = () => {
    let sortedArr = this.state.firstContacts.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    });
    this.setState({
      firstContacts:sortedArr
    })
  }
                  
   DeleteOneArtist = idx => {
        const firstContactsCopy = [...this.state.firstContacts]
        firstContactsCopy.splice(idx, 1)
        this.setState({
            firstContacts: firstContactsCopy
        })
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Aplicacion hecha con React en Front :D</h1>
        </header>
        <main>
          <div className="buttons">
          <button className="addContact" onClick={() => this.addRandom()}>
            Add Random Contact
          </button>
          <button className="sortName" onClick={() => this.sortName()}>
            Sort By Name
          </button>
          <button className="sortPopu" onClick={() => this.sortPopu()}>
            Sort By Popularity
          </button>
          </div>

          <table className="container">
            <thead>
              <tr className="title-table">
                <td>Picture</td>
                <td>Name</td>
                <td>Popularity</td>
                <td>Delete Button</td>
              </tr>
            </thead>
            <tbody className="allArtist-table">
              {this.state.firstContacts.map((elm, idx) => (
                <Table
                  key={idx}
                  name={elm.name}
                  picture={elm.pictureUrl}
                  popularity={elm.popularity}
                  DeleteOneArtist={() => this.DeleteOneArtist(idx)}
                />
              ))}
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}

export default App;
