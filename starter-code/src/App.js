import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  state = {
    contatos: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
    
  }
  
  addNewRandom(){
    let copyContatos = this.state.contatos.map(e => e);
    copyContatos.unshift(contacts[Math.floor(Math.random() * contacts.length - 1)])
    this.setState({
      contatos: copyContatos
    }) 
  }

  sortByName(){    
    let copyContatos = this.state.contatos.map(e => e);
    copyContatos.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else {
        return -1
      }
    })
    this.setState({
      contatos: copyContatos
    }) 
  }

  sortByPopularity(){
    let copyContatos = this.state.contatos.map(e => e);
    copyContatos.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1
      } else {
        return -1
      }
    })
    this.setState({
      contatos: copyContatos
    })
  }

  deleteContato(){
    let copyContatos = this.state.contatos.map(e => e);
    copyContatos.splice(this.idx, 1);
    this.setState({
      contatos: copyContatos
    }) 
  }

  render() { 
    return (
      
      <div>
      <h1>Iron contacts</h1>
      <button onClick={() => this.addNewRandom()}>Add random contact</button>
      <button onClick={() => this.sortByName()}>Sort by name</button>
      <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        {
          this.state.contatos.map(e => (<tr>
            <td><img src= {e.pictureUrl} alt='picture' width='100px'></img></td>
            <td>{e.name}</td>
            <td>{e.popularity.toFixed(2)}</td>
            <td><button onClick={()=> this.deleteContato()}>Delete</button></td>
          </tr>))
        }
      </table>
      </div>
    );
  }
}

export default App;
