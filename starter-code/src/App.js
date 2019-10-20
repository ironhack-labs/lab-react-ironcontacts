import React, { Component } from 'react';
import './App.css';
import Actors from './contacts.json'
import Actor from './components/Actor'


class App extends Component {

  state = {
    Actors: Actors,
    filteredActors: Actors.slice(0,5)
  }

  handleSearch = ((e) => {

    var searchQuery = e.target.value
    var searchResult = this.state.Actors.filter((e) => {

      return e.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    })
    this.setState({
      filteredActors: searchResult
    })
  })

  addRandom = (Actor) => {

    var rando = Math.floor(Math.random() * this.state.Actors.length)
    var filtActors = this.state.filteredActors
    var randomAct = this.state.Actors[rando]
    filtActors.push(randomAct)

    this.setState({filteredActors: filtActors})
  }

  sortAlph = () => {
    var sortedAct = this.state.filteredActors
    sortedAct.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({filteredActors: sortedAct})
  }

  sortPop = () => {
    var sortedAct = this.state.filteredActors
    sortedAct.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1)
    this.setState({filteredActors: sortedAct})
  }

  deleteActor = (indexN) => {

    var newActorList = [...this.state.filteredActors]
    newActorList.splice(indexN, 1)
    this.setState({ filteredActors: newActorList})
  }

  render() {
    
    return (
      <div className="App">
        <h1>IronContainer</h1>
        <input onChange={this.handleSearch} type="text"/>
        <button onClick={this.addRandom}>Add random Actor</button>
        <button onClick={this.sortAlph}>Sort by name</button>
        <button onClick={this.sortPop}>Sort by popularity</button>
        <table className="container">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            </thead>
          <tbody>
        {
          this.state.filteredActors.map((item, index) =>
          <Actor {...item} 
          key={`${index.toString()}${item.name}`}
          index={index.toString()}
          deleteActor={this.deleteActor}
          />)
        }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
