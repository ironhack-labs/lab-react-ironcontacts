import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class CelebrityList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayList: contacts.slice(0,5)
    }
  }

  newCelebClick() {
    let newCeleb = contacts[Math.floor(Math.random()*contacts.length)];
    this.setState({
      displayList: [...this.state.displayList, newCeleb]
    })
  }

  sortByPopularity() {
    let copy = [...this.state.displayList]
    let sortedList = copy.sort((a,b) => b.popularity - a.popularity)
    console.log("sortedList",sortedList)
    this.setState({
      displayList: sortedList
    })
  }

  sortByName() {
    let copy = [...this.state.displayList]
    let sortedList = copy.sort((a,b) => {
      if (a.name > b.name) return 1
      else return -1
    })
    console.log("sortedList",sortedList)
    this.setState({
      displayList: sortedList
    })
  }

  removeCelebrity(name) {
    let copy = [...this.state.displayList]
    console.log('copy', copy)
    let filteredList = copy.filter(celeb=> celeb.name != name)
    console.log('filteredlist', filteredList)

    this.setState({
      displayList: filteredList
    })
  }
  
  render() {
    console.log(this.state.displayList)
    return (
      <div>
      <button onClick={()=>this.newCelebClick()}>New Random Celeb</button>
      <button onClick={()=>this.sortByPopularity()}>Sort By Popularity</button>
      <button onClick={()=>this.sortByName()}>Sort By Name</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>

        </tr>

        {this.state.displayList
        .map(celebrity => (
          <tr>
            <td><img src={celebrity.pictureUrl}></img></td>
            <td>{celebrity.name}</td>
            <td>{celebrity.popularity}</td>
            <td><button onClick={()=>this.removeCelebrity(celebrity.name)}>Delete</button></td>
          </tr>
        ))}
      </table>
      </div>
    )
    
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>My Best Friends</h1>
        <CelebrityList / >
      </div>
    );
  }
}

export default App;
