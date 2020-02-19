import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import MyContact from './MyContact';

class App extends Component {

  state = {
    celebsToDisplay: contacts.slice(0,5)
  }

  randomCeleb = () => contacts[Math.floor(Math.random() * contacts.length)];



  addRandomCeleb = () => {
    return this.setState({
      celebsToDisplay: 
      [...this.state.celebsToDisplay, this.randomCeleb()]
    })
  }
  sortByName = () => {
    const sortedArray = this.state.celebsToDisplay.sort((celeb1, celeb2) => {
      return (celeb1.name > celeb2.name) ? 1 : -1
    }
    )
  
    console.log(sortedArray)
    this.setState({
      celebsToDisplay: [...sortedArray]
    })

  }

  sortByPopularity = () => {
    const sortedByPopArray = this.state.celebsToDisplay.sort((celeb1, celeb2) => {
      return (celeb1.popularity > celeb2.popularity) ? -1 : 1
    }
    )
    console.log(sortedByPopArray)
    this.setState({
      celebsToDisplay: [...sortedByPopArray]
    })
  }

  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>

      <button onClick={this.addRandomCeleb}>Random celeb</button>

      <button onClick={this.sortByName}>Sort by name</button>

      <button onClick={this.sortByPopularity}>Sort by popularity</button>

        <table>
          <thead>
              <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
              </tr>
          </thead>
          <tbody>
          {this.state.celebsToDisplay.map((celeb, index) => {
        return <MyContact picture={celeb.pictureUrl} name={celeb.name} popularity={celeb.popularity} key={index}></MyContact>
          }) }
  
        </tbody>
      </table>
      </div>
    );
  }
}

export default App;
