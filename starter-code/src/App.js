import React, { Component } from 'react';
import './App.css';
import allContacts from './contacts.json'
import Contact from './components/Contact'


class App extends Component {
  constructor() {

    super()

    this.state = {
    firstFive: allContacts.splice(0, 5)
  }
  
}
    render() {
      return (
        <div className="App">
        <h1>IronContacts</h1>
        <table>
          <thead>
          <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                
          </tr>
          </thead>
          
          { this.state.firstFive.map((contact, idx) => <Contact {...contact} key={idx} />) }
        
        </table>
        </div>
      )
    }
  }
export default App;
