import React, { Component } from 'react';
import './App.css';
import allContacts from './contacts.json'
import Contact from './components/Contact'

let firstFive;

class App extends Component {
  constructor() {

    super()

    this.state = {
    firstFive: allContacts.splice(0, 5)
  }
  
}

addRandom = () =>{

  console.log(this.state.firstFive)

  const contactsCopy = [...this.state.allContacts]
  this.state.firstFive.push( Math.floor(Math.random() * (allContacts.length)) + 1)
  this.setState({
      firstFive: contactsCopy
  })








  console.log(this.state.firstFive)
     
  }
  
  render() {
    console.log(allContacts.length)
      return (
        <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandom()}>Add Random Contact</button>
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
