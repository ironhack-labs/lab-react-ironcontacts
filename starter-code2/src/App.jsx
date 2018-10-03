import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'


class App extends Component {
  state={
    list:contacts.splice(0,5)
  }

  sortByName = () => {
    const {list} = this.state
    list.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    this.setState({list})
  }

  addRandom = () => {
    
    let index = Math.floor(Math.random()*contacts.length)
    const {list} = this.state
    list.push(contacts[index])
    this.setState({list})

  }

  sortByPopularity = () => {
    const {list} = this.state
    list.sort(function(a, b) {
      var popA = a.popularity
      var popB = b.popularity
      if (popA < popB) {
        return -1;
      }
      if (popA > popB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    this.setState({list})
  }

  remove = (e) => {
    console.log(e.target.key)
    const {list} = this.state
    list.splice(e.target.key, 1)
    this.setState({list})

  }

  render() {

    const {list} = this.state

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <div className="data">
        <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
          <br/>
        </thead>
        <tbody>
        {list.map((c,i)=><tr key={c}>
        <td><img src={c.pictureUrl} style={{width: "50px"}}alt=""/></td>
        <td><h5>{c.name}</h5></td>
        <td><h5>{c.popularity}</h5></td>
        <td> <button onClick={this.remove} key={i}>Delete</button></td>

        </tr>)}
        {console.log(contacts)}
        </tbody>
      </table>
      </div>
      </div>
    );
  }
}

export default App;
