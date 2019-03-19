import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Row from './components/stateless/Row'

import importedContacts from './contacts.json'

class App extends Component {

  constructor(){
    super();
    this.state = {
      contacts: importedContacts.slice(0,5)
    }
  }
  

  addRandom = () => {
    // const copia = this.state.contacts.slice()
    const copia = [...this.state.contacts]

    copia.push(importedContacts[Math.floor(Math.random() * importedContacts.length - 5)+5])

    
    this.setState({
      contacts: copia
    })

  }

  shortPopularity = () => {
    // const copia = this.state.contacts.slice()
    let copia = [...this.state.contacts]

    copia = copia.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      // a must be equal to b
      return 0;

    })

    
    this.setState({
      contacts: copia
    })

  }

  deleteActor = () => {
    // const copia = this.state.contacts.slice()
    const copia = [...this.state.contacts]

    copia.splice(0,1)

    
    this.setState({
      contacts: copia
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <h1 className="App-title">IronContacts</h1>

        <button onClick={this.addRandom} >Add Random Contact</button>
        <button onClick={this.shortPopularity} >Short by Popularity</button>
        <button onClick={this.deleteActor} >Delete Actor</button>

        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th> 
            <th>Popularity</th>
          </tr>          
          
          {this.state.contacts.map ((contact) => <Row {...contact}/>)}        

        </table>         

      </div>
    );
  }
}

export default App;
