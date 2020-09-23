import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css'

export default class App extends Component {


  state = {
    celebrities: contacts.slice(0,5),
    nameDesc: true,
    popularityDesc: true
  }

  celebrityElements = () => {
  return this.state.celebrities.map((c, index) => {
    return <tr>
      <td><img src={c.pictureUrl} alt="" /></td>
      <td>{c.name}</td>
      <td>{c.popularity}</td>
      <td><button className={index} onClick={this.deleteHandler}>Delete</button></td>
    </tr>
  })}
  

  addHandler = () => {
    let randomCelebrity = contacts[Math.floor(Math.random()*contacts.length)];
    let stateUpdate = this.state.celebrities.slice();
    stateUpdate.push(randomCelebrity);
    this.setState({
      celebrities: stateUpdate
    })
  }

  sortNameHandler = () => {
    let stateCopy = this.state.celebrities.slice();
    stateCopy.sort((a, b) => {
      return this.state.nameDesc ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
    })
    this.setState((state) => ({
      celebrities: stateCopy,
      nameDesc: !state.nameDesc
    }))
  }


  sortPopularityHandler = () => {
    let stateCopy = this.state.celebrities.slice();
    stateCopy.sort((a, b) => {
      return this.state.popularityDesc ? b.popularity - a.popularity : a.popularity - b.popularity
    })
    console.log(stateCopy)
    this.setState((state) => ({
      celebrities: stateCopy,
      popularityDesc: !state.popularityDesc
    }))
  }

  deleteHandler = (event) => {
    let stateCopy = this.state.celebrities.slice();
    stateCopy.splice(event.target.className,1);
    this.setState({
      celebrities: stateCopy
    })
  }

  render() {
    return (
      <div className='appContainer'>
        <h1>Iron Contacts</h1>
        <button onClick={this.addHandler}>Add Random Celebrity</button>
        <button onClick={this.sortNameHandler}>Sort by Name</button>
        <button onClick={this.sortPopularityHandler}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.celebrityElements()}
          </tbody>
        </table>
      </div>
    )
  }
}
