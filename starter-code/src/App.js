import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'


class App extends Component {
  state = {
    celebs: [contacts[0], contacts[1],contacts[2], contacts[3], contacts[4]]
  }  

  addCeleb = () => {
    const { celebs } = this.state
    let randomCeleb = contacts[Math.floor(Math.random() * contacts.length)]
    celebs.map((celeb) => {
      if(celeb.id === randomCeleb.id) {
       return  this.addCeleb()
      } else {
        return  this.setState({
          celebs: [...celebs, randomCeleb]
        })
      }
    })
  }

  sortCelebs = (param) => {
    const { celebs } = this.state
    celebs.sort((a, b) => {
     if(a[param] > b[param]){
       return 1
     } else if(a[param] < b[param]){
       return -1
     } else{
       return 0
     }
    })
    this.setState(celebs)
  }

  


  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button onClick={this.addCeleb}>Add a random celeb</button>
      <button onClick= {() => this.sortCelebs("name")}>Sort by Name</button>
      <button onClick= {() => this.sortCelebs("popularity")}>Sort by Popularity</button>
      <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        </thead>
        <tbody>
          {this.state.celebs.map((celeb) => {
          return (
            <tr key={celeb.id}>
              <td> <img src={celeb.pictureUrl} alt={celeb.name} /> </td>
              <td>{celeb.name}</td>
              <td>{celeb.popularity}</td>
              <td><button>X</button></td>
            </tr>
          )
        })} 
        </tbody>
      </table>
      
      </div>
    );
  }
}

export default App;
