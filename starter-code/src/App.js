import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstFive: contacts.slice(0,5)
    }
  }

  addCelebrity() {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    this.setState({
      firstFive: [...this.state.firstFive, contacts[randomIndex]]
    })

  }

  sortName() {
    let sortedArray = this.state.firstFive.slice().sort((a, b) => {
      return a.name.localeCompare(b.name);
    })
    this.setState({
      firstFive: sortedArray
    })
  }

  sortPopularity() {
    let sortedArray = this.state.firstFive.slice().sort((a, b) => {
      return b.popularity - a.popularity;
    })
    this.setState({
      firstFive: sortedArray
    })
  }

  delete(i) {
    let newArray = this.state.firstFive.slice();
    newArray.splice(i, 1);
    this.setState({
      firstFive: newArray
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addCelebrity.bind(this)}>Add Random Contact</button>
        <button onClick={this.sortName.bind(this)}>Sort By Name</button>
        <button onClick={this.sortPopularity.bind(this)}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {this.state.firstFive.map((c, i) => {
              return(
              <tr key={c.name}>
                <td><img src={c.pictureUrl} alt={c.name} style={{height: 50}}/></td>
                <td>{c.name}</td>
                <td>{c.popularity}</td>
                <td><button onClick={this.delete.bind(this, i)}>Delete</button></td>
              </tr>)
            })}
          </tbody>
        </table>
       
      </div>
    );
  }
}

export default App;
