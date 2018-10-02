import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

let contactsArray = contacts.splice(0,5)

const Table = ({array, addRandom}) => {

  return (
    <div>
    <button onClick={addRandom}>Add Random Contact</button>
    <table>
      <caption>IronContacts</caption>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
    <tbody>
      {array.map((e) => 
        <Row key={e.name} oneRow={e} />
      )}
    </tbody>
    </table>
    </div>
  )
      
}

const Row = ({oneRow}) => {
  return (
    <tr>
      <td><img width="70px" alt={oneRow.name} src={oneRow.pictureUrl}/></td>
      <td>{oneRow.name}</td>
      <td>{oneRow.popularity}</td>
    </tr>
  )
}


class App extends Component {
  constructor(){
    super();
    this.state = {
      array: contactsArray}
    }
  
  addRandom = () => {
    this.state.array.push(contacts[Math.floor(Math.random()*contacts.length)]);
      this.setState({
      array: this.state.array
      })
    console.log(this.state.array);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Table array={this.state.array} addRandom={() => this.addRandom()}/>
      </div>
    );
  }
}

export default App;
