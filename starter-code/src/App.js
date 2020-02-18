import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'


class App extends Component {
  state = {
    celebs:[contacts [0], contacts [1], contacts[2], contacts[3], contacts[4]]
  }

  addCeleb = () =>{
    const {celebs} = this.state
    let randomCeleb = contacts [Math.floor(Math.random()* contacts.length)]
    this.setState({
      celebs: [...this.state.celebs, randomCeleb]
    })

  }
  sortName =() =>{
    const {celebs} = this.state
    celebs.sort((a,b)=>{
      return a.name.localeCompare(b.name)
    })
    this.setState(celebs)  
  }

  sortPopularity =() =>{
    const {celebs} = this.state
    celebs.sort((a,b)=>{
      return b.popularity - a.popularity
    })
    this.setState(celebs)  
  }

  deleteCeleb =(index) =>{
    const celebsCopy = [...this.state.celebs]
    celebsCopy.splice(index, 1)
    this.setState({
      celebs: celebsCopy
    })

  }


  
  render() {
    return (
      <div className="app">
        <h1>IronContacs</h1>
        <div className="butt">
        <button onClick={this.addCeleb}>Add a random celeb</button>
        <button onClick={this.sortName}>Sort by Name</button> 
        <button onClick={this.sortPopularity}>Sort by Popularity</button> 
        </div>
  
       <table>
        <thead>
          <tr>
            <th><strong>Picture</strong></th>
            <th><strong>Name</strong></th>
            <th><strong>Popularity</strong></th>
          </tr>
        </thead>
        <tbody>
          {this.state.celebs.map((celeb, i) =>{
           return(
            <tr key={i} >
            <td><img src={celeb.pictureUrl} alt={celeb.name}/></td>
            <td> {celeb.name} </td>
            <td> {celeb.popularity} </td>
            <td><button onClick={()=>this.deleteCeleb (i)}>Delete</button></td>
          </tr>
           )
          })}
        </tbody>
      </table>
      </div>
    )
  }
}

export default App;
