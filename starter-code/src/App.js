import React, { Component } from 'react';
import './App.css';
import Actor from './Actor';
import Actors from './contacts.json';
class App extends Component {
  state = {
    Actors: Actors,
    filteredActors : Actors.slice(0,5)
  }
  //get a random actor from the total Actor list
  addRandom = (()=>{
    var randomIndex = Math.floor(Math.random()*this.state.Actors.length);
    var filtActors = this.state.filteredActors;
    var randomAct = this.state.Actors[randomIndex];
    if (!filtActors.includes(randomAct)){
      filtActors.push(randomAct);
    }
    else{
      this.addRandom();
    }
    this.setState({filteredActors : filtActors})
  })
  //sort list by Name 
  sortName = (() =>{
    var sortedAct = this.state.filteredActors;
    sortedAct.sort((a,b)=> (a.name > b.name) ? 1 : -1)
    this.setState({filteredActors : sortedAct})
  })
  //sort list by popularity
  sortPopu = (() =>{
    var sortedAct = this.state.filteredActors;
    sortedAct.sort((a,b)=> (a.popularity < b.popularity) ? 1 : -1)
    this.setState({filteredActors : sortedAct})
  })
  //delete Actor
  deleteActor = ((indexN)=> {
    var newActors = [...this.state.filteredActors];
    newActors.splice(indexN, 1);
    this.setState({ filteredActors: newActors });
  })
  //search entire list of Actors
  searchHandler = ((e)=>{
    var search = e.target.value;
    if (search === "")
    {
      this.setState({
        filteredActors: Actors.slice(0,5)
      });
    }
    else{
      var actorFiltered = this.state.Actors.filter(function(e) {
        return e.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 
      })
      this.setState({
        filteredActors : actorFiltered
      })
    }
    

  })
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>
        <div className = "search">
          <label>Search Actor: </label>
          <input onChange = {this.searchHandler}></input>
        </div>
        <div>
          <button className = "btn" onClick = {this.addRandom}>Add random contact</button>
          <button className = "btn" onClick = {this.sortName}>Sort by Name(A-Z)</button>
          <button className = "btn" onClick = {this.sortPopu}>Sort by Popularity (High-Low)</button>
        </div>
        
        <table className = "filters">
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
                deleteActor = {this.deleteActor}
              />)
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
