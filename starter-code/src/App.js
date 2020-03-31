import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    Actors: contacts.slice(0,5)
  };

addRandom = () => {
let randomContact= contacts[Math.floor(Math.random() * contacts.length)]
let actorsList = this.state.Actors
actorsList.push(randomContact)
this.setState({
  Actors: actorsList
})
}

sortByName = () => {
let actorsByName=this.state.Actors
actorsByName.sort(function (a,b) {
  let nameA = a.name
  let nameB = b.name
  if(nameA<nameB){
  return -1;
  }
  if(nameB<nameA){
  return 1;
  }
  return 0;
})
  this.setState({
    Actors: actorsByName
  })
}

sortByPopularity = () => {
  let actorsByPoularity=this.state.Actors
  actorsByPoularity.sort(function (a,b){
    return a.popularity-b.popularity
  })
this.setState({
  Actors: actorsByPoularity
})
}

deleteActor = (index) =>{
  console.log(index)
  let actorsCopy = [...this.state.Actors]
  actorsCopy.splice(index, 1)
  this.setState({
    Actors: actorsCopy
  })
}

  render() {
    return (
    <div className="App">
    <h1>IronContacts</h1>
    <button onClick={this.addRandom}>Add Random Contact</button>
    <button onClick={this.sortByName}>Sort by name</button>
    <button onClick={this.sortByPopularity}>Sort by popularity</button>
    <div className="captions">
    <span><b>Picture</b></span>
    <span><b>Name</b></span>
    <span><b>Popularity</b></span>
    <span><b>Action</b></span>
    </div>
    {this.state.Actors.map(contacts => {
      return(
      <table>
        <tr>
    <td><img src={contacts.pictureUrl}alt='actor-pic' height='70em' /></td>
    <td>{contacts.name}</td>
    <td>{contacts.popularity}</td>
    <td><button onClick={this.deleteActor}>Delete</button></td>
        </tr>
      </table>
   )
  })
  }
  </div>
    )}
}
export default App;